/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{liquid,json}"
  ],
  theme: {
    extend: {
      colors: {
        'background':  'var(--color-background)',
        'foreground': 'var(--color-foreground)',
        'shadow': 'var(--color-shadow)',
        'button': 'var(--color-button)',
        'button-text': 'var(--color-button-text)',
        'secondary-button': 'var(--color-secondary-button)',
        'secondary-button-text': 'var(--color-secondary-button-text)'
      }
    },
  },
  plugins: [],
}