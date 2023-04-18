describe("mouse operations", () => {
  it("MouseOver", () => {
    cy.visit("https://demo.opencart.com");
    cy.get(
      "body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)"
    ).should("not.be.visible");
    cy.get(
      ".nav-link.dropdown-toggle[href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=20']"
    )
      .trigger("mouseover")
      .click();
    cy.get(
      "body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)"
    ).should("be.visible");
  });
  it("Right click", () => {
    cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");
    cy.get("body > div > section > div > div > div > p > span").trigger(
      "contextmenu"
    );
    //cy.get("body > div > section > div > div > div > p > span").rightclick
    cy.get(
      "body > ul > li.context-menu-item.context-menu-icon.context-menu-icon-copy"
    ).should("be.visible");
  });
  it("double click", () => {
    // cy.get("id or class du boutton").dblclick();
  });
  it("drag and drop", () => {});
  it("MouseOver", () => {});
});
