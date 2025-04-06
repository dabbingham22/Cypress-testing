describe('Quiz e2e test', () => {
  beforeEach( () => {
    cy.visit('/');
  });

  it('On load start button is visible'), () => {
    cy.get('button')
    .contains('Start Quiz')
    .should('be.visible');
  } 

  //it('On click of start button quiz starts')

  //it('User is able to complete the quiz')

  //it('User is able to take a new quiz')

})