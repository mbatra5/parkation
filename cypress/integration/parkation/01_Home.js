/// <reference types="Cypress" />
/// <reference types="@applitools/eyes-cypress"/>
import Homepage from "../../support/pageObjects/HomePage"

const execution_type = "desktop",
 TestName = "Car_Pooling",
 HomePage = new Homepage();

describe("Home", function () {
  before(function () {
    cy.eyes_setup(TestName, execution_type);
    cy.visit(Cypress.env("url"));
  });

  it("Home Page", function () {
  cy.makeScreenshot("Parkation Home Page");
  });

  it("Car Pooling", function () {
    HomePage.carPoolingButton()
    cy.makeScreenshot("Car Pooling Questions Appear");
  });

  it("Provider", function () {
    HomePage.getProviderButton()
    cy.makeScreenshot("Provider Form Appears");
  });

  after(function () {
    cy.eyesClose();
  });
});
