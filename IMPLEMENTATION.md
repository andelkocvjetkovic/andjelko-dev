# Piste-map implementation

The homepage follows `design/DESIGN.md` and the desktop, tablet, mobile, and mobile-menu HTML mockups. The original design files were left intact.

## Approach

Astro stays in place: the page is static HTML with a single inline SVG, CSS animation, and small scripts for the responsive crop, replay, pause, and mobile menu. No frontend framework or animation dependency was added.

- Mobile: below 768px; tablet project layout: 768–1023px; desktop project layout: 1024px and above. The hero uses a compact text-and-mountain composition from 768–1199px to keep the illustration prominent at shorter tablet heights.
- The hero and legend share a screen-height container (100svh). The mountain fills the remaining space with a proportional SVG crop, keeping the summit and trails visible. Very short screens can grow beyond one viewport to preserve readable content.
- One SVG adjusts its viewBox to the available space and breakpoint. Mobile uses numbered signs and larger riders, avatar, and finish bubbles.
- The 22.5-second tour plays once, then retains the finished trails and summit avatar. Replay restarts the tour and rider lean.
- Snow and lifts continue after the tour. A small pause button, off-screen suspension, and background-tab suspension prevent unnecessary motion/work. Opening the mobile menu also pauses the main map.
- Reduced motion shows the completed map immediately, with no snow, moving riders, replay, or animation. Browsers without CSS motion-path support get a static map.
- The mobile header stays fixed at the top with an opaque background; section anchors leave room below it.
- The full-screen menu uses a modal dialog, focus containment, Escape dismissal, focus restoration, scroll locking, and staggered entrance animation. Navigation remains available without JavaScript.
- Fonts are self-hosted with their licenses. Screenshots are lazy-loaded and include intrinsic dimensions to reserve space.
- The resume, Kamtřídit case study, robots metadata, and Vercel noindex headers are retained. Existing `/#work` links still reach the project section.

## Files

- `src/pages/index.astro`: homepage content and sections.
- `src/layouts/Piste.astro`: homepage document, metadata, and footer.
- `src/components/PisteMap.astro`: illustration and tour.
- `src/components/PisteHeader.astro`: navigation and mobile dialog.
- `src/components/Run.astro`: responsive project presentation.
- `src/data/site.ts`: project colors and approved homepage copy/order.
- `src/styles/piste.css`: layout, typography, and responsive styles.
- `integrations/resume-index.mjs`: serves the existing `/resume/` directory index in development, matching production.

## Unspecified interactions left out

- No dropdown component, options, or behavior was supplied, so none was invented.
- Čistou přírodou, TableTap, and BH-Passport now link to their live sites, as requested after the initial design handoff. CoffeeBreak is an internal app with no public URL, so it remains unlinked. Additional case-study pages have not been supplied.
- The mountain signs, numbered badges, and legend are decorative/informational, as specified. They do not open new views.
- Placeholder resume and case-study anchors in the mockups were resolved to the existing `/resume/` and `/work/kamtridit/` pages.

## Validation

Run `pnpm build` for the production build, or `pnpm dev` to inspect the site locally.

Browser checks cover responsive widths from 320px through 2560px, desktop/tablet/mobile screenshot comparison, trail/rider timing, finish messages, final state, replay, pause, off-screen suspension, reduced motion, menu keyboard behavior, anchor navigation, and the existing resume/case-study routes. Checks use desktop Chrome with emulated viewport sizes; physical-device and Safari/Firefox performance have not been measured.

The production build and the browser checks above passed.
