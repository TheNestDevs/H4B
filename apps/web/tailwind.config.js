/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "rgb(var(--color-primary) / <alpha-value>)",
                accent: "rgb(var(--color-accent) / <alpha-value>)",
                text: "rgb(var(--color-text) / <alpha-value>)",
                "text-secondary": "rgb(var(--color-text-secondary) / <alpha-value>)",
                background: "rgb(var(--color-background) / <alpha-value>)",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
