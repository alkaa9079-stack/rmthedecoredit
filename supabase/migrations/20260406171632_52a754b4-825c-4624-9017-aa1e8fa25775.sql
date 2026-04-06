
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS description text;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS category text DEFAULT 'anniversary';
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS hook text;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS perfect_for text;
