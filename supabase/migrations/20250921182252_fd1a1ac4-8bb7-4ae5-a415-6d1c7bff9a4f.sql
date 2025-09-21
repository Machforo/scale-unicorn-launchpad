-- Enable realtime for form_responses table
ALTER TABLE public.form_responses REPLICA IDENTITY FULL;

-- Add the table to the realtime publication
ALTER PUBLICATION supabase_realtime ADD TABLE public.form_responses;