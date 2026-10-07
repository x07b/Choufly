# CHOUFLY

French product website built with Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion and Lucide.

## Run

Node.js 20.9 or later.

    npm install
    npm run dev

Open http://localhost:3000.

## Verify

    npm run lint
    npm run typecheck
    npm run build
    npm start

## Demo

Four searches, free-text search, radius, availability, price and open-now filters. Local reservation simulation with merchant confirmation. Stale stock prompts verification. Merchant availability and prices are editable. No store is contacted. Refresh resets all state.

## Structure

- src/app: page, metadata, favicon, tokens and responsive styles
- src/components/layout: navigation and footer
- src/components/sections: homepage story and interactive search
- src/components/choufly: reusable product interface mockups
- src/components/ui: primitives and reduced-motion-aware reveals
- src/data/demo.ts: fictional data
- public: original social preview

Manrope is bundled locally. No external fonts, maps or image CDNs.

## Deployment

Set NEXT_PUBLIC_SITE_URL to the actual public origin before building to resolve Open Graph images correctly. Development defaults to http://localhost:3000.

No official domain, contact address, partnership, integration or traction is asserted. Contact and legal panels describe the prototype. Add verified business identity, contact details and launch policies before commercial operation.

## Design and checks

The hierarchy, interface-led story, section rhythm and compact navigation draw on https://www.optify.agency/en. All styling and mockups are original. Reference source inspected; browser-based visual review unavailable in this session. Layouts target 1440, 1024, 768 and 390 pixels; final browser review at these widths remains necessary.

Npm audit reports five development-only findings in the Next ESLint plugin braces dependency chain. No suggested major downgrade was applied.
