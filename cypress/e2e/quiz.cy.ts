describe("Quiz e2e test", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001');
    cy.intercept('GET', 'api/questions/random', {
      statusCode: 200,
      fixture: 'questions.json'
    }).as("questions");
  });

  it("On load start button is visible", () => {
    cy.get("button").should("have.text", "Start Quiz");
  });

  it("On click of start button quiz starts", () => {
    cy.contains("Start Quiz").click(); // Click the start button

    cy.get('button').contains('1').click();
  });

  it("User is able to complete the quiz", () => {
    cy.get('button').contains('Start Quiz').click();
    cy.get('button').contains('1').click();
    cy.get('.alert-success').should('be.visible').and('contain', 'Your score');
  });

  it("User is able to take a new quiz", () => {
    cy.get('button').contains('Start Quiz').click();
    cy.get('button').contains('1').click();
    cy.get('button').contains("Take New Quiz").click();
    cy.get('h2').should('not.be.empty');
    cy.get('button').contains('1')
  });
});