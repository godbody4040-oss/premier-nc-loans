import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const optional = (max: number) => z.string().trim().max(max).optional().default("");

/**
 * Centralized lead payload — shared by every lead source on the site
 * (pre-qualification funnel, resource downloads, contact and CTA forms).
 * Deliberately collects no sensitive financial information.
 */
const leadSchema = z.object({
  leadType: z
    .enum(["pre-qualification", "contact", "resource-download", "calculator", "investor"])
    .default("pre-qualification"),
  source: optional(60),
  goal: optional(80),
  propertyType: optional(80),
  location: optional(120),
  priceRange: optional(80),
  timeline: optional(80),
  employment: optional(80),
  creditBand: optional(80),
  firstTime: optional(40),
  first: z.string().trim().min(1).max(60),
  last: optional(60),
  email: z.string().trim().email().max(255),
  phone: optional(20),
  contactPreference: optional(40),
  resource: optional(120),
  message: optional(1000),
  company: z.string().max(0).optional().default(""), // honeypot: must stay empty
});


export const Route = createFileRoute("/api/public/lead")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
        }

        const parsed = leadSchema.safeParse(body);
        if (!parsed.success) {
          return Response.json({ ok: false, error: "Please review the form and try again." }, { status: 400 });
        }

        const { company, ...lead } = parsed.data;
        if (company) {
          // Honeypot tripped — accept silently without forwarding.
          return Response.json({ ok: true });
        }

        // Webhook-ready: set LEAD_WEBHOOK_URL to route submissions to a CRM,
        // email service or automation platform. Without it, the endpoint
        // validates and accepts the submission without storing anything.
        const webhook = process.env["LEAD_WEBHOOK_URL"];
        if (webhook) {
          try {
            const res = await fetch(webhook, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ site: "premier-lending-nc", submittedAt: new Date().toISOString(), ...lead }),
            });
            if (!res.ok) {
              console.error(`Lead webhook failed [${res.status}]: ${await res.text()}`);
              return Response.json({ ok: false, error: "We could not submit your request." }, { status: 502 });
            }
          } catch (error) {
            console.error("Lead webhook error", error);
            return Response.json({ ok: false, error: "We could not submit your request." }, { status: 502 });
          }
        }

        return Response.json({ ok: true });
      },
    },
  },
});
