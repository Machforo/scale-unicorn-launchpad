-- Verify RLS is enabled on form_responses (should already be enabled)
-- This is a safety check
ALTER TABLE public.form_responses ENABLE ROW LEVEL SECURITY;

-- Add explicit DENY policy for UPDATE - only admins should be able to update
DROP POLICY IF EXISTS "Only admins can update form responses" ON public.form_responses;
CREATE POLICY "Only admins can update form responses"
ON public.form_responses
FOR UPDATE
TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

-- Add explicit DENY policy for DELETE - only admins should be able to delete
DROP POLICY IF EXISTS "Only admins can delete form responses" ON public.form_responses;
CREATE POLICY "Only admins can delete form responses"
ON public.form_responses
FOR DELETE
TO authenticated
USING (public.is_admin());

-- Add a policy to block anonymous users from UPDATE/DELETE
CREATE POLICY "Block anonymous UPDATE on form responses"
ON public.form_responses
FOR UPDATE
TO anon
USING (false);

CREATE POLICY "Block anonymous DELETE on form responses"
ON public.form_responses
FOR DELETE
TO anon
USING (false);