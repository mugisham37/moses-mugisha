# Maelle Minimal Portfolio — Next.js Clone

A pixel-perfect Next.js clone of the Maelle Minimal Portfolio Framer Template.

## Tech Stack
- **Next.js 16** with App Router
- **React 19** with TypeScript strict mode  
- **Tailwind CSS v4** with exact pixel values from Framer
- **framer-motion** for accordion animations
- **Lenis** for smooth scrolling
- **next-themes** for theme management

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Pages
- `/` — Home (3-column layout: intro, projects, profile)
- `/about` — About (services, software stack, experience, FAQs, awards)
- `/work` — Work listing (2-column grid of all projects)
- `/work/[slug]` — Work detail (individual project with gallery)
- `/contact` — Contact form with contact info

## Design System
Extracted from Framer MCP:
- **Colors**: White (#fff), Black (#121212), Light Gray (#e3e3e3), Gray (#757575)
- **Fonts**: Geist (headings + body), Inter (buttons + labels)
- **Text Styles**: 10 styles from Heading 1 (56px) to 12 medium (12px)

## Project Structure
```
src/
├── app/           # Next.js pages
├── components/    # Reusable UI components
│   ├── Navigation.tsx
│   ├── ThreeColumnLayout.tsx
│   ├── ProjectCard.tsx
│   ├── Icon.tsx
│   ├── PrimaryButton.tsx
│   ├── Misc.tsx
│   ├── Award.tsx
│   ├── Tools.tsx
│   ├── ExperienceCard.tsx
│   ├── FAQs.tsx
│   ├── Service.tsx
│   └── providers.tsx
├── lib/
│   └── data.ts    # CMS data (10 projects)
└── types/
```

## Build
```bash
npm run build    # Production build (must pass)
npx tsc --noEmit # Type check (must pass)
```
