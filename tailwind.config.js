/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 手动切换深色模式
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      important: true
    }
  },
  plugins: []
}
