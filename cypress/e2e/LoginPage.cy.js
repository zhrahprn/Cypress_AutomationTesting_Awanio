import { loginPage } from '../support/LoginPage';

describe('SauceDemo Login Feature', () => {
  it('passes', () => {
    loginPage.visit();
    loginPage.login('standard_user', 'secret_sauce');
   
    cy.url().should('include', '/inventory.html');
  });
});