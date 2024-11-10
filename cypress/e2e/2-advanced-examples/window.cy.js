context('Window', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/window');
    });

    it('cy.window() - get the global window object', () => {
        // https://on.cypress.io/window
        cy.window().should('have.property', 'top');
    });

    it('cy.document() - get the document object', () => {
        // https://on.cypress.io/document
        cy.document().should('have.property', 'charset').and('eq', 'utf8'); // виправлено на "utf8"
    });

    it('cy.title() - get the title', () => {
        // https://on.cypress.io/title
        cy.title().should('include', 'Kitchen Sink');
    });
});