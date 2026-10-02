export class InventoryPage {
  get bikeLightAddToCart() { return cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]'); }
  get shoppingCartLink() { return cy.get('[data-test="shopping-cart-link"]'); }
  get inventoryItem() { return cy.get('[data-test="inventory-item"]'); }
  get checkoutButton() { return cy.get('[data-test="checkout"]'); }

  addBikeLightToCart() {
    this.bikeLightAddToCart.click();
  }

  goToCart() {
    this.shoppingCartLink.click();
    cy.url().should('include', '/cart.html');
    this.inventoryItem.should('be.visible');
  }

  proceedToCheckout() {
    this.checkoutButton.click();
    cy.url().should('include', '/checkout-step-one.html');
  }
}
export const inventoryPage = new InventoryPage();