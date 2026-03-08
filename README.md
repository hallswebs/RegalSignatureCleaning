# Regal Signature Cleaning

Premium residential and commercial cleaning services website built with **Next.js 16**, **TypeScript**, and **Tailwind CSS v4**. Deployed on **Vercel**.

## Pages

- **Home** — Hero section, services overview, stats, testimonials, and CTA
- **About** — Company story, mission, values, timeline, and team
- **Services** — Residential & commercial packages with pricing and add-ons
- **Gallery** — Project showcase (add your own photos!)
- **Contact** — Contact form, business info, and service area details

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deploy on Vercel

1. Push this repo to GitHub
2. Import the project on [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — just click **Deploy**

## Customization

- **Colors & branding**: Edit CSS variables in `src/app/globals.css`
- **Contact info**: Update phone, email, and address in `src/components/Footer.tsx` and `src/app/contact/page.tsx`
- **Services & pricing**: Edit `src/app/services/page.tsx`
- **Gallery photos**: Replace placeholder cards in `src/app/gallery/page.tsx` with real images
- **Contact form**: Wire up the form in `src/components/ContactForm.tsx` to your preferred backend

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- Deployed on [Vercel](https://vercel.com/)
