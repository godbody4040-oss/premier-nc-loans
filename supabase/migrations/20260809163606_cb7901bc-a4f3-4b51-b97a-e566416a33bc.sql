ALTER TABLE public.leads
  ADD COLUMN IF NOT EXISTS down_payment text,
  ADD COLUMN IF NOT EXISTS zip text;