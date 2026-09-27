# andjelko.dev · "Piste map" home page

Hand-off spec for implementing the approved home page design in this Astro site.
The files in this folder are the source of truth for layout, sizes and copy.
Open them straight in a browser. They load images from `../public/`.

| File | What it shows |
|---|---|
| `desktop.html` | Desktop, 1440 px wide. Also used for tablets held sideways (1024 px and up). |
| `tablet.html` | Tablet portrait, 834 px wide. |
| `mobile.html` | Phone, 390 px wide. The ☰ button opens the menu. |
| `mobile-menu.html` | The full-screen phone menu in its open state. |

The mockups use inline styles and fixed widths so they are easy to measure.
The real site should use proper components, CSS and fluid widths between the breakpoints.

## Concept

The home page is a piste map. Each project is a ski run on a mountain.
A small snowboarder (Andjelko) rides every run once, and each line draws itself behind him.
The site stays `noindex, nofollow`, like the rest of andjelko.dev.

## Design tokens

### Colours

| Token | Value | Use |
|---|---|---|
| `--bg` | `#F4F6F8` | Page background, sky |
| `--ink` | `#14202B` | Text, buttons, lift, About section background, bubbles |
| `--text-2` | `#33414F` | Body copy |
| `--muted` | `#4B5B6B` | Mono labels |
| `--mountain-back` | `#DCE3EB` | Back mountain range |
| `--mountain-front` | `#C9D4E0` | Front range, borders, dividers |
| `--snow` | `#FFFFFF` | Snow caps, flakes (flake stroke `#A3B1C0`) |
| `--on-dark` | `#F4F6F8` / `#C3CFDB` / `#9FB0C2` | Text on the dark About section and menu |
| `--menu-line` | `#2A3A4A` | Dividers in the menu |
| `--rider-jacket` | `#F2A33A` | Snowboarder jacket |
| `--rider-hat` | `#D2372F` | Snowboarder beanie |

Each project has its own colour. It is used for its run, its sign on the mountain, the legend and the "Run 0X" label.

| Project | Colour |
|---|---|
| 01 Kamtřídit | `#2E9E5B` green |
| 02 Čistou přírodou | `#7A4FD0` purple |
| 03 CoffeeBreak | `#8A5A2E` coffee brown |
| 04 TableTap | `#1F5FBF` blue |
| 05 BH-Passport | `#0F8A8A` teal (not on the mountain) |

### Type (Google Fonts, or self-host like Inter today)

- **Display:** Bricolage Grotesque 700, letter-spacing -0.03em to -0.035em.
  - h1: 72 px desktop, 60 px tablet, 38 px mobile.
  - Project h2: 52, 46 and 36 px.
- **Body:** Hanken Grotesk 400 to 600.
  - Body copy: 18 to 19 px desktop, 17 px mobile.
- **Labels:** JetBrains Mono 400 to 500, 11 to 13 px, often uppercase with 0.05em tracking.

### Spacing

- **Page side padding:** 72 px desktop, 40 px tablet, 20 px mobile.
- **Buttons:** 46 px tall, radius 4 px.

## Page structure (top to bottom)

1. **Header:**
   - Desktop and tablet: name, plus nav links Runs · About · Resume · Contact.
   - Mobile: name and a ☰ button.
2. **Hero:**
   - Eyebrow, h1, sub copy.
   - **One button: Resume** (primary, dark filled). It links to `/resume/`.
   - The mountain illustration with the ride animation.
3. **Legend "The runs":** the four projects with their colour bars.
4. **Runs:**
   - 01 Kamtřídit, with "Ride the case study →" linking to `/work/kamtridit/`, and kamtridit.cz ↗.
   - 02 Čistou přírodou.
   - 03 CoffeeBreak, 04 TableTap and 05 BH-Passport as smaller entries.
5. **About ("Off-piste"):** dark section.
6. **Footer ("Last lift up"):** contact heading, email, and LinkedIn · GitHub · Resume.

### Layout per breakpoint

- **Desktop:**
  - Hero text sits over the mountain, left side, max-width about 700 px.
  - Kamtřídit and Čistou přírodou are two-column rows, with the image on alternating sides.
  - The last three projects sit in a 3-column grid.
  - About is two columns.
- **Tablet:**
  - Hero text is full width, and the mountain is its own block below it.
  - Kamtřídit and Čistou přírodou: text first, then the full-width screenshot.
  - The last three are rows with the image on the left and the text on the right.
  - About and footer are one column.
- **Mobile:**
  - Everything is one column.
  - On the mountain, each run gets a coloured **number badge** (01 to 04) instead of its name. The legend right below maps numbers to names.
  - The "LIFT · FIGMA → PRODUCTION" label is hidden.
  - The rider, bubbles and avatar are drawn about 1.5 to 1.8× larger in SVG units so they stay readable.

## The mountain illustration

A single inline SVG drawn in a 1440 × 900 coordinate space.
All paths are in the mockups and can be copied as they are.
Smaller screens reuse the same drawing with a different `viewBox`:

| Screen | viewBox | Rendered size |
|---|---|---|
| Desktop | `0 0 1440 900` | 1440 × 900, behind the hero text |
| Tablet | `560 50 880 850` | 834 × 806 |
| Mobile | `660 -20 760 920` | 390 × 472 |

What the SVG contains:

- **Mountains:** two polygon ranges with white snow caps.
- **Lift:**
  - A cable from the base station (1390, 872) to the top station (1150, 262), with three towers.
  - Three cabins move up the cable along an `offset-path` in a 15 s loop.
  - The lift keeps moving after the ride ends.
- **Runs:** four paths, each with `pathLength="1"`.
  - Three start from the summit (1040, 178). TableTap starts from the lower peak (760, 496).
- **Run signs:** placed on each run, with the run passing behind them. On mobile they are number badges.
- **Snowboarder:**
  - Built from SVG shapes, no image asset: board, legs, jacket, head and beanie.
  - It moves with CSS `offset-path` using the run's path and `offset-rotate: 0deg`.
  - An inner group leans ±12 to 14° with a 3.5 s keyframe that matches the turns.
- **Snow:** about 44 small flakes on desktop (30 on mobile), 1.5 to 3.5 px, falling with a slight drift over 9 to 15 s each, looping.
- **Avatar bubble:** `public/avatar.jpg` clipped to a circle above the summit, with a speech label.

## Ride animation (plays once)

- **Length:** the whole ride is 22.5 s.
- **Plays once:** it plays once on load and then **stays on the final state**. It does not loop.
- **Timing:** every element uses the same timeline, with `animation-fill-mode: forwards`. Each element's keyframe percentages are computed from the one shared duration.

| Time | What happens |
|---|---|
| 0 to 3 s | Snowboarder on the summit. The avatar pops up (scale 0.4 → 1) with **"Hey, it’s me"**. |
| 3 to 7.5 s | **TableTap** (04). |
| 7.5 to 12 s | **CoffeeBreak** (03). |
| 12 to 16.5 s | **Čistou přírodou** (02). |
| 16.5 to 21 s | **Kamtřídit** (01). |
| 21 s onward | Snowboarder back on the summit. The avatar pops up again with **"See the runs ↓"**, and a **"↻ Ride again"** button fades in under it. |

Each run window is 4.5 s:

- **Ride (3.5 s):**
  - The rider fades in at the top of the run and moves to 93% of the path.
  - The line draws in sync, from `stroke-dashoffset: 1` to `0.07`.
  - The run's sign fades in during the first second.
- **Finish (1 s):**
  - The rider stops at 93% of the path.
  - A dark pill bubble pops above him. The finish words are **Done!** (TableTap), **Finish!** (CoffeeBreak), **Completed!** (Čistou přírodou) and **Shipped!** (Kamtřídit).
  - The line completes to 100%, then the rider and the bubble fade out.

What stays on screen in the final state:

