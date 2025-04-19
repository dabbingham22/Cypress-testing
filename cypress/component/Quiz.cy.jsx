import Quiz from "../../client/src/components/Quiz";
import React from "react";

describe('Quiz Component', () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: 'GET',
        url: '/api/questions/random'
      },
      {
        fixture: 'questions.json',
        statusCode: 200
      }
      ).as('randomizeQuestions')
    });

  it('should start the quiz and display the first question', () => {
    cy.mount(<Quiz />);
    //Start quiz
    cy.get('button').contains('Start Quiz').click();
    cy.get('.card').should('be.visible');
    cy.get('h2').should('not.be.empty');
  });

  it('should answer questions and complete the quiz', () => {
    cy.mount(<Quiz />);
    // Start quiz
    cy.get('button').contains('Start Quiz').click();
    // Answer questions
    cy.get('button').contains('1').click();
    // Verify the quiz completion with score displayed
    cy.get('.alert-success').should('be.visible').and('contain', 'Your score');
  });

  it('should restart the quiz after completion', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();

    // Answer questions
    cy.get('button').contains('1').click();

    // Restart the quiz
    cy.get('button').contains('Take New Quiz').click();

    // Verify the quiz is restarted and questions are there
    cy.get('.card').should('be.visible');
    cy.get('h2').contains('?');
  });
});

