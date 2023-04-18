describe("screenshots", () => {
  it("capture screenshot and videos", () => {
    cy.visit("https://demo.opencart.com");
    cy.screenshot("homepage"); //screenshot of all webpage
    cy.wait(3000);
    cy.get("img[title='Your Store']").screenshot("logo"); //screenshot a specific part

    //auto capture screenshot and videos on failure through CLI execution
    cy.get("li:nth-child(7) a:nth-child(1)").click();
    cy.get("div[id='content'] h2").should("have.text", "tablette");
  });
});
