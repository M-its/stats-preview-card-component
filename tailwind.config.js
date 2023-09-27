module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                // redhd: ["Red Hat Display", "sans-serif"],
                inter: ["Inter", "sans-serif"],
                "lexend-deca": ["Lexend Deca", "sans-serif"],
            },

            colors: {
                // Primary
                "very-dark-blue": "hsl(var(--very-dark-blue))",
                "dark-desaturated-blue": "hsl(var(--dark-desaturated-blue))",
                "soft-violet": "hsl(var(--soft-violet))",

                // Neutral
                white: "hsl(var(--white))",
            },
        },
    },
    plugins: [],
}
