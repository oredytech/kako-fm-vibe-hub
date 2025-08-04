-- Create newsletters table to store subscriber emails
CREATE TABLE public.newsletters (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  is_active BOOLEAN NOT NULL DEFAULT true,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.newsletters ENABLE ROW LEVEL SECURITY;

-- Create policies for newsletter subscriptions (public can subscribe)
CREATE POLICY "Anyone can subscribe to newsletter" 
ON public.newsletters 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can view active subscriptions" 
ON public.newsletters 
FOR SELECT 
USING (is_active = true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_newsletters_updated_at
  BEFORE UPDATE ON public.newsletters
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create content notifications table to track what has been sent
CREATE TABLE public.content_notifications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  content_type TEXT NOT NULL, -- 'article', 'video', 'program'
  content_id TEXT NOT NULL,
  content_title TEXT NOT NULL,
  sent_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on notifications table
ALTER TABLE public.content_notifications ENABLE ROW LEVEL SECURITY;

-- Only system can insert notifications
CREATE POLICY "System can manage notifications" 
ON public.content_notifications 
FOR ALL 
USING (true);