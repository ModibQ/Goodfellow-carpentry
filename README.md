# Goodfellow & Sons Construction

Website for Goodfellow & Sons Construction, a family-owned construction company based in Wayland, MA serving the MetroWest area.

## Tech Stack

- **React** + **TypeScript**
- **Tailwind CSS**
- **Vite**
- **Web3Forms** (contact form)
- **EmailJS** removed in favor of Web3Forms

## Getting Started

```bash
npm install
npm run dev
```

## Updating Content

All site content is managed from two files:

| File | What it controls |
|---|---|
| `src/config.ts` | Phone, email, service area, testimonials |
| `src/images.ts` | All images across the site |

## Swapping Images

1. Drop the new image into `/public/images/`
2. Update the filename in `src/images.ts`
3. No other code changes needed

## Deployment

The site is deployed via **Cloudflare Pages** using the deploy build config:

```bash
npm run build:deploy
```
