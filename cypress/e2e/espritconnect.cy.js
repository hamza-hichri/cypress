describe("template spec", () => {
  it("esprit", () => {
    cy.visit("https://espritconnect.com");
    cy.get("onetrust-accept-btn-handler").click();
    cy.get(
      "body > app > home > div > div > gw-header > div > header > div.gw-flex-item.gw-no-flex.gw-xs-order-1.gw-sign-in-wrap.ng-star-inserted > button"
    ).click();
    cy.get("#mat-input-2").type("hichri.hamza@esprit.tn");
    cy.get("#mat-input-3").type("203JMT2709");
  });
});
