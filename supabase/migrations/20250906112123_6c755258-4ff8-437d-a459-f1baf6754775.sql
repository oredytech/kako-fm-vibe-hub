-- Fix security vulnerability: Remove public access to newsletter emails
-- This prevents spammers from harvesting subscriber email addresses
-- while maintaining subscription functionality and admin/system access

-- Drop the existing public SELECT policy
DROP POLICY IF EXISTS "Anyone can view active subscriptions" ON public.newsletters;

-- Create a new restricted policy that only allows system/admin access
-- The edge functions use service role key so they can still access the data
CREATE POLICY "System and admins can view subscriptions" 
ON public.newsletters 
FOR SELECT 
USING (
  -- Allow service role (for edge functions)
  current_setting('request.jwt.claims', true)::json->>'role' = 'service_role'
  OR
  -- Allow authenticated admin users
  (auth.uid() IS NOT NULL AND 
   EXISTS (
     SELECT 1 FROM public.profiles 
     WHERE user_id = auth.uid() 
     AND role = 'admin'
   ))
);