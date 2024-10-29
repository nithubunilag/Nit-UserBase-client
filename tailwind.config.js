/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
    variants: {
        extend: {
            padding: ["last"],
        },
    },
    theme: {
        extend: {
            colors: {
                "text-color-main": "#3B3B3B",
                primary: "#62CF3A",
                secondary: "#0D1836",
                "secondary-light": "#dbdbdb",
            },
        },
    },
    plugins: [],
};
