# Pivot Integrated Energy Services Ltd

A modern, responsive marketing website for **Pivot Integrated Energy Services Ltd**, an indigenous oil and gas company founded in 2017. The site communicates the company's downstream energy operations — bulk importation, trading, retail distribution, industrial supply, and aviation fuel services — across Nigeria and Sub-Saharan Africa.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** for build tooling
- **Tailwind CSS v4** for styling
- **shadcn/ui** + **Radix UI** for accessible components
- **Lucide React** for icons
- **Sonner** for toast notifications

## Getting Started

```sh
npm install
npm run dev
```

## Available Scripts

| Script              | Description               |
| ------------------- | ------------------------- |
| `npm run dev`       | Start development server  |
| `npm run build`     | Production build          |
| `npm run build:dev` | Development build         |
| `npm run preview`   | Preview production build  |
| `npm run lint`      | Run ESLint                |
| `npm run format`    | Format code with Prettier |

## Project Structure

```
src/
  components/
    site/       # Shared layout and feature components
    ui/         # shadcn/ui component primitives
  hooks/        # Custom React hooks
  lib/          # Utilities and error handling
  routes/       # Page-level components
  styles.css    # Global styles and design tokens
  App.tsx       # Router and metadata
  main.tsx      # Application entry point
```

## Pages

- `/` — Homepage with hero, stats, areas of operation, value chain, clients, and partners
- `/about` — Company background, mission, vision, and core values
- `/our-services` — Detailed service offerings
- `/assets` — Storage facilities and fleet overview
- `/contact` — Contact form and business enquiries
