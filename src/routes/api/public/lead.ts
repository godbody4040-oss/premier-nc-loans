import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const leadSchema = z.object({
  goal: z.string().trim().min(1).max(80),
  propertyType: z.string().trim().max(80).optional().default(""),
  location: z.string().trim().max(120).optional().default(""),
  priceRange: z.string().trim().max(80).optional().default(""),
  timeline: z.string().trim().min(1).max(80),
  employment: z.string().trim().max(80).optional().default(""),
  creditBand: z.string().trim().max(80).optional().default(""),
  firstTime: z.string().trim().max(40).optional().default(""),
  first: z.string().trim().min(1).max(60),
  last: z.string().trim().min(1).max(60),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(10).max(20),
  contactPreference: z.string().trim().max(40).optional().default(""),
  message: z.string().trim().max(1000).optional().default(""),
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
              body: JSON.stringify({ source: "premier-lending-nc", submittedAt: new Date().toISOString(), ...lead }),
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
