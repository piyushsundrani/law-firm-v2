# Quick Setup Guide

## Complete these steps to get your law firm website fully operational:

### Step 1: Get Your Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click **"Create API Key"**
4. Copy the generated API key

### Step 2: Configure the API Key in Supabase

1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Navigate to **Project Settings** (gear icon) → **Edge Functions**
4. Scroll to **Secrets** section
5. Click **"Add Secret"**
6. Enter:
   - **Name**: `GEMINI_API_KEY`
   - **Value**: Paste your Gemini API key from Step 1
7. Click **"Save"**

### Step 3: Run the Development Server

```bash
npm run dev
```

Your website will be available at `http://localhost:5173`

### Step 4: Test the Features

1. **Browse the Website**: Navigate through all pages
2. **Test Contact Form**: Submit a consultation request
3. **Try the Chatbot**: Click the chat icon in the bottom right
   - Ask legal questions
   - Request information about practice areas
   - Generate a PDF summary of your conversation

## That's It!

Your professional law firm website is now fully operational with:
- AI-powered legal assistant chatbot
- Secure consultation request handling
- PDF document generation
- Responsive design across all devices

## Need Help?

Check the main README.md for detailed documentation, troubleshooting tips, and customization options.
