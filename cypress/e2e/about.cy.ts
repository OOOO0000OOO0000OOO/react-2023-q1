/// <reference types="cypress" />

describe('AboutPage', () => {
  it('should load', () => {
    cy.visit('/');
    cy.contains('About').click();
    cy.url().should('include', '/about');
  });

  it('should render', () => {
    cy.visit('/about/');
    cy.get('p').invoke('text').should('contain', 'Lorem ipsum');
  });
});
