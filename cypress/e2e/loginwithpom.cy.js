import Login from "../PageObjects/LoginPage2.js";

describe("POM", () => {
  it("logintest with pom", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com");

    cy.fixture("orange").then((data) => {
      const ln = new Login();
      ln.setUsername(data.username);
      ln.setPassword(data.password);
      ln.clicksubmit();
      ln.verifylogin();
    });
  });
});
