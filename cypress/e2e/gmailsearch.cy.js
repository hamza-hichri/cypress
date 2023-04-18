/// <reference types="Cypress" />
describe("template spec", () => {
  it("passes", () => {
    cy.visit(
      "https://accounts.google.com/v3/signin/identifier?dsh=S-1861472224%3A1677170405954080&authuser=0&continue=https%3A%2F%2Fmail.google.com&ec=GAlAFw&hl=fr&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession"
    );
    cy.get("input#identifierId.whsOnd.zHQkBf").type("hichri.hamza@esprit.tn");
    cy.get(
      "#identifierNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d"
    ).click();
    cy.wait(1000);
    cy.get(".VfPpkd-vQzf8d").should("eq", "mot de passe oublier");
    cy.get("input[name='Passwd']").type("0024700799Hamza");
  });
});
