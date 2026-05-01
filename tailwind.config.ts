import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#FAFAFA',
        fg: '#0A0A0A',
        'fg-muted': '#6B6B6B',
        'fg-faint': '#B0B0B0',
        accent: '#15803D',
        border: '#E4E4E4',
      },
      fontFamily: {
        sans: ['Switzer', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      maxWidth: {
        content: '720px',
      },
      spacing: {
        'section-gap': '96px',
      },
    },
  },
  plugins: [],
} satisfies Config;
