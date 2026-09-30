describe('Saucedemo E2E Test Suite', () => {

  function login(username, password) {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
  }

  function proceedToCheckout(firstName, lastName, postalCode) {
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    
    cy.url().should('include', '/cart.html')
    cy.get('[data-test="inventory-item"]').should('be.visible')
    
    cy.get('[data-test="checkout"]').click()

    cy.url().should('include', '/checkout-step-one.html')
    cy.get('[data-test="firstName"]').type(firstName)
    cy.get('[data-test="lastName"]').type(lastName)
    cy.get('[data-test="postalCode"]').type(postalCode)
    cy.get('[data-test="continue"]').click()
  }

  function finishCheckout() {
    cy.url().should('include', '/checkout-step-two.html')
    cy.get('[data-test="finish"]').click()

    cy.url().should('include', '/checkout-complete.html')
  }

  it('should successfully complete full shopping and checkout flow', () => {
    login('standard_user', 'secret_sauce')

    proceedToCheckout('Zahrah', 'Purnama', '16424')

    finishCheckout()
  })

})