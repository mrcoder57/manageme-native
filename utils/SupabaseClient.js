import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://iuwclejajnnephyckpcz.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1d2NsZWpham5uZXBoeWNrcGN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYwNzU5NTEsImV4cCI6MjAyMTY1MTk1MX0.xfe7XhbcwmqWXgmtq9MtrAFpr8P0CJGTFEzGt4pz_Ic";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);