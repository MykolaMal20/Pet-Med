/// <reference types="cypress" />

context('Cypress APIs', () => {
    context('Cypress.Commands', () => {
        beforeEach(() => {
            cy.visit('https://example.cypress.io/cypress-api');

            // Додаємо команду тут, щоб вона була доступна в усіх тестах
            Cypress.Commands.add('console', { prevSubject: true }, (subject, method = 'log') => {
                console[method]('The subject is', subject);
                return subject; // Повертаємо subject, щоб він залишився доступним
            });
        });

        it('.add() - create a custom command', () => {
            cy.get('button').console('info');
        });
    });

    context('Cypress.Cookies', () => {
        beforeEach(() => {
            cy.visit('https://example.cypress.io/cypress-api');
        });

        it('.debug() - enable or disable debugging', () => {
            Cypress.Cookies.debug(true);

            // Додавання та видалення куків
            cy.setCookie('fakeCookie', '123ABC');
            cy.clearCookie('fakeCookie');
            cy.setCookie('fakeCookie', '123ABC');
            cy.clearCookie('fakeCookie');
            cy.setCookie('fakeCookie', '123ABC');
        });
    });

    context('Cypress.arch', () => {
        beforeEach(() => {
            cy.visit('https://example.cypress.io/cypress-api');
        });

        it('Get CPU architecture name of underlying OS', () => {
            expect(Cypress.arch).to.exist;
        });
    });

    context('Cypress.config()', () => {
        beforeEach(() => {
            cy.visit('https://example.cypress.io/cypress-api');
        });

        it('Get and set configuration options', () => {
            let myConfig = Cypress.config();

            expect(myConfig).to.have.property('animationDistanceThreshold', 5);
            expect(myConfig).to.have.property('baseUrl', null);
            expect(myConfig).to.have.property('defaultCommandTimeout', 4000);
            expect(myConfig).to.have.property('requestTimeout', 5000);
            expect(myConfig).to.have.property('responseTimeout', 30_000);
            expect(myConfig).to.have.property('viewportHeight', 660);
            expect(myConfig).to.have.property('viewportWidth', 1000);
            expect(myConfig).to.have.property('pageLoadTimeout', 60_000);
            expect(myConfig).to.have.property('waitForAnimations', true);

            expect(Cypress.config('pageLoadTimeout')).to.eq(60_000);

            // Зміна конфігурації
            Cypress.config('pageLoadTimeout', 20_000);
            expect(Cypress.config('pageLoadTimeout')).to.eq(20_000);
            Cypress.config('pageLoadTimeout', 60_000);
        });
    });

    context('Cypress.dom', () => {
        beforeEach(() => {
            cy.visit('https://example.cypress.io/cypress-api');
        });

        it('.isHidden() - determine if a DOM element is hidden', () => {
            const hiddenP = Cypress.$('.dom-p p.hidden').get(0);
            const visibleP = Cypress.$('.dom-p p.visible').get(0);

            expect(Cypress.dom.isHidden(hiddenP)).to.be.true;
            expect(Cypress.dom.isHidden(visibleP)).to.be.false;
        });
    });

    context('Cypress.env()', () => {
        beforeEach(() => {
            cy.visit('https://example.cypress.io/cypress-api');
        });

        it('Get environment variables', () => {
            Cypress.env({
                host: 'veronica.dev.local',
                api_server: 'http://localhost:8888/v1/',
            });

            expect(Cypress.env('host')).to.eq('veronica.dev.local');

            Cypress.env('api_server', 'http://localhost:8888/v2/');
            expect(Cypress.env('api_server')).to.eq('http://localhost:8888/v2/');

            expect(Cypress.env()).to.have.property('host', 'veronica.dev.local');
            expect(Cypress.env()).to.have.property('api_server', 'http://localhost:8888/v2/');
        });
    });

    context('Cypress.log', () => {
        beforeEach(() => {
            cy.visit('https://example.cypress.io/cypress-api');
        });

        it('Control what is printed to the Command Log', () => {
            // Додаємо код для контролю логування, якщо потрібно
        });
    });

    context('Cypress.platform', () => {
        beforeEach(() => {
            cy.visit('https://example.cypress.io/cypress-api');
        });

        it('Get underlying OS name', () => {
            expect(Cypress.platform).to.exist;
        });
    });

    context('Cypress.version', () => {
        beforeEach(() => {
            cy.visit('https://example.cypress.io/cypress-api');
        });

        it('Get current version of Cypress being run', () => {
            expect(Cypress.version).to.exist;
        });
    });

    context('Cypress.spec', () => {
        beforeEach(() => {
            cy.visit('https://example.cypress.io/cypress-api');
        });

        it('Get current spec information', () => {
            cy.wrap(Cypress.spec).should('include.keys', ['name', 'relative', 'absolute']);
        });
    });
});
