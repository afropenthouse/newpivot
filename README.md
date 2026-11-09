# Pivot Integrated Energy

The Pivot corporate website is built with React 19, Vite, TypeScript and Tailwind CSS v4.

## Run locally

Use Node.js 20.19+ or 22.12+ and npm.

```sh
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000).

```sh
npm run build       # Build and render the static pages into dist/
npm run preview     # Preview the production build at localhost:4173
npm run typecheck   # Check TypeScript
npm run lint        # Check code style and React hook rules
```

## Pages

| URL         | Page component              |
| ----------- | --------------------------- |
| `/`         | `src/app/page.tsx`          |
| `/about`    | `src/app/about/page.tsx`    |
| `/services` | `src/app/services/page.tsx` |
| `/assets`   | `src/app/assets/page.tsx`   |
| `/gallery`  | `src/app/gallery/page.tsx`  |
| `/contact`  | `src/app/contact/page.tsx`  |

`src/App.tsx` maps URLs to pages and supplies the shared header, footer and metadata. Update each page's exported `metadata` to change its title or description. The build renders each page to HTML, then React adds interactivity in the browser. Shared company details live in `src/lib/company.ts`; static images live in `public/`.

Older URLs `/about-us`, `/our-services` and `/assets-facilities` redirect to their current pages. The enquiry form opens a draft in the visitor's email app.

## Deployment

On Vercel, use the Vite preset, `npm run build`, and the `dist` output directory as configured in `vercel.json`. Keep clean URLs enabled so links like `/services` serve the corresponding HTML page. The generated `404.html` handles missing pages on Vercel.

The Git repository remains connected to Lovable. Keep the connected branch in a working state and avoid rewriting published history.
