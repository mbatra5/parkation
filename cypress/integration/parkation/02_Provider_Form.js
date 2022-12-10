/// <reference types="Cypress" />
/// <reference types="@applitools/eyes-cypress"/>
import Homepage from "../../support/pageObjects/HomePage"

const execution_type = "desktop",
 TestName = "Provider_Submission",
 HomePage = new Homepage();

describe("Home", function () {
  before(function () {
    cy.eyes_setup(TestName, execution_type);
    cy.visit(Cypress.env("url"));
  });

  it("Reach Provider Form", function () {
    HomePage.carPoolingButton()
    HomePage.getProviderButton()
  });

  it("Form Errors", function () {
    HomePage.providerSubmitButton()
    cy.makeScreenshot("Error Messages Appear");
  });

  after(function () {
    cy.eyesClose();
  });
});
