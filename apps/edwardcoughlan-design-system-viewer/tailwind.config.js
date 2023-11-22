const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '../../{apps,packages}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    fontFamily: {
      sans: [
        '"Source Sans 3 Variable", "Nunito Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      ],
    },
    extend: {
      fontSize: {
        100: ['0.75rem', { lineHeight: '1rem' }],
        200: ['0.875rem', { lineHeight: '1.25rem' }],
        300: ['1rem', { lineHeight: '1.5rem' }],
        400: ['1.25rem', { lineHeight: '1.75rem' }],
        500: ['1.5rem', { lineHeight: '2rem' }],
        600: ['1.75rem', { lineHeight: '2.25rem' }],
        700: ['2.25rem', { lineHeight: '2.75rem' }],
        800: ['2.75rem', { lineHeight: '3.25rem' }],
      },
    },
  },
  plugins: [],
};
