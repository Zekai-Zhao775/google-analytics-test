# Nonprofit Website with Google Analytics 4

Next.js website demonstrating GA4 integration for tracking user interactions and donations.

## Setup

### Requirements
- Node.js 18+
- npm or yarn

### Install
```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
npm install
```

### Configuration
1. Create a `.env` file with your Google Analytics 4 measurement ID:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

2. Start development server:
```bash
npm run dev
```

3. Visit http://localhost:3000

## Deployment
Deploy with [Vercel](https://vercel.com):
1. Push to GitHub
2. Import repository in Vercel
3. Add environment variable: `NEXT_PUBLIC_GA_ID`
4. Deploy

## Testing Analytics
- Navigate the site
- Submit the donation form
- Check GA4 dashboard for events