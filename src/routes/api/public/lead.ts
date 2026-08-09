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
  zip: optional(10),
  priceRange: optional(80),
  downPayment: optional(80),

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
  pagePath: optional(200),

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

        const { company, pagePath, ...lead } = parsed.data;
        if (company) {
          // Honeypot tripped — accept silently without storing.
          return Response.json({ ok: true });
        }

        // 1. Persist every submission to the private leads table. Only server
        //    code can read it: the table has RLS on with no public policies.
        try {
          const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
          const { error } = await supabaseAdmin.from("leads").insert({
            lead_type: lead.leadType,
            source: lead.source || null,
            first_name: lead.first,
            last_name: lead.last || null,
            email: lead.email,
            phone: lead.phone || null,
            goal: lead.goal || null,
            property_type: lead.propertyType || null,
            location: lead.location || null,
            zip: lead.zip || null,
            price_range: lead.priceRange || null,
            down_payment: lead.downPayment || null,

            timeline: lead.timeline || null,
            employment: lead.employment || null,
            credit_band: lead.creditBand || null,
            first_time: lead.firstTime || null,
            contact_preference: lead.contactPreference || null,
            resource: lead.resource || null,
            message: lead.message || null,
            page_path: pagePath || null,
          });
          if (error) {
            console.error("Lead insert failed", error);
            return Response.json(
              { ok: false, error: "We could not submit your request. Please try again." },
              { status: 500 },
            );
          }
        } catch (error) {
          console.error("Lead storage error", error);
          return Response.json(
            { ok: false, error: "We could not submit your request. Please try again." },
            { status: 500 },
          );
        }

        // 2. Optional CRM/automation forward. The lead is already saved, so a
        //    webhook failure is logged rather than shown to the visitor.
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
            }
          } catch (error) {
            console.error("Lead webhook error", error);
          }
        }

        return Response.json({ ok: true });

      },
    },
  },
});
