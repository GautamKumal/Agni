
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://dccfmatyokehzrduqgwn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjY2ZtYXR5b2tlaHpyZHVxZ3duIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk0MDMyNTksImV4cCI6MjAzNDk3OTI1OX0.oPZr_EbcIZoAIkgd17fssthEr2dju_v6M0NHLxo3De4'
 export const supabase = createClient(supabaseUrl, supabaseKey)