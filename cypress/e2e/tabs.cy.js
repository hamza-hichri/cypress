describe("template spec", () => {
  it("tabs", () => {
    cy.visit("https://the-internet.herokuapp.com/windows");
    cy.get("#content > div > a").invoke("removeAttr", "target").click(); // remove thue target attrbute and clickng
    cy.get("div[class='example'] h3").should("have.text", "New Window");
    cy.wait(5000);
    cy.go("back");
    cy.url().should("include", "https://the-internet.herokuapp.com/windows");
  });
  it("second method", () => {
    cy.visit("https://the-internet.herokuapp.com/windows");
    cy.get("#content > div > a").then((e) => {
      let url = e.prop("href");
      cy.visit(url);
    });
    cy.url().should(
      "include",
      "https://the-internet.herokuapp.com/windows/new"
    );
    cy.wait(5000);
    cy.go("back");
    cy.url().should("include", "https://the-internet.herokuapp.com/windows");
  });
});
