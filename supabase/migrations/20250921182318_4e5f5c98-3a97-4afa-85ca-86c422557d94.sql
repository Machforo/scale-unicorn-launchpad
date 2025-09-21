-- Enable realtime for form_responses table (if not already set)
ALTER TABLE public.form_responses REPLICA IDENTITY FULL;