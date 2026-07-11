/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#12141a',
          soft: '#2a2f3a',
          mute: '#6b7280',
        },
        paper: {
          DEFAULT: '#eceef2',
          lift: '#f6f7f9',
          deep: '#d8dce4',
        },
        signal: {
          DEFAULT: '#d91f4a',
          deep: '#a81638',
        },
        mist: '#7d8696',
      },
      fontFamily: {
        display: ['"Archivo"', 'system-ui', 'sans-serif'],
        body: ['"Kumbh Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fadeIn 1.1s ease both',
        'drift': 'drift 18s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(2%, -1.5%, 0) scale(1.04)' },
        },
      },
    },
  },
  plugins: [],
};
