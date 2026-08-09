ALTER TABLE public.leads
  ADD COLUMN IF NOT EXISTS status text NOT NULL DEFAULT 'new',
  ADD COLUMN IF NOT EXISTS selected_path text,
  ADD COLUMN IF NOT EXISTS loan_program text,
  ADD COLUMN IF NOT EXISTS referrer text;
CREATE INDEX IF NOT EXISTS leads_status_created_idx ON public.leads (status, created_at DESC);