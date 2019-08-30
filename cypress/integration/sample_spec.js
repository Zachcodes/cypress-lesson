//basic test
describe('My First Test', function() {
  it('Does not do much!', function() {
    expect(true).to.equal(true);
  });
});

//test visiting a url
describe('visit a page', () => {
  it('Visits the kitchen sink', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('type');
  });
});
