module.exports = {
    extends: [
        'next/core-web-vitals',
        'plugin:@typescript-eslint/recommended',
        'plugin:astro/recommended'
    ],
    rules: {
        // Disable unused variable warnings for specific patterns
        '@typescript-eslint/no-unused-vars': 'off',
        'no-unused-vars': 'off',

        // Allow any type in specific cases
        '@typescript-eslint/no-explicit-any': 'warn',

        // Allow require imports (though using import is preferred)
        '@typescript-eslint/no-require-imports': 'warn',

        // Allow img elements (though using next/image is preferred)
        '@next/next/no-img-element': 'warn',

        // Allow unescaped entities
        'react/no-unescaped-entities': 'off',
    },
    ignorePatterns: [
        'node_modules/',
        '.next/',
        'out/',
    ],
    overrides: [
        {
            files: ["*.astro"],
            parser: "astro-eslint-parser",
            rules: {
                "astro/no-unused-css-selector": "off"
            }
        }
    ]
}