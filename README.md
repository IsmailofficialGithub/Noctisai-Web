# Noctisai - Landing Page

A modern, responsive Next.js landing page for the Noctisai Windows desktop application.

## About

This is the official download page for Noctisai, a Windows-native desktop application for private, secure AI chat with zero-knowledge encryption and screen-sharing protection.

## Tech Stack

- **Next.js 16+** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **React 19**

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── Features.tsx        # Features grid
│   ├── HowItWorks.tsx      # Step-by-step guide
│   ├── Download.tsx        # Download section
│   ├── Links.tsx           # Social links
│   └── Privacy.tsx         # Privacy & Security section
└── public/                 # Static assets
```

## Configuration

### Update Placeholder URLs

Before deploying, update the following placeholder URLs:

1. **Download URL** (`components/Download.tsx`):
   - Current: `/downloads/Noctisai-Setup.exe`
   - Update to your actual installer URL (GitHub Releases, CDN, etc.)

2. **GitHub Repository** (`components/Links.tsx`):
   - Current: `https://github.com/yourusername/noctisai`
   - Update with your actual repository URL

3. **Social Media Links** (`components/Links.tsx`):
   - Update Twitter/X and LinkedIn URLs

4. **SEO Metadata** (`app/layout.tsx`):
   - Update `metadataBase` and `openGraph.url` with your actual domain
   - Update Twitter handle in `twitter.creator`

## Build

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Dark mode theme
- ✅ Smooth animations and transitions
- ✅ SEO optimized with proper meta tags
- ✅ Accessible and semantic HTML
- ✅ Modern, professional design

## Deployment

This Next.js app can be deployed on:

- [Vercel](https://vercel.com) (recommended)
- [Netlify](https://netlify.com)
- Any platform that supports Next.js

## License

Private property - All rights reserved.
