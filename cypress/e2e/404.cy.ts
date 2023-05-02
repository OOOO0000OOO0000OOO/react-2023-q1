/// <reference types="cypress" />

describe('NotFoundPage', () => {
  it('should load', () => {
    cy.visit('/fysdgf7ds86fgdsg62/');
    cy.get('p').invoke('text').should('contain', 'Nothing was found');
  });
});
