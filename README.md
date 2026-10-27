# Pivot Integrated Energy

The Pivot corporate website, built with **Next.js App Router**, React 19, TypeScript and Tailwind CSS v4. The 2026 design, photography and profile download are retained.

## Run locally

Use Node.js 20.9 or newer and npm.

```sh
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000). Each page has its own route file and can be opened directly or refreshed.

```sh
npm run build       # Create a production build
npm run start       # Serve the production build
npm run typecheck   # Check TypeScript
npm run lint        # Check code style and React hook rules
npm run format      # Format source files
```

`npm run preview` is an alias for the production server; run the build first.

## Pages

| URL         | Route file                  | Page components                           |
| ----------- | --------------------------- | ----------------------------------------- |
| `/`         | `src/app/page.tsx`          | `src/components/home/`                    |
| `/about`    | `src/app/about/page.tsx`    | `src/components/about/`                   |
| `/services` | `src/app/services/page.tsx` | `src/components/services/`                |
| `/assets`   | `src/app/assets/page.tsx`   | `src/components/assets/`                  |
| `/gallery`  | `src/app/gallery/page.tsx`  | `src/components/gallery/PhotoGallery.tsx` |
| `/contact`  | `src/app/contact/page.tsx`  | `src/components/contact/EnquiryForm.tsx`  |

Older URLs `/about-us`, `/our-services` and `/assets-facilities` redirect to their corresponding pages. Unknown URLs use `src/app/not-found.tsx`.

## Code structure

```text
src/
  app/
    layout.tsx                 Shared header, footer, fonts and default metadata
    page.tsx                   Homepage composition
    about/page.tsx
    services/page.tsx
    assets/page.tsx
    gallery/page.tsx
    contact/page.tsx
    not-found.tsx
  components/
    home/
      HeroSection.tsx
      CompanyStats.tsx
      CompanyIntroduction.tsx
      ServicesOverview.tsx
      ProductPortfolio.tsx
      GlobalFootprint.tsx
      PeopleBanner.tsx
      TradingPartners.tsx
      GalleryPreview.tsx
      ProfileDownload.tsx
    about/                     Story, purpose, values and leadership
    services/                  Services and products
    assets/                    Storage, marine and loading operations
    gallery/PhotoGallery.tsx   Filters and accessible photo dialog
    contact/EnquiryForm.tsx    Email enquiry draft
    site/                      Header, footer and shared page hero
    ui/                        Reusable UI primitives
  hooks/                       Shared React hooks
  lib/company.ts               Services, gallery photos, offices and profile URL
  styles.css                   Brand tokens, global styles and responsive layouts
public/
  images/                      Optimised photography
  downloads/                   2026 corporate profile PDF
```

## Editing the website

- Change a page's structure in its `src/app/.../page.tsx` file.
- Edit individual sections in the corresponding `src/components/` folder.
- Update shared company details and photos in `src/lib/company.ts`.
- Update page titles and descriptions using the exported `metadata` in each route.
- Place images and downloads in `public/` and reference them with root-relative URLs.

Pages and presentation sections render as Server Components by default. The mobile header, photo gallery and enquiry form use `"use client"` for interaction. The root layout supplies shared navigation and styling; Next.js handles routing and page transitions.

The enquiry form opens a draft in the visitor's email app. It does not send email from a backend service.

## Deployment

Use a Next.js-compatible hosting environment with `npm run build` as the build command and `npm run start` as the start command. The production output is `.next/`; this project no longer builds a Vite `dist/` bundle.

The Git repository remains connected to Lovable. Published Git history must not be rewritten. Hosting and editor build settings should use the Next.js commands above.
