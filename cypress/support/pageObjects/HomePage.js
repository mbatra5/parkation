class Homepage {

  carPoolingButton() {
    return cy.xpath("//button[contains(text(),'Car Pooling')]").click()
  }
  getRiderButton() {
    return cy.get("img[alt='Rider']").click({ force: true });
  }

  getProviderButton() {
    return cy.get("img[alt='Provider']").click({ force: true });
  }

  providerSubmitButton() {
    return cy.xpath("//span[contains(text(),'Make Buddy')]").click()
  }
}

export default Homepage;
