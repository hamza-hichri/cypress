import Login from "../PageObjects/LoginPage2.js";

describe("verify records", () => {
  beforeEach("login to OrangeHRM", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com");
    cy.fixture("orange").then((dataOrange) => {
      const log = new Login();
      log.setUsername(dataOrange.username);
      log.setPassword(dataOrange.password);
      log.clicksubmit();
      log.verifylogin();
    });
  });
  let dataOrange;
  var members;
  var i = 0;
  before(() => {
    cy.fixture("orange").then((data) => {
      dataOrange = data;
    });
  });
  it("Records count", () => {
    cy.get(dataOrange.directory).click();
    cy.get(dataOrange.verifydirectory).should("have.text", "Directory");
    cy.wait(1000);
    cy.get(".orangehrm-horizontal-padding > .oxd-text").then((e) => {
      let number = e.text();
      members = number.substring(
        //45
        number.indexOf("(") + 1,
        number.indexOf(")")
      );
      cy.log(members);
    });
    cy.get(".oxd-grid-4 > div").each(() => {
      i++;
      cy.log(i);
    });
  });
});
