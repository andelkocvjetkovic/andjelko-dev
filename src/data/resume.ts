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

export type ProjectSubSection = {
  title: string;
  bullets: readonly string[];
};

export type FlatProjectSections = {
  bullets: readonly string[];
  subSections?: never;
};

export type NestedProjectSections = {
  bullets?: never;
  subSections: readonly ProjectSubSection[];
};

export type ProjectEntry = {
  name: string;
  slug: string;
  link?: ProjectLink;
  links?: readonly ProjectLink[];
  subtitle: string;
  intro?: string;
  stack: readonly string[];
  sections: FlatProjectSections | NestedProjectSections;
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
  name: 'Andjelko Cvjetkovic',
  title: 'Senior Frontend Engineer',
  summary:
    'Frontend engineer with 5 years building production web apps where performance and complexity matter — interactive maps with tens of thousands of points, real-time data dashboards, multi-role workflows, and design systems shared across products. I own work end-to-end: from architectural decisions through pixel-level polish, often as the sole frontend engineer on the project. React, Next.js, and TypeScript day-to-day, with Claude Code and Codex as part of my workflow for agentic, multi-step engineering tasks.',
  currentFocus: [],
  contact: {
    email: 'andjelko.cvjetkovic@gmail.com',
    github: 'https://github.com/andelkocvjetkovic',
    linkedin: 'https://www.linkedin.com/in/andelkocvjekovic/',
    website: 'https://andjelko.dev',
    location: 'Bosnia & Herzegovina',
  },
  achievements: [
    "Rendered 32,000+ map locations smoothly through viewport virtualization on Kam třídit (Czechia's nationwide recycling app), shipped across web, iOS, and Android.",
    'Achieved Lighthouse 97 on desktop (FCP 0.3s, LCP 1.1s, CLS 0) on BH-Passport by rebuilding a legacy WordPress site as a Next.js + Sanity application.',
    "Built a multi-product platform for Eko-kom (Czechia's national packaging recovery organization) — two consumer apps sharing a monorepo, design system, and CMS infrastructure.",
    'Shipped ScrumGlide end-to-end as solo frontend — multi-role ticketing, sprint planning, real-time socket sync, and analytics including burndown charts and epic timelines.',
  ],
  skills: {
    primary: {
      label: 'Primary stack',
      items: ['React', 'Next.js', 'TypeScript', 'JavaScript'],
    },
    alsoShipping: [
      {
        label: 'Also in production',
        items: ['Svelte', 'Astro'],
      },
      {
        label: 'Tooling',
        items: ['Vite', 'Git'],
      },
    ],
    frontendEngineering: {
      label: 'Frontend engineering',
      items: ['Performance optimization', 'Accessibility (WCAG)', 'SEO', 'SSR/SSG/CSR', 'Core Web Vitals'],
    },
    uiSystems: {
      label: 'UI systems',
      items: ['Design systems', 'Component libraries (Radix UI, shadcn/ui, React Aria)', 'Tailwind CSS'],
    },
    dataMaps: {
      label: 'Data & maps',
      items: ['D3.js', 'Visx', 'MapLibre GL JS'],
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
        'Codepool builds production web and mobile apps for clients while developing in-house products (ScrumGlide, TableTap). I started under a senior frontend lead and now operate as sole frontend engineer on most projects, owning architecture and delivery.',
      bullets: [
        'Lead frontend on multiple production apps in React, Next.js, Svelte, and Vue — owning architecture, implementation, performance, and release quality.',
        'Built map-heavy interfaces with MapLibre GL JS, including a nationwide recycling app rendering 32,000+ locations through virtualization.',
        'Developed analytics dashboards with D3.js and Visx, turning complex datasets into views that engineering, product, and end users can actually act on.',
        'Implemented role-based access flows (User / Partner / Admin) with REST APIs and JWT across multiple products.',
        'Delivered CMS-backed products on Sanity, Payload, and Strapi, including bilingual (EN/CS) editorial workflows for non-technical content teams.',
        'Established testing baselines with Jest, RTL, Vitest, Playwright, and Cypress on projects that previously had none.',
        'Drive frontend architecture decisions independently or alongside the CTO, balancing delivery speed with maintainability.',
        'Drove performance work resulting in Lighthouse desktop scores up to 97 on production deployments.',
      ],
    },
  ],
  projects: [
    {
      name: 'Eko-kom platform',
      slug: 'eko-kom',
      links: [
        { label: 'kamtridit.cz', href: 'https://kamtridit.cz' },
        { label: 'prirodou.samosebou.cz', href: 'https://prirodou.samosebou.cz' },
      ],
      subtitle: "Multi-product platform for Czechia's national packaging recovery organization",
      intro:
        'Two consumer apps built and maintained as sole frontend in a shared monorepo, with a unified design system and CMS infrastructure powering both.',
      stack: ['React', 'TypeScript', 'MapLibre GL JS', 'Mapy.com API', 'React Router', 'Tailwind CSS'],
      sections: {
        subSections: [
          {
            title: 'Kam třídit — nationwide recycling locator, shipped across web, iOS, and Android.',
            bullets: [
              'Rendered 32,000+ recycling locations on a single map (MapLibre GL JS + Mapy.com API) through viewport virtualization, keeping pan/zoom smooth on low-end Android devices.',
              'Delivered iOS and Android via WebView wrappers after launching as a PWA, accelerating mobile rollout without a separate native codebase.',
              'Implemented role-based workflows for User, Partner, and Admin, including account management and full location CRUD.',
              'PageSpeed Insights desktop (emulated, Jan 2026): Performance 77, Accessibility 78, Best Practices 92, SEO 100.',
            ],
          },
          {
            title: 'Čistou přírodou — public nature-trails platform.',
            bullets: [
              'Built the public-facing trail discovery experience with a MapLibre GL JS map and advanced filtering, optimized for low-end mobile devices.',
            ],
          },
          {
            title: 'Shared infrastructure',
            bullets: [
              'Designed and maintained the monorepo design system used by both apps, eliminating UI duplication and keeping visual consistency through ongoing feature work on both products.',
              'Built a bilingual (EN/CS) CMS interface used across both apps for content management; collaborated with backend and QA on legacy data migration.',
            ],
          },
        ],
      },
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
      sections: {
        bullets: [
          'Migrated a legacy WordPress site to a Next.js application backed by a custom Sanity CMS.',
          'Lighthouse desktop (emulated, Jan 2026): Performance 97 · FCP 0.3s · LCP 1.1s · TBT 110ms · CLS 0.',
          'Built dynamic navigation and content pages that the agency can edit without developer involvement.',
        ],
      },
    },
    {
      name: 'ScrumGlide',
      slug: 'scrumglide',
      link: {
        label: 'app.scrumglide.com',
        href: 'https://app.scrumglide.com',
      },
      subtitle: 'Codepool in-house product · Scrum management platform · Pre-launch',
      stack: ['React', 'TypeScript', 'TanStack Router', 'Visx', 'Tailwind CSS'],
      sections: {
        bullets: [
          'Sole frontend engineer for end-to-end product: multi-role ticketing, sprint planning, and reporting workflows.',
          'Built reusable product design system to keep UI consistent and reduce duplication as features expanded.',
          'Implemented analytics views including burndown charts, sprint feasibility forecasts, and epic timeline visualizations with Visx.',
          'Shipped real-time updates via socket-driven cache synchronization to keep sprint and ticket state consistent across users.',
        ],
      },
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
        'Joined an existing admin panel — vibe-coded Svelte with no consistent patterns — and turned it into a maintainable product. Now own multiple parts of the stack as solo frontend.',
      stack: ['Svelte (admin)', 'Astro (landing)', 'TypeScript', 'Tailwind CSS'],
      sections: {
        bullets: [
          'Migrated the admin panel codebase to TypeScript and established the patterns (shared form components, inputs, design-system primitives) the team uses today.',
          'Rebuilt the analytics module from scratch — designed the views in Figma, collaborated with the backend team to define the data shape, and implemented the frontend.',
          'Replaced a purchased ThemeForest landing-page theme with a hand-built Astro site for performance and maintainability, and set up the SEO foundations and Google Analytics.',
          'Lighthouse mobile (May 2026): Performance 90 · Accessibility 90 · Best Practices 100 · SEO 100.',
          'Implemented bilingual support (EN/BS) across both the admin panel and the customer-facing app.',
          'Helped QA set up end-to-end test infrastructure for the project.',
        ],
      },
    },
  ],
  education: [
    {
      degree: 'B.Sc. in Computer Software Engineering',
      school: 'Faculty of Information Technologies, University "Džemal Bijedić" in Mostar',
      dates: 'Sep 2019 – present',
      status: 'paused',
    },
  ],
} satisfies Resume;
