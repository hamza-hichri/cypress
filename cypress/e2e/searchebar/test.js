import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit the web site", () => {
  cy.visit("https://www.duckduckgo.com");
});

/////Then("I should see a search bar", () => {
// cy.get("input").should(
// "have.attr",
//"placeholder",
// "Search the web without being tracked"
//);
//});
