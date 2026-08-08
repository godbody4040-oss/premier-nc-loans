/**
 * Lightweight, provider-agnostic conversion tracking.
 *
 * No analytics provider is connected by default. This module simply forwards
 * events to whichever provider is present on the page at runtime:
 *   - Google Tag Manager  (window.dataLayer)
 *   - Google Analytics 4  (window.gtag)
 *   - Meta Pixel          (window.fbq)
 *
 * Adding a provider later requires no code changes here — install the tag and
 * these events start flowing automatically.
 */

export type TrackEvent =
  | "hero_cta_prequal_click"
  | "hero_cta_calculator_click"
  | "prequal_start"
  | "prequal_step_complete"
  | "prequal_complete"
  | "calculator_interact"
  | "calculator_cta_click"
  | "contact_submit"
  | "phone_click"
  | "email_click"
  | "resource_download"
  | "resource_view"
  | "investor_cta_click"
  | "talk_with_jorge_click";

type Params = Record<string, string | number | boolean | undefined>;

interface TrackingWindow extends Window {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
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

/** Fires an event at most once per page session (e.g. funnel start). */
const fired = new Set<string>();
export function trackOnce(event: TrackEvent, params: Params = {}) {
  if (fired.has(event)) return;
  fired.add(event);
  track(event, params);
}
