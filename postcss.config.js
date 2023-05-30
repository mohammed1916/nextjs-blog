// npm install -D tailwindcss autoprefixer postcss
// npx create-next-app --tailwind with-tailwindcss-app

module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {}
    },
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ]
}