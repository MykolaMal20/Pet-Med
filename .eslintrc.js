// https://eslint.org/docs/v8.x/

const config = {
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        /* https://www.npmjs.com/package/eslint-plugin-react */
        'plugin:react/recommended',
        /* https://www.npmjs.com/package/eslint-plugin-react-hooks */
        'plugin:react-hooks/recommended',
        /* https://www.npmjs.com/package/eslint-plugin-import */
        'plugin:import/errors',
        'plugin:import/warnings',
        /* https://www.npmjs.com/package/eslint-plugin-unicorn */
        'plugin:unicorn/recommended',
        /* https://www.npmjs.com/package/eslint-plugin-cypress */
        'plugin:cypress/recommended',
        'plugin:prettier/recommended',
    ],
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
            webpack: {
                config: './config/webpack.dev.config.js',
            },
        },
    },
    plugins: ['simple-import-sort', 'react'],
    ignorePatterns: ['node_modules'], // Виключено 'cypress/'
    rules: {
        'sx-a11y/heading-has-content': 'off',
        'unicorn/no-null': 'off',
        'unicorn/consistent-function-scoping': 'off',
        'unicorn/prefer-module': 'off',
        'cypress/no-unnecessary-waiting': 'off',
        'unicorn/no-empty-file': 'off',
        'unicorn/filename-case': [
            'error',
            {
                cases: {
                    camelCase: true,
                    pascalCase: true,
                },
            },
        ],
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': 'error',
        'import/namespace': [2, { allowComputed: true }],
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'react-hooks/rules-of-hooks': 'error', // Перевіряє правила використання хуків
        'react-hooks/exhaustive-deps': 'warn', // Перевіряє залежності ефектів
    },
    overrides: [
        {
            files: ['*rc.js', '*.config.js'],
            rules: {
                'unicorn/prefer-module': 'off',
                'unicorn/filename-case': 'off',
            },
        },
        {
            files: ['*.jsx', '*.js'],
            rules: {
                'react/react-in-jsx-scope': 'off', // Не потрібне для нових версій React
            },
        },
    ],
    globals: {
        Cypress: true,
    },
};

module.exports = config;
