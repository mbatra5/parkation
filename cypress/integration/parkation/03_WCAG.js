/// <reference types="Cypress" />
import Homepage from "../../support/pageObjects/HomePage"

const HomePage = new Homepage();

describe("Accessibility Test", function () {
  before(() => {
    cy.visit(Cypress.env("url"));
    cy.injectAxe();
  });

  it("Reach Provider Form", function () {
    HomePage.carPoolingButton()
    HomePage.getProviderButton()
    HomePage.providerSubmitButton()
  });

  it("Accessibility", function () {
    cy.checkA11y();
  });

  it("Include only P1, P2 issues", function () {
    cy.checkA11y(null, { includedImpacts: ["critical", ["serious"]] });
  });
});
