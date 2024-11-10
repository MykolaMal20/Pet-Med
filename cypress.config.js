const { defineConfig } = require('cypress');
const webpackConfig = require('./config/webpack.cypress.config');

module.exports = defineConfig({
    projectId: 'fpsyze',
    component: {
        devServer: {
            framework: 'react',
            bundler: 'webpack',
            webpackConfig, // webpackConfig: webpackConfig
        },
        specPattern: ['src/**/*.cy.{js,jsx,ts,tsx}'],
        setupNodeEvents(on, config) {
            // Налаштування Node подій для component testing
            // https://docs.cypress.io/guides/tooling/code-coverage
            require('@cypress/code-coverage/task')(on, config);

            // Використання Babel для обробки файлів
            on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'));

            on('after:screenshot', (details) => {
                console.log('Screenshot taken', details);
            });

            return config;
        },
    },

    e2e: {
        setupNodeEvents(on, config) {
            on('task', {
                log(message) {
                    console.log(message);
                    return null;
                },
            });

            return config;
        },
    },
});
