/// <reference types="cypress" />

describe('FormPage', () => {
  beforeEach(() => {
    cy.visit('/forms');
    cy.get("input[name='name']").type('kisik');
    cy.get("input[name='email']").type('kisik@pisik.com');
    cy.get("input[type='date']").type('2020-02-02');
    cy.get("input[type='file']").selectFile('./public/pokemonsad.jpg');
    cy.get('select').select('Poison Powder');
    cy.get("input[type='radio']").check();
    cy.get("input[type='checkbox']").click();
    cy.get('form').submit();
  });

  it('should submit the form', () => {
    cy.get("[data-testid='user-card']").should('have.length', 1);
  });

  it('should save the state on unmout', () => {
    cy.contains('About').click();
    cy.contains('Create Card').click();
    cy.get('[data-testid="user-cards-list"]').should('contain', 'kisik');
  });
});
