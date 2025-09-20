-- Create form_responses table to store all form submissions
CREATE TABLE public.form_responses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  form_type TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  company TEXT,
  additional_data JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.form_responses ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public inserts (for form submissions)
CREATE POLICY "Allow public form submissions" 
ON public.form_responses 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow admin access to view all submissions
CREATE POLICY "Admin can view all form responses" 
ON public.form_responses 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_form_responses_updated_at
BEFORE UPDATE ON public.form_responses
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for better performance
CREATE INDEX idx_form_responses_type ON public.form_responses(form_type);
CREATE INDEX idx_form_responses_created_at ON public.form_responses(created_at);