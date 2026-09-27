# andjelko.dev

Personal portfolio of Andjelko Cvjetkovic. Built with [Astro](https://astro.build), deployed on Vercel.

## Structure

- `src/pages/index.astro`: home page
- `src/pages/work/kamtridit.astro`: Kamtřídit case study
- `src/data/site.ts`: project data, run colors, and homepage project copy
- `public/resume/index.html`: resume, web version (andjelko.dev/resume)
- `public/Andjelko-Cvjetkovic-Resume.pdf`: resume PDF

See [IMPLEMENTATION.md](./IMPLEMENTATION.md) for design decisions, animation behavior, validation, and unspecified interactions.

## Commands

| Command        | Action                                  |
| :------------- | :-------------------------------------- |
| `pnpm install` | Install dependencies                    |
| `pnpm dev`     | Dev server at `localhost:4321`          |
| `pnpm build`   | Production build                        |
| `pnpm preview` | Preview the production build            |

## Updating the resume PDF

Edit `public/resume/index.html`, open it in Chrome, then Print → Save as PDF
(paper A4, margins None, background graphics on) and replace
`public/Andjelko-Cvjetkovic-Resume.pdf`.
