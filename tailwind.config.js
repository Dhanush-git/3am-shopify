/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{liquid,json}"
  ],
  theme: {
    fontWeight: {
      'normal': 400,
      'medium': 500,
      'bold': 600
    },
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