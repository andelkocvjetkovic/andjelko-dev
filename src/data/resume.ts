export type Contact = {
  email: string;
  github: string;
  linkedin: string;
  website: string;
  location: string;
};

export type SkillGroup = {
  label: string;
  items: readonly string[];
};

export type ResumeSkills = {
  primary: SkillGroup;
  alsoShipping: readonly SkillGroup[];
  frontendEngineering: SkillGroup;
  uiSystems: SkillGroup;
  dataMaps: SkillGroup;
  testing: SkillGroup;
  cms: SkillGroup;
  other: readonly SkillGroup[];
  aiWorkflow: SkillGroup;
};

export type ExperienceEntry = {
  company: string;
  role: string;
  dates: string;
  location: string;
  description: string;
  bullets: readonly string[];
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectEntry = {
  name: string;
  slug: string;
  link?: ProjectLink;
  subtitle: string;
  intro?: string;
  stack: readonly string[];
  bullets: readonly string[];
};

export type EducationEntry = {
  degree: string;
  school: string;
  dates: string;
  status: string;
};

export type Resume = {
  name: string;
  title: string;
  summary: string;
  currentFocus: readonly string[];
  contact: Contact;
  achievements: readonly string[];
  skills: ResumeSkills;
  experience: readonly ExperienceEntry[];
  projects: readonly ProjectEntry[];
  education: readonly EducationEntry[];
};

export const resume = {
  name: 'Andjelko\u00a0Cvjetkovic',
  title: 'Frontend Engineer · Senior-level frontend work',
  summary:
    'Frontend engineer with 5 years of experience building production web apps where performance, UX, and complexity matter — interactive maps with tens of thousands of points, real-time dashboards, multi-role workflows, and shared design systems. I often own frontend work end-to-end: from architecture and implementation to performance, testing, and pixel-level polish. My day-to-day stack is React, Next.js, TypeScript, and modern UI tooling, with Claude Code and Codex as part of my workflow for codebase exploration, refactors, and multi-step engineering tasks.',
  currentFocus: [],
  contact: {
    email: 'andjelko.cvjetkovic@gmail.com',
    github: 'https://github.com/andelkocvjetkovic',
    linkedin: 'https://www.linkedin.com/in/andelkocvjekovic/',
    website: 'https://andjelko.dev',
    location: 'Bosnia & Herzegovina',
  },
  achievements: [
    "Rendered 32,000+ map locations smoothly through viewport virtualization on Kam třídit (Czechia's nationwide recycling app), shipped across web, iOS, and\u00a0Android.",
    'Achieved Lighthouse 97 on desktop (FCP 0.3s, LCP 1.1s, CLS 0) on BH-Passport by rebuilding a legacy WordPress site as a Next.js + Sanity application.',
    'Took ownership of TableTap — migrated an inherited Svelte admin panel to TypeScript with shared component patterns, rebuilt analytics from scratch, and replaced the purchased landing theme with a hand-built\u00a0Astro site.',
  ],
  skills: {
    primary: {
      label: 'Primary stack',
      items: ['React', 'Next.js', 'TypeScript', 'JavaScript'],
    },
    alsoShipping: [
      {
        label: 'Also shipping in production',
        items: ['Svelte', 'Astro'],
      },
      {
        label: 'Tooling',
        items: ['Vite', 'Git'],
      },
    ],
    frontendEngineering: {
      label: 'Frontend engineering',
      items: ['Performance optimization', 'Accessibility (WCAG)', 'SEO', 'Internationalization (i18n)', 'SSR/SSG/CSR', 'Core Web Vitals'],
    },
    uiSystems: {
      label: 'UI systems',
      items: ['Design systems', 'Component libraries (Radix UI, shadcn/ui, React\u00a0Aria)', 'Tailwind CSS'],
    },
    dataMaps: {
      label: 'Data & maps',
      items: ['MapLibre GL JS', 'Mapy.com', 'Visx', 'D3.js'],
    },
    testing: {
      label: 'Testing',
      items: ['Jest', 'React Testing Library', 'Vitest', 'Playwright', 'Cypress'],
    },
    cms: {
      label: 'CMS',
      items: ['Sanity', 'Payload', 'Strapi'],
    },
    other: [
      {
        label: 'Other',
        items: ['Vue', 'React Native'],
      },
    ],
    aiWorkflow: {
      label: 'AI workflow',
      items: [
        'Daily Claude Code and Codex for agentic, multi-step coding tasks — refactors, feature builds, codebase exploration',
      ],
    },
  },
  experience: [
    {
      company: 'Codepool',
      role: 'Frontend Engineer',
      dates: 'Jun 2021 – Present',
      location: 'Remote',
      description:
        'Codepool builds production web and mobile apps for clients while developing in-house products (TableTap). I started under a senior frontend lead and now operate as sole frontend engineer on most projects, owning architecture and delivery.',
      bullets: [
        'Lead frontend on multiple production apps in React, Next.js, Svelte, and Vue — owning architecture, implementation, performance, and release quality.',
        'Built map-heavy interfaces with MapLibre GL JS, including a nationwide recycling app rendering 32,000+ locations through virtualization.',
        'Developed analytics dashboards with D3.js and Visx, turning complex datasets into views that engineering, product, and end users can actually act on.',
        'Implemented role-based access flows (User / Partner / Admin) with REST\u00a0APIs and JWT across multiple products.',
        'Delivered CMS-backed products on Sanity, Payload, and Strapi, including bilingual (EN/CS) editorial workflows for non-technical content teams.',
        'Established testing baselines with Jest, RTL, Vitest, Playwright, and Cypress on projects that previously had none.',
        'Drive frontend architecture decisions independently or alongside the CTO, balancing delivery speed with maintainability.',
        'Drove performance work resulting in Lighthouse desktop scores up to 97 on production deployments.',
      ],
    },
  ],
  projects: [
    {
      name: 'Kam třídit',
      slug: 'kam-tridit',
      link: {
        label: 'kamtridit.cz',
        href: 'https://kamtridit.cz',
      },
      subtitle: "Czechia's nationwide recycling locator · Web + iOS +\u00a0Android",
      stack: ['React', 'TypeScript', 'MapLibre GL JS', 'Mapy.com API', 'React Router', 'Tailwind CSS'],
      bullets: [
        'Solo frontend across all three platforms: PWA\u00a0first, then WebView-based iOS and\u00a0Android apps for faster rollout.',
        'Rendered 32,000+ recycling locations on a single map (MapLibre GL JS + Mapy.com API) through viewport virtualization, keeping pan/zoom smooth on low-end\u00a0Android devices.',
        'Implemented role-based workflows for User, Partner, and\u00a0Admin, including account management and full location CRUD.',
        'Designed and maintained a monorepo design system used across this project and Čistou přírodou, eliminating UI duplication and keeping visual consistency through ongoing feature work on both products.',
        'PageSpeed Insights desktop (emulated, Jan 2026): Performance 77,\u00a0Accessibility 78, Best Practices 92, SEO 100.',
      ],
    },
    {
      name: 'Čistou přírodou',
      slug: 'cistou-prirodou',
      link: {
        label: 'prirodou.samosebou.cz',
        href: 'https://prirodou.samosebou.cz',
      },
      subtitle: 'Public nature-trails platform · Czechia',
      stack: ['React', 'TypeScript', 'MapLibre GL JS', 'React Router', 'Tailwind CSS'],
      bullets: [
        'Built the public-facing trail discovery experience with a MapLibre GL JS map and advanced filtering, optimized for low-end\u00a0mobile devices.',
        'Built a bilingual (EN/CS) CMS interface for trail management; collaborated with backend and QA\u00a0on legacy data migration.',
      ],
    },
    {
      name: 'BH-Passport',
      slug: 'bh-passport',
      link: {
        label: 'bhpassport.ba',
        href: 'https://bhpassport.ba',
      },
      subtitle: 'Travel agency platform · Bosnian market',
      stack: ['React', 'Next.js', 'TypeScript', 'Sanity', 'Tailwind CSS'],
      bullets: [
        'Migrated a legacy WordPress site to a Next.js application backed by a custom Sanity CMS.',
        'Lighthouse desktop (emulated, Jan 2026): Performance 97 · FCP 0.3s · LCP 1.1s · TBT 110ms · CLS 0.',
        'Built dynamic navigation and content pages that the agency can edit without developer involvement.',
      ],
    },
    {
      name: 'TableTap',
      slug: 'tabletap',
      link: {
        label: 'table-tap.app',
        href: 'https://www.table-tap.app/',
      },
      subtitle: 'Codepool in-house product · QR-based ordering for restaurants',
      intro:
        'Joined an inherited Svelte admin panel with inconsistent patterns and turned it into a more maintainable product as the solo frontend engineer. Now own multiple parts of the stack.',
      stack: ['Svelte (admin)', 'Astro (landing)', 'TypeScript', 'Tailwind CSS'],
      bullets: [
        'Migrated the admin panel codebase to TypeScript and established the patterns (shared form components, inputs, design-system primitives) the team uses today.',
        'Rebuilt the analytics module from scratch — designed the views in Figma, collaborated with the backend team to define the data shape, and implemented the frontend.',
        'Replaced a purchased ThemeForest landing-page theme with a hand-built\u00a0Astro site for performance and maintainability, and set up the SEO foundations and Google\u00a0Analytics. Lighthouse mobile (May 2026): Performance 90 ·\u00a0Accessibility 90 · Best Practices 100 · SEO 100.',
        'Implemented bilingual support (EN/BS) across both the admin panel and the customer-facing app.',
        'Helped QA set up end-to-end test infrastructure for the project.',
      ],
    },
  ],
  education: [
    {
      degree: 'B.Sc. in\u00a0Computer Software Engineering',
      school: 'Faculty of Information Technologies, University "Džemal Bijedić" in Mostar',
      dates: 'Sep 2019 – present',
      status: 'paused',
    },
  ],
} satisfies Resume;
