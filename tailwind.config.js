/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        gray: {
          900: '#111111',
          600: '#666666',
          400: '#999999',
          200: '#e5e5e5',
          100: '#f5f5f5',
        },
        white: '#ffffff',
        // Minimal accent colors - use sparingly
        green: '#22c55e',  // For Karma Farm
        blue: '#3b82f6',   // For Write-It-Down
        purple: '#8b5cf6', // For Focus Flow
      },
      fontFamily: {
        // Use system font stack only
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}