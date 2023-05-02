/// <reference types="cypress" />

describe('MainPage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render cards', () => {
    cy.get('input').type(' ');
    cy.get('form').submit();
    cy.get('[data-testid="card"]').should('have.length', 20);
  });

  it('should search for cards', () => {
    cy.get('input').type('Rick');
    cy.get('form').submit();
    cy.get('h3').invoke('text').should('contain', 'Rick');
  });

  it('should render 404 for no search results', () => {
    cy.get('input').type('oosdosfoodcljhbnxz76');
    cy.get('form').submit();
    cy.get('p').invoke('text').should('contain', 'Nothing was found');
  });
});
