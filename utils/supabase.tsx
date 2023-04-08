import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  "https://yqszdgghrijeljipenkp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlxc3pkZ2docmlqZWxqaXBlbmtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA5MjE1ODEsImV4cCI6MTk5NjQ5NzU4MX0.1jgwBjAbuMm2qLOsfsm3n4TrYwUaJapyLU95R1JIDtI"
);
