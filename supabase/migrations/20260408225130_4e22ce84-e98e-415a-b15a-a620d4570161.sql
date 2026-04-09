
CREATE TABLE public.orders (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  delivery_type TEXT NOT NULL DEFAULT 'me',
  milestone_date DATE,
  items JSONB NOT NULL DEFAULT '[]'::jsonb,
  status TEXT NOT NULL DEFAULT 'confirmed',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert orders (public checkout, no auth required)
CREATE POLICY "Anyone can place an order"
  ON public.orders
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow reading an order by its ID (for thank-you page)
CREATE POLICY "Orders are readable by ID"
  ON public.orders
  FOR SELECT
  TO public
  USING (true);
