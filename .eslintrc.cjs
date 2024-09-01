module.exports = {
    env: { browser: true, es2020: true, amd: true, node: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
        'plugin:tailwindcss/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        createDefaultProgram: true,
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['react-refresh'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
        'react-hooks/exhaustive-deps': 'off',
        'react-refresh/only-export-components': 'off',
        'tailwindcss/no-custom-classname': 'off',
        'tailwindcss/classnames-order': ['warn', { config: 'tailwind.config.js' }],
        'import/order': [
            'error',
            {
                groups: ['type', 'builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'unknown'],
                pathGroups: [
                    {
                        pattern: 'react*',
                        group: 'external',
                        position: 'before',
                    },
                    {
                        pattern: '@libs/*',
                        group: 'internal',
                        position: 'after',
                    },
                    {
                        pattern: '@components/*',
                        group: 'internal',
                        position: 'after',
                    },
                ],

                pathGroupsExcludedImportTypes: ['@tanstack*'],
                alphabetize: {
                    order: 'asc',
                },
            },
        ],
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: true,
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    ignorePatterns: ['.eslintrc.cjs', 'vite.config.ts', 'tailwind.config.js'],
};
