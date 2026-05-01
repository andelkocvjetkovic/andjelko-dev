export type Contact = {
  email: string;
  github: string;
  linkedin: string;
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
  stack?: readonly string[];
  link?: ProjectLink;
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
  subtitle: string;
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
    'Front-End Engineer focused on performant, scalable web interfaces across React/Next.js ecosystems. I build production UIs for data- and map-heavy products with strong emphasis on accessibility, Core Web Vitals, and maintainable design systems. I use Codex daily to accelerate implementation, debugging, and refactoring while maintaining engineering quality.',
  currentFocus: ['Design systems', 'Accessibility', 'Performance-led interfaces'],
  contact: {
    email: 'andjelko.cvjetkovic@gmail.com',
    github: 'https://github.com/andelkocvjetkovic',
    linkedin: 'https://www.linkedin.com/in/andelkocvjekovic/',
    location: 'Bosnia & Herzegovina',
  },
  achievements: [
    'Rendered 32,000+ map locations smoothly via virtualization (Kam třídit).',
    'Handled 10k+ requests/week in peak season with low-end device optimization (Čistou přírodou).',
    'Achieved Lighthouse 97 performance on desktop (BH-Passport, Jan 25, 2026).',
  ],
  skills: {
    primary: {
      label: 'Primary Stack',
      items: ['React', 'Next.js', 'TypeScript', 'JavaScript'],
    },
    alsoShipping: [
      {
        label: 'Styling',
        items: ['Tailwind CSS', 'CSS'],
      },
      {
        label: 'Additional Frameworks',
        items: ['Svelte', 'Vue'],
      },
      {
        label: 'Mobile',
        items: ['React Native'],
      },
      {
        label: 'Tooling',
        items: ['Vite', 'Git'],
      },
    ],
    frontendEngineering: {
      label: 'Front-End Engineering',
      items: ['Performance optimization', 'accessibility (WCAG)', 'SEO', 'SSR/SSG/CSR'],
    },
    uiSystems: {
      label: 'UI Systems',
      items: ['Design systems', 'component libraries (Radix UI, shadcn/ui, React Aria)'],
    },
    dataMaps: {
      label: 'Data Visualization & Maps',
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
    other: [],
    aiWorkflow: {
      label: 'AI Workflow',
      items: ['Codex'],
    },
  },
  experience: [
    {
      company: 'Codepool',
      role: 'Front-End Developer',
      dates: 'Jun 2021 – Present',
      description: '',
      bullets: [
        'Led front-end delivery for production products in React, Next.js, Svelte, and Vue, owning architecture, implementation, and release quality.',
        'Built high-performance, map-heavy interfaces with MapLibre GL JS, including apps rendering 32,000+ locations and serving 10k+ weekly requests in peak season.',
        'Developed analytics and reporting interfaces with D3.js and Visx, translating complex datasets into decision-ready dashboards.',
        'Implemented secure role-based flows with REST APIs and JWT authentication across multiple user roles.',
        'Delivered and scaled CMS-backed experiences using custom solutions and platforms (Sanity, Payload, Strapi), including i18n, content operations, and editorial workflows.',
        'Established reliable quality gates through unit, integration, and E2E testing (Jest, RTL, Vitest, Playwright, Cypress).',
        'Collaborated with designers, backend engineers, QA, and clients to ship accessible, performant, pixel-accurate UI systems.',
        'Owned technical direction for front-end architecture decisions, balancing delivery speed with long-term maintainability.',
        'Scoped and estimated front-end work with stakeholders, improving sprint predictability and release confidence.',
        'Drove performance improvements that contributed to Lighthouse desktop scores up to 97 on production deployments.',
      ],
    },
  ],
  projects: [
    {
      name: 'Eko-kom platform',
      slug: 'eko-kom',
      subtitle: "Multi-product platform for Czechia's national packaging recovery organization.",
      stack: ['React', 'TypeScript', 'MapLibre GL JS', 'Tailwind CSS'],
      sections: {
        subSections: [
          {
            title: 'Kam třídit',
            bullets: [
              'Built a high-performance nationwide map (MapLibre GL JS + Mapy.com API) that renders 32,000+ locations via virtualization.',
              'PageSpeed Insights desktop (emulated): Performance 77, Accessibility 78, Best Practices 92, SEO 100 (Jan 25, 2026).',
              'Owned UX delivery from Figma screens to a fully functional, mobile-first app.',
              'Delivered a pragmatic mobile rollout: launched a PWA first, then shipped WebView-based iOS and Android apps.',
              'Implemented role-based workflows (User / Partner / Admin), account management, and location CRUD flows.',
            ],
            stack: [
              'React',
              'TypeScript',
              'MapLibre GL JS',
              'Mapy.com API',
              'React Router',
              'Tailwind CSS',
            ],
            link: {
              label: 'kamtridit.cz',
              href: 'https://kamtridit.cz',
            },
          },
          {
            title: 'Čistou přírodou',
            bullets: [
              'Built a public nature-trails platform with a MapLibre GL JS map and advanced filters.',
              'Delivered a bilingual (EN/CS) CMS UI for trail management and collaborated with backend/QA on legacy data migration.',
              'Optimized performance for low-end devices while handling peak traffic (10k+ requests/week in season).',
            ],
            stack: ['React', 'TypeScript', 'MapLibre GL JS', 'React Router', 'Tailwind CSS'],
            link: {
              label: 'prirodou.samosebou.cz',
              href: 'https://prirodou.samosebou.cz/',
            },
          },
          {
            title: 'Shared infrastructure',
            bullets: [
              'Created and maintained a shared monorepo design system used across Kam třídit and Čistou přírodou.',
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
        href: 'https://www.bhpassport.ba/',
      },
      subtitle: 'Travel agency platform rebuilt from WordPress to Next.js.',
      stack: ['React', 'Next.js', 'TypeScript', 'Sanity', 'Tailwind CSS'],
      sections: {
        bullets: [
          'Rebuilt a travel-agency website from WordPress to a fast, reliable Next.js app.',
          'Achieved Lighthouse desktop (emulated) performance score 97 (FCP 0.3s, LCP 1.1s, TBT 110ms, CLS 0) on Jan 25, 2026.',
          'Built a custom CMS with Sanity and responsive, dynamic navigation/content pages.',
        ],
      },
    },
    {
      name: 'ScrumGlide',
      slug: 'scrumglide',
      link: {
        label: 'app.scrumglide.com',
        href: 'https://app.scrumglide.com/',
      },
      subtitle: 'Scrum management platform with real-time sync and analytics.',
      stack: ['React', 'TypeScript', 'TanStack Router', 'Visx', 'Tailwind CSS'],
      sections: {
        bullets: [
          'Delivered end-to-end frontend for a scrum management platform covering multi-role ticketing, sprint planning, and reporting workflows.',
          'Built and maintained a reusable product design system that kept UI consistent and reduced duplication.',
          'Implemented advanced analytics views, including burndown charts, sprint feasibility, and epic timeline visualizations.',
          'Shipped real-time updates with socket-driven cache synchronization to keep sprint and ticket state consistent.',
        ],
      },
    },
    {
      name: 'TableTap',
      slug: 'tabletap',
      subtitle: 'QR-based ordering platform for restaurants.',
      stack: ['Svelte', 'Astro', 'TypeScript'],
      sections: {
        bullets: ['QR-based ordering platform for restaurants.'],
      },
    },
  ],
  education: [
    {
      degree: 'B.Sc. in Computer Software Engineering',
      school: 'Faculty of Information Technologies (FIT), University "Džemal Bijedić" in Mostar',
      dates: 'Sep 2019 – Jun 2027',
      status: 'Expected',
    },
  ],
} satisfies Resume;
