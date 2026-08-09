/**
 * Conversion tracking for Premier Lending NC.
 *
 * Two layers run side by side:
 *  1. Lovable's built-in analytics — automatic on the published site, no code.
 *  2. Google Analytics 4 — initialised here when a measurement ID is present.
 *
 * Events are also forwarded to Google Tag Manager (window.dataLayer) and Meta
 * Pixel (window.fbq) when those tags exist, so adding either later needs no
 * code change.
 */

export type TrackEvent =
  | "hero_cta_prequal_click"
  | "hero_cta_calculator_click"
  | "prequal_start"
  | "prequal_step_complete"
  | "prequal_complete"
  | "calculator_interact"
  | "calculator_start"
  | "calculator_complete"
  | "calculator_cta_click"
  | "contact_submit"
  | "contact_form_start"
  | "contact_form_complete"
  | "prequal_form_start"
  | "phone_click"
  | "email_click"
  | "resource_download"
  | "resource_download_start"
  | "resource_download_complete"
  | "loan_program_cta_click"
  | "path_select"
  | "roadmap_stage_open"
  | "resource_view"
  | "investor_cta_click"
  | "talk_with_jorge_click"
  | "tool_open"
  | "tool_interact"
  | "tool_cta_click"
  | "compare_program_select"
  | "compare_cta_click"
  | "page_view";

type Params = Record<string, string | number | boolean | undefined>;

interface TrackingWindow extends Window {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
}

/** GA4 measurement ID, supplied by the Google Analytics connector when linked. */
export const GA_MEASUREMENT_ID =
  (import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY"] as string | undefined) ??
  (import.meta.env["VITE_GA_MEASUREMENT_ID"] as string | undefined) ??
  "";

let initialised = false;

/** Loads gtag.js once, on the client. Safe to call repeatedly. */
export function initAnalytics() {
  if (typeof window === "undefined" || initialised) return;
  initialised = true;

  const w = window as TrackingWindow;
  w.dataLayer = w.dataLayer || [];
  if (typeof w.gtag !== "function") {
    w.gtag = (...args: unknown[]) => {
      w.dataLayer!.push(args);
    };
  }

  if (!GA_MEASUREMENT_ID) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  w.gtag("js", new Date());
  // Route changes are reported manually so SPA navigation is measured correctly.
  w.gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });
}

export function track(event: TrackEvent, params: Params = {}) {
  if (typeof window === "undefined") return;
  const w = window as TrackingWindow;
  const payload = { ...params, event_source: "premier-lending-nc" };

  try {
    if (Array.isArray(w.dataLayer)) w.dataLayer.push({ event, ...payload });
    if (typeof w.gtag === "function") w.gtag("event", event, payload);
    if (typeof w.fbq === "function") w.fbq("trackCustom", event, payload);
  } catch {
    // Tracking must never break the experience.
  }
}

/** Reports a virtual page view after client-side navigation. */
export function trackPageView(path: string, title?: string) {
  if (typeof window === "undefined") return;
  const w = window as TrackingWindow;
  try {
    if (typeof w.gtag === "function") {
      w.gtag("event", "page_view", {
        page_path: path,
        page_location: window.location.href,
        page_title: title ?? document.title,
      });
    }
    if (Array.isArray(w.dataLayer)) w.dataLayer.push({ event: "page_view", page_path: path });
  } catch {
    // no-op
  }
}

/** Fires an event at most once per page session (e.g. funnel start). */
const fired = new Set<string>();
export function trackOnce(event: TrackEvent, params: Params = {}) {
  if (fired.has(event)) return;
  fired.add(event);
  track(event, params);
}

/**
 * Like trackOnce, but de-duplicated on a caller-supplied key so the same event
 * can fire once per resource/tool/program rather than once per page.
 */
export function trackOnceFor(key: string, event: TrackEvent, params: Params = {}) {
  const id = `${event}:${key}`;
  if (fired.has(id)) return;
  fired.add(id);
  track(event, params);
}
