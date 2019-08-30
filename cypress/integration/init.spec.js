describe('App initialization', () => {
  it('Allows for user input', () => {
    cy.visit('/');
    cy.get('#user-input')
      .should('exist')
      .type('Test value');

    cy.get('#user-input').should('have.value', 'Test value');
  });

  it('Should allow for clearing user input', () => {
    cy.visit('/');
    cy.get('#user-input').type('Test value');
    cy.get('#click-button').click();
    cy.get('#user-input').should('have.value', '');
  });
});
