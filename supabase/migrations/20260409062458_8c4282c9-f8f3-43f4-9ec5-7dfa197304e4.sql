
-- 1. Add user_id columns
ALTER TABLE public.milestones ADD COLUMN user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE;
ALTER TABLE public.orders ADD COLUMN user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE;

-- 2. Drop all existing policies on milestones
DROP POLICY IF EXISTS "Authenticated users can delete milestones" ON public.milestones;
DROP POLICY IF EXISTS "Authenticated users can insert milestones" ON public.milestones;
DROP POLICY IF EXISTS "Milestones are publicly readable" ON public.milestones;

-- 3. Drop all existing policies on orders
DROP POLICY IF EXISTS "Anyone can place an order" ON public.orders;
DROP POLICY IF EXISTS "Orders are readable by ID" ON public.orders;

-- 4. Drop all existing policies on products
DROP POLICY IF EXISTS "Authenticated users can delete products" ON public.products;
DROP POLICY IF EXISTS "Authenticated users can insert products" ON public.products;
DROP POLICY IF EXISTS "Authenticated users can update products" ON public.products;
DROP POLICY IF EXISTS "Products are publicly readable" ON public.products;

-- 5. Milestones: authenticated users own their rows
CREATE POLICY "Users can select own milestones" ON public.milestones
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own milestones" ON public.milestones
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own milestones" ON public.milestones
  FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- 6. Orders: authenticated users own their rows
CREATE POLICY "Users can select own orders" ON public.orders
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own orders" ON public.orders
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

-- 7. Products: publicly readable, authenticated can insert/update
CREATE POLICY "Products publicly readable" ON public.products
  FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "Authenticated insert products" ON public.products
  FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Authenticated update products" ON public.products
  FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

-- 8. Storage: only authenticated users can access files
CREATE POLICY "Authenticated users can select storage objects" ON storage.objects
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert storage objects" ON storage.objects
  FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Authenticated users can update storage objects" ON storage.objects
  FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Authenticated users can delete storage objects" ON storage.objects
  FOR DELETE TO authenticated USING (true);
