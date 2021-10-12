module.exports = {
    purge: [
        '.public/**/*.html',
    ],
    darkMode: false,
    theme: {
        extend: {
            backgroundImage: {
                'libraryImage': "url(/public/img/main.png)",
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}