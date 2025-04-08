/// <reference types="cypress" />

describe('Tech Quiz E2E Test', () => {
    it('loads the home page and starts the quiz', () => {
        cy.intercept('GET', '/api/questions/random').as('getQuestions');

        cy.visit('http://localhost:3001');

        cy.contains('Start Quiz').should('exist').click();

        cy.wait('@getQuestions');

        cy.get('.spinner-border').should('not.exist');

        cy.get('.alert.alert-secondary').first().should('exist');

        for (let i = 0; i < 10; i++) {
            cy.get('button.btn-primary').first().click();
        }

        cy.contains('Quiz Completed').should('exist');
        cy.contains('Your score:').should('exist');
    });
  });