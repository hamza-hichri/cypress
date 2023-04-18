describe("My first test!", () => {
  it("visits the kitchen sink", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("type");
  });
});
