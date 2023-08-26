/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{liquid,json}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'tertiary': 'var(--color-tertiary)',
        'accent-1': 'var(--color-accent-1)',
        'accent-2': 'var(--color-accent-2)',
      }
    },
  },
  plugins: [],
}