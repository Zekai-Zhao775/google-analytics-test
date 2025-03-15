# Nonprofit Organization Website with Google Analytics

A simple nonprofit organization website built with Next.js that demonstrates Google Analytics 4 integration for tracking user interactions and donations.

## Features

- Responsive design
- Navigation with multiple pages (Home, About Us, Events, Beneficiaries, Contact Us)
- Donation form with GA4 event tracking
- Google Analytics 4 integration

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy the environment variables template:
   ```bash
   cp .env.local.example .env.local
   ```

4. Set up your Google Analytics ID:
   - Create a Google Analytics 4 property at [analytics.google.com](https://analytics.google.com/)
   - Get your measurement ID (starts with "G-")
   - Add it to your `.env.local` file:
     ```
     NEXT_PUBLIC_GA_ID=your-measurement-id
     ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Deployment with Vercel

The easiest way to deploy and test this application with proper Google Analytics integration is using Vercel:

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign up/log in
3. Create a new project and import your repository
4. In the project settings, add your environment variable:
   - Name: `NEXT_PUBLIC_GA_ID`
   - Value: Your Google Analytics measurement ID
5. Deploy the application
6. Your site will be live with Google Analytics properly configured

## Testing Google Analytics

After deployment:

1. Visit your deployed site
2. Navigate between pages
3. Fill out and submit the donation form
4. Check your Google Analytics dashboard to see the tracked events
5. Enable Debug Mode by visiting your site with `?debug_mode=1` parameter to see detailed event data
