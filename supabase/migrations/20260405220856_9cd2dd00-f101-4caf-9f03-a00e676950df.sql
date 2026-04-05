
CREATE TABLE public.milestones (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  occasion TEXT NOT NULL DEFAULT 'Birthday',
  date DATE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.milestones ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Milestones are publicly readable" ON public.milestones FOR SELECT USING (true);
CREATE POLICY "Anyone can insert milestones" ON public.milestones FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can delete milestones" ON public.milestones FOR DELETE USING (true);