- All four runs.
- All four signs.
- The summit snowboarder.
- The avatar with "See the runs ↓".
- The "Ride again" button.

**Ride again** restarts the timeline:

```js
document.querySelectorAll('.tour, .lean').forEach(el =>
  el.getAnimations().forEach(a => { a.cancel(); a.play(); }));
```

**Reduced motion** (`prefers-reduced-motion: reduce`):

- No animation. Show the final state straight away: all runs drawn, all signs, the summit rider and the avatar.
- Hide the moving riders, the finish bubbles and the "Ride again" button. Show no snow.

Accessibility:

- The SVG is decorative (`aria-hidden="true"`).
- The same information exists as real text in the legend and in the project sections.

## Mobile menu (full screen)

- **Trigger:** the ☰ button opens it; × or any link closes it.
- **Behaviour on the real site:**
  - Lock page scroll while it is open.
  - Close on Escape.
  - Move focus into the menu when it opens and return it to ☰ when it closes.
  - Use `aria-expanded` on the button.
- **Layout:**
  - Full-screen `--ink` background.
  - Top row: name and ×.
  - Four big links: 01 Runs, 02 About, 03 Resume, 04 Contact. Bricolage 44 px, mono numbers in `#9FB0C2`, with dividers between them.
  - Then the email, and LinkedIn · GitHub.
  - At the bottom, a small dark mountain with a green run that draws itself, plus a few flakes.
- **Motion:**
  - The menu fades in over 0.2 s.
  - The links rise 12 px and fade in, staggered by 60 ms.
  - The run draws over 1.2 s.
  - No motion under reduced motion.

## Approved copy

- **Eyebrow:** SENIOR FRONTEND ENGINEER · REMOTE · EU WORK AUTHORIZATION · CET
  - On mobile it breaks onto two lines after "Senior Frontend Engineer".
- **h1:** I design and build product interfaces end to end, from Figma to production.
- **Sub:** Working across design, frontend and AI, including the AI features and backend work a product needs.
- **Kamtřídit:** A nationwide recycling map for Czechia. I rebuilt it so 33,000+ collection points load fast: only the visible area loads, clusters split on click, and the list is virtualized.
- **Čistou přírodou:** A complete redesign of the national hiking and cycling guide: 73 routes, GPX ingestion and interactive waypoints. ~12,000 weekly visitors in season.
- **CoffeeBreak:** Redesigned in Figma and built, plus the new TypeScript backend.
- **TableTap:** AI menu import from a photo, admin panel, analytics and the landing site.
- **BH-Passport:** Next.js and Sanity CMS, rebuilt from WordPress. Lighthouse 97.
- **About heading:** Five years owning the whole frontend
- **About:** I’ve spent five years as the only frontend engineer on most of my projects, so I’m used to owning everything from architecture to the last pixel. Lately that has grown into design and backend work too.
- **About, second paragraph:** Away from the keyboard I’m snowboarding or on a mountain bike, and at home there’s usually a game on the PS5. Also a big Attack on Titan fan.
- **Footer heading:** Want to see more, or work together?
- **Footer email:** andjelko.cvjetkovic@gmail.com

Rules for copy:

- Avoid "—" dashes in copy.
- Don't mention being "open to work" anywhere on the site.

## Implementation notes

- **Where the data lives:** keep project data in `src/data/site.ts`. Add a `color` field per project and reuse it for the run, the badge, the legend and the label.
- **No libraries:** the animation is pure CSS (keyframes and `offset-path`), plus about 10 lines of JS for "Ride again" and the menu. No animation library is needed.
- **Where the SVG lives:** put it in its own Astro component, e.g. `src/components/PisteMap.astro`, with a prop for the variant (`desktop | tablet | mobile`), or use CSS/`<picture>`-style switching of the `viewBox` and badge/sign groups.
- **Images:** screenshots are already in `public/images/` and the avatar is `public/avatar.jpg`.
- **Keep as they are:**
  - `noindex` (meta tag and the `X-Robots-Tag` integration).
  - The resume page.
  - The Kamtřídit case study page.
