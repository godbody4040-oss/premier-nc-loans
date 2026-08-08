CREATE TABLE public.leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_type text NOT NULL,
  source text,
  first_name text NOT NULL,
  last_name text,
  email text NOT NULL,
  phone text,
  goal text,
  property_type text,
  location text,
  price_range text,
  timeline text,
  employment text,
  credit_band text,
  first_time text,
  contact_preference text,
  resource text,
  message text,
  page_path text,
  notified_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.leads TO service_role;

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE INDEX leads_created_at_idx ON public.leads (created_at DESC);