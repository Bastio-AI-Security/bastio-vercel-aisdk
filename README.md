# Bastio AI Security + Vercel AI SDK Demo

This project showcases how [Bastio AI Security](https://www.bastio.com) works together with the [Vercel AI SDK](https://ai-sdk.dev/docs/getting-started/nextjs-app-router) to build secure AI-powered applications.

Bastio provides enterprise-grade security for LLM applications, including:
- Prompt injection protection
- Data leakage prevention (PII & DLP)
- Real-time threat detection
- Policy enforcement and analytics
- API key management and caching

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), integrated with the Vercel AI SDK for building AI chatbots and applications.

## Setup

1. Copy the environment variables template:

```bash
cp .env.example .env.local
```

2. Fill in your Bastio credentials from the [Bastio dashboard](https://www.bastio.com):
   - `BASTIO_PROXY_URL` - API gateway URL (default: `https://api.bastio.com/v1`)
   - `BASTIO_PROXY_ID` - Your proxy ID from Bastio dashboard
   - `BASTIO_API_KEY` - Your API key from Bastio dashboard

**Free Tier:** Bastio offers a generous free tier with 10,000 API requests per month for BYOK (Bring Your Own Key).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
