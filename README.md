# Sterling & Associates - Law Firm Website

A professional, modern law firm website built with React.js, featuring a Gemini-powered AI chatbot for legal assistance and secure PDF document generation.

## Features

### Website Features
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Professional UI**: Premium design with navy blue, dark grey, off-white, and gold accent colors
- **Multiple Pages**:
  - Home: Hero section, practice area overview, testimonials
  - About Us: Firm history, mission, attorney profiles
  - Practice Areas: Detailed service pages with FAQs
  - Resources: Legal guides and downloadable PDFs
  - Contact: Consultation request form with office information

### AI Chatbot Features
- **Gemini-Powered**: Intelligent legal assistant using Google's Gemini API
- **Capabilities**:
  - Answer general legal questions
  - Guide users to relevant practice areas
  - Collect structured case details
  - Generate conversation summaries
- **Professional UI**:
  - Floating chat widget
  - Expandable full-screen mode
  - Legal disclaimer display
  - Real-time message history

### PDF Generation
- **Branded Documents**: Professional PDF templates with law firm branding
- **Features**:
  - Conversation summary export
  - Consultation notes generation
  - Law firm header and footer
  - Page numbering
  - Legal disclaimers

### Security & Compliance
- **Supabase Backend**: Secure data storage with Row Level Security (RLS)
- **HTTPS Ready**: Secure communication channels
- **Input Validation**: Sanitized user inputs
- **Privacy Compliant**: Clear legal disclaimers

## Tech Stack

### Frontend
- React.js 18
- TypeScript
- React Router DOM
- Tailwind CSS
- Lucide React (icons)

### Backend
- Supabase (Database & Edge Functions)
- PostgreSQL with RLS
- Gemini API (AI chatbot)
- pdf-lib (PDF generation)

## Getting Started

### Prerequisites
- Node.js 18+ installed
- Supabase account (database is already configured)
- Google Gemini API key

### Installation

1. **Install Dependencies**
```bash
npm install
```

2. **Configure Gemini API Key**

The Supabase database is already set up. You only need to add your Gemini API key as an environment variable in the Supabase dashboard:

- Go to your Supabase project dashboard
- Navigate to Project Settings > Edge Functions > Secrets
- Add a new secret:
  - Name: `GEMINI_API_KEY`
  - Value: Your Google Gemini API key

To get a Gemini API key:
1. Visit https://makersuite.google.com/app/apikey
2. Click "Create API Key"
3. Copy the key and add it to Supabase secrets

3. **Run Development Server**
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be created in the `dist` directory.

## Database Schema

### Tables

#### consultations
Stores consultation requests from the contact form
- `id`: Unique identifier
- `name`: Client's full name
- `email`: Client's email address
- `phone`: Client's phone number
- `practice_area`: Selected practice area
- `message`: Client's message/case details
- `status`: Request status (pending/contacted/closed)
- `created_at`: Timestamp

#### chat_history
Stores chatbot conversation history
- `id`: Unique identifier
- `user_message`: User's message
- `assistant_message`: AI response
- `session_id`: Optional session identifier
- `created_at`: Timestamp

## Edge Functions

### gemini-chat
Handles AI chatbot interactions with Gemini API
- Endpoint: `/functions/v1/gemini-chat`
- Method: POST
- Payload: `{ message, conversationHistory }`

### generate-pdf
Generates branded PDF documents from chat conversations
- Endpoint: `/functions/v1/generate-pdf`
- Method: POST
- Payload: `{ messages }`
- Returns: PDF file download

## Project Structure

```
src/
├── components/
│   ├── Layout.tsx          # Main layout with header/footer
│   └── Chatbot.tsx         # AI chatbot component
├── pages/
│   ├── Home.tsx            # Homepage
│   ├── About.tsx           # About page
│   ├── PracticeAreas.tsx   # Practice areas
│   ├── Resources.tsx       # Resources & guides
│   └── Contact.tsx         # Contact form
├── lib/
│   └── supabase.ts         # Supabase client
├── App.tsx                 # Main app with routing
├── main.tsx                # Entry point
└── index.css               # Global styles

supabase/
└── functions/
    ├── gemini-chat/        # AI chatbot function
    └── generate-pdf/       # PDF generation function
```

## Customization

### Design Colors
The design uses a professional color palette. To customize colors, edit `tailwind.config.js` or update the Tailwind classes in components:
- Primary: Navy blue (`slate-900`)
- Secondary: Dark grey (`slate-800`)
- Accent: Gold (`amber-600`)
- Background: Off-white (`slate-50`)

### Typography
- Headings: Merriweather (serif)
- Body: Inter (sans-serif)

Fonts are loaded via Google Fonts in `src/index.css`

## Important Notes

### Legal Disclaimers
The chatbot and all legal resources include appropriate disclaimers stating that the information provided is for general purposes only and does not constitute legal advice.

### Data Privacy
- All consultation requests are stored securely in Supabase
- Chat history is logged for quality improvement
- No sensitive data is logged or transmitted insecurely

### Production Deployment

For production deployment:
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting service (Vercel, Netlify, etc.)
3. Ensure environment variables are configured in your hosting platform
4. The backend (Supabase Edge Functions) is already deployed and ready

## Support

For issues or questions about the implementation:
1. Check the Supabase dashboard for Edge Function logs
2. Review browser console for frontend errors
3. Ensure the Gemini API key is correctly configured

## License

This project is proprietary software for Sterling & Associates.
