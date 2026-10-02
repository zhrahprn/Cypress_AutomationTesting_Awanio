export class CheckoutPage {
  get firstNameInput() { return cy.get('[data-test="firstName"]'); }
  get lastNameInput() { return cy.get('[data-test="lastName"]'); }
  get postalCodeInput() { return cy.get('[data-test="postalCode"]'); }
  get continueButton() { return cy.get('[data-test="continue"]'); }
  get finishButton() { return cy.get('[data-test="finish"]'); }

  fillCustomerInfo(firstName, lastName, postalCode) {
    this.firstNameInput.type(firstName);
    this.lastNameInput.type(lastName);
    this.postalCodeInput.type(postalCode);
    this.continueButton.click();
    cy.url().should('include', '/checkout-step-two.html');
  }

  finishOrder() {
    this.finishButton.click();
    cy.url().should('include', '/checkout-complete.html');
  }
}
export const checkoutPage = new CheckoutPage();