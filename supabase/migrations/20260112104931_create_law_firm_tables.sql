/*
  # Law Firm Database Schema

  ## Overview
  This migration creates tables for a law firm website with AI chatbot integration.

  ## Tables Created

  ### consultations
  Stores consultation requests from the contact form
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Client's full name
  - `email` (text) - Client's email address
  - `phone` (text, nullable) - Client's phone number
  - `practice_area` (text) - Selected practice area
  - `message` (text) - Client's message/case details
  - `status` (text) - Request status (pending/contacted/closed)
  - `created_at` (timestamptz) - Timestamp of submission

  ### chat_history
  Stores chatbot conversation history for analysis and training
  - `id` (uuid, primary key) - Unique identifier
  - `user_message` (text) - User's message
  - `assistant_message` (text) - AI assistant's response
  - `session_id` (uuid, nullable) - Optional session identifier
  - `created_at` (timestamptz) - Timestamp of conversation

  ## Security
  - RLS enabled on all tables
  - Public can insert consultations and chat history
  - Only authenticated staff can read/update consultation requests
  - Chat history readable by authenticated users only
*/

CREATE TABLE IF NOT EXISTS consultations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  practice_area text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS chat_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_message text NOT NULL,
  assistant_message text NOT NULL,
  session_id uuid,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_history ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit consultation requests"
  ON consultations
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated staff can read consultations"
  ON consultations
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated staff can update consultations"
  ON consultations
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Anyone can insert chat history"
  ON chat_history
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read chat history"
  ON chat_history
  FOR SELECT
  TO authenticated
  USING (true);
