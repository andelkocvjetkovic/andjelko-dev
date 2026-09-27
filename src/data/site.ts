export const site = {
  name: 'Andjelko Cvjetkovic',
  role: 'Senior Frontend Engineer',
  workAuth: 'Remote · EU work authorization (Croatian citizen) · CET',
  email: 'andjelko.cvjetkovic@gmail.com',
  github: 'https://github.com/andelkocvjetkovic',
  linkedin: 'https://www.linkedin.com/in/andjelkocvjetkovic/',
  resumePdf: '/Andjelko-Cvjetkovic-Resume.pdf',
  resumeWeb: '/resume/',
} as const;

export type Project = {
  slug: string;
  name: string;
  kind: string;
  summary: string;
  stack: readonly string[];
  image?: { src: string; alt: string; fit?: 'cover' | 'contain'; bg?: string };
  caseStudy?: string;
  live?: string;
  note?: string;
};

export const featured: Project = {
  slug: 'kamtridit',
  name: 'Kamtřídit',
  kind: 'Nationwide recycling map for Czechia',
  summary:
    '33,000+ recycling locations kept fast with marker clustering and list virtualization, address search and turn-by-turn navigation. Web, iOS and Android, 200+ active contributors.',
  stack: ['React', 'TypeScript', 'MapLibre GL JS'],
  image: {
    src: '/images/work/kamtridit.webp',
    alt: 'Kamtřídit web app: a list of nearby collection points next to a map of Prague with clustered recycling locations',
    fit: 'cover',
  },
  live: 'https://kamtridit.cz',
};

export const projects: readonly Project[] = [
  {
    slug: 'tabletap',
    name: 'TableTap',
    kind: 'Restaurant ordering and operations platform',
    summary:
      'AI menu import from a photo, the admin panel from prototype to production, analytics, and the landing site. Designed in Figma, built in SvelteKit.',
    stack: ['SvelteKit', 'TypeScript', 'Vision LLM', 'Figma', 'Astro'],
    image: {
      src: '/images/tabletap/manager-mock.webp',
      alt: 'TableTap admin panel on a laptop, showing the table layout of a restaurant',
      fit: 'contain',
      bg: '#E9ECEF',
    },
    live: 'https://www.table-tap.app/',
  },
  {
    slug: 'cistou-prirodou',
    name: 'Čistou přírodou',
    kind: 'National hiking and cycling guide',
    summary:
      'Complete redesign of the guide: 73 routes, GPX ingestion and interactive waypoints. In production with ~12,000 weekly visitors in hiking season.',
    stack: ['React', 'TypeScript', 'MapLibre GL JS'],
    image: {
      src: '/images/work/cistou-prirodou.webp',
      alt: 'Čistou přírodou homepage: hero photo with trip and distance counters and a route search bar',
      fit: 'cover',
    },
    live: 'https://prirodou.samosebou.cz',
  },
  {
    slug: 'coffeebreak',
    name: 'CoffeeBreak',
    kind: 'Opportunity and pipeline management platform',
    summary:
      'I redesigned the product in Figma and built it as the main frontend engineer since 2023. I also built the new TypeScript backend that replaces the legacy API: Fastify, Prisma, PostgreSQL, Entra ID.',
    stack: ['Figma', 'React', 'TanStack Query', 'Fastify', 'PostgreSQL'],
    image: {
      src: '/images/work/coffeebreak.webp',
      alt: 'CoffeeBreak pipeline dashboard with donut charts of opportunities by technology and stage, shown with demo data',
      fit: 'cover',
    },
    note: 'Internal app',
  },
  {
    slug: 'bh-passport',
    name: 'BH-Passport',
    kind: 'Travel agency website',
    summary: 'Rebuilt from WordPress as Next.js with a custom Sanity CMS the agency edits on its own. Lighthouse 97.',
    stack: ['Next.js', 'Sanity', 'TypeScript'],
    image: {
      src: '/images/work/bh-passport.webp',
      alt: 'BH-Passport homepage: travel offer carousel and a row of destination cards',
      fit: 'cover',
    },
    live: 'https://bhpassport.ba',
  },
];

export const aiWork = [
  {
    title: 'AI menu import',
    status: 'In production',
    text: 'Photo of a paper menu, a vision LLM drafts it, staff review it next to the photo, then publish.',
  },
  {
    title: 'AI chat assistant',
    status: 'Prototype',
    text: 'Streaming LLM responses over SSE, with an AI ticket generator, for Codepool’s in-house agile tool.',
  },
  {
    title: 'Real-time updates',
    status: 'In production',
    text: 'Live data over WebSockets and live map updates, so screens stay current without a refresh.',
  },
] as const;

export const metrics = [
  { value: '33,000+', label: 'map locations', source: 'Kamtřídit' },
  { value: '~12,000', label: 'weekly visitors in season', source: 'Čistou přírodou' },
  { value: '200+', label: 'active contributors', source: 'Kamtřídit' },
  { value: '97', label: 'Lighthouse score', source: 'BH-Passport' },
] as const;

export const about = [
  'I’ve spent five years as the only frontend engineer on most of my projects, so I’m used to owning everything from architecture to the last pixel. Lately that has grown into design and backend work too: I design features in Figma, build them, and write the API code when a feature needs it.',
  'AI is part of both what I build and how I build it. I ship features on top of vision LLMs, and I work daily with Claude Code, Codex and Figma MCP in a design-to-code loop.',
] as const;
