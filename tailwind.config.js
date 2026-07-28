/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "inverse-primary": "#c8c6c5",
                "error-container": "#ffdad6",
                "on-primary": "#ffffff",
                "tertiary-fixed": "#e4e2e1",
                "outline": "#747878",
                "primary": "#000000",
                "on-primary-container": "#858383",
                "on-surface-variant": "#444748",
                "on-tertiary-fixed-variant": "#474746",
                "inverse-on-surface": "#f1f1f1",
                "on-surface": "#1a1c1c",
                "surface-container-low": "#f3f3f3",
                "secondary": "#a33800",
                "on-secondary-fixed-variant": "#802a00",
                "secondary-fixed": "#ffdbce",
                "surface-tint": "#5f5e5e",
                "secondary-container": "#cd4800",
                "secondary-fixed-dim": "#ffb59a",
                "primary-fixed": "#e5e2e1",
                "on-secondary-fixed": "#370e00",
                "surface-container-highest": "#e2e2e2",
                "on-tertiary-container": "#858383",
                "error": "#ba1a1a",
                "surface-dim": "#dadada",
                "on-tertiary": "#ffffff",
                "on-error": "#ffffff",
                "on-tertiary-fixed": "#1b1c1c",
                "on-background": "#1a1c1c",
                "primary-container": "#1c1b1b",
                "background": "#f9f9f9",
                "surface-container-lowest": "#ffffff",
                "surface-variant": "#e2e2e2",
                "on-secondary": "#ffffff",
                "on-primary-fixed": "#1c1b1b",
                "on-primary-fixed-variant": "#474646",
                "surface": "#f9f9f9",
                "tertiary-fixed-dim": "#c8c6c5",
                "inverse-surface": "#2f3131",
                "tertiary": "#000000",
                "tertiary-container": "#1b1c1c",
                "surface-container": "#eeeeee",
                "outline-variant": "#c4c7c7",
                "surface-container-high": "#e8e8e8",
                "on-error-container": "#93000a",
                "surface-bright": "#f9f9f9",
                "primary-fixed-dim": "#c8c6c5",
                "on-secondary-container": "#fffbff"
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
            spacing: {
                "unit": "4px",
                "max-width": "1280px",
                "margin-mobile": "20px",
                "margin-desktop": "64px",
                "gutter": "24px"
            },
            fontFamily: {
                "headline-lg-mobile": ["Hanken Grotesk"],
                "label-md": ["JetBrains Mono"],
                "headline-lg": ["Hanken Grotesk"],
                "label-sm": ["JetBrains Mono"],
                "display-lg": ["Hanken Grotesk"],
                "body-md": ["Hanken Grotesk"],
                "body-lg": ["Hanken Grotesk"],
                "headline-md": ["Hanken Grotesk"]
            },
            fontSize: {
                "headline-lg-mobile": ["24px", { lineHeight: "32px", fontWeight: "700" }],
                "label-md": ["14px", { lineHeight: "20px", fontWeight: "500" }],
                "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "700" }],
                "label-sm": ["12px", { lineHeight: "16px", fontWeight: "500" }],
                "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "800" }],
                "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
                "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
                "headline-md": ["20px", { lineHeight: "28px", fontWeight: "600" }]
            }
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries')
    ]
};
