class Login {
  txtusername = ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input";
  txtpwd = ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input";
  smtbtn = "button[type='submit']";
  checker = ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module";
  setUsername(username) {
    cy.get(this.txtusername).type(username);
  }
  setPassword(password) {
    cy.get(this.txtpwd).type(password);
  }
  clicksubmit() {
    cy.get(this.smtbtn).click();
  }
  verifylogin() {
    cy.get(this.checker).should("have.text", "Dashboard");
  }
}
export default Login;
