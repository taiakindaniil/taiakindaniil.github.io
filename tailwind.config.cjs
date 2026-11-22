// Rebuild with: npx tailwindcss@3.4.19 --minify -o tailwind.css
module.exports = {
    content: ['./index.html'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
};
