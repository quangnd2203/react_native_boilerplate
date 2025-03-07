const prettierOptions = require('./.prettierrc.js');

module.exports = {
    root: true,
    extends: ['@react-native', 'prettier'],
    plugins: ['prettier', '@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    ignorePatterns: ['node_modules/'],
    rules: {
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-explicit-any': 'off',
        'react-native/no-inline-styles': 'error',
        'prettier/prettier': ['warn', prettierOptions],
        'react/function-component-definition': [
            'error',
            {
                namedComponents: 'function-declaration',
                unnamedComponents: 'function-expression',
            },
        ],
    },

    overrides: [
        {
            files: ['**/*.{js,jsx,ts,tsx}'],
            rules: {
                '@typescript-eslint/explicit-module-boundary-types': 'off',
            },
        },
    ],
};
