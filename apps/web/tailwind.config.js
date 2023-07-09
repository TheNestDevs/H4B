/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },

            colors: {
                primary: "rgb(var(--color-primary) / <alpha-value>)",
                accent: "rgb(var(--color-accent) / <alpha-value>)",
                text: "rgb(var(--color-text) / <alpha-value>)",
                "text-secondary": "rgb(var(--color-text-secondary) / <alpha-value>)",
                background: "rgb(var(--color-background) / <alpha-value>)",
            },
        },
        plugins: [require("tailwindcss-animate")],
    },
};
