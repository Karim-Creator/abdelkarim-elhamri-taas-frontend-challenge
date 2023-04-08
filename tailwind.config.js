// tailwind.config.js
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    // darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#0969DA',
                secondary: '#1F883D',
                dark: '#24292F',
                light: '#EFF1F3',
                grey: '#F6F8FA',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}