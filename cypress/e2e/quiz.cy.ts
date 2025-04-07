describe('Quiz e2e test', () => {
  beforeEach( () => {
    cy.visit('/');
    cy.fixture('questions.json').as('questions');
  });

  it('On load start button is visible', () => {
    cy.get('button').should('have.text', 'Start Quiz');
  });

  it('On click of start button quiz starts', () => {
    cy.contains('Start Quiz').click(); // Click the start button

    cy.get('@questions').then((questions) => {
      const firstQuestion = questions[0].question;
      cy.contains(firstQuestion).should('be.visible');
  });
});
  // it('User is able to complete the quiz')
  //   cy.wait( )


  //it('User is able to take a new quiz')

});