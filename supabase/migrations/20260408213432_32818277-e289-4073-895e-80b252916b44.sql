-- Fix 1: Replace overly permissive milestones DELETE policy
DROP POLICY IF EXISTS "Anyone can delete milestones" ON public.milestones;
CREATE POLICY "Authenticated users can delete milestones"
  ON public.milestones
  FOR DELETE
  TO authenticated
  USING (true);

-- Fix 2: Replace overly permissive milestones INSERT policy
DROP POLICY IF EXISTS "Anyone can insert milestones" ON public.milestones;
CREATE POLICY "Authenticated users can insert milestones"
  ON public.milestones
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Fix 3: Add storage object RLS policies for products bucket
CREATE POLICY "Public can view product images"
  ON storage.objects
  FOR SELECT
  TO public
  USING (bucket_id = 'products');

CREATE POLICY "Only authenticated users can upload product images"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'products');

CREATE POLICY "Only authenticated users can update product images"
  ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (bucket_id = 'products');

CREATE POLICY "Only authenticated users can delete product images"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'products');