import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'emory-blue': '#012169',
        'emory-gold': '#F2A900',
        'warm-gray': '#F5F5F0',
        'near-black': '#1A1A1A',
      },
      fontFamily: {
        headline: ['var(--font-barlow)', 'Trade Gothic', 'sans-serif'],
        body: ['var(--font-lora)', 'Calluna', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
