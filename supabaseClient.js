import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://qixlpkodlqaoogefujmj.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpeGxwa29kbHFhb29nZWZ1am1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYyNzAzMTgsImV4cCI6MjAzMTg0NjMxOH0.g6WzSqFQXLyCaD8X4j1HcHX7BUa_3Uf1oYZUIyyYYhw';
export const supabase = createClient(supabaseUrl, supabaseKey);
