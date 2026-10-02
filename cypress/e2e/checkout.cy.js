import { loginPage } from '../support/pages/LoginPage';
import { inventoryPage } from '../support/pages/InventoryPage';
import { checkoutPage } from '../support/pages/CheckoutPage';

describe('Saucedemo E2E Checkout with POM', () => {
  it('should successfully complete full shopping and checkout flow', () => {
    // 1. Login
    loginPage.visit();
    loginPage.login('standard_user', 'secret_sauce');

    // 2. Pilih Barang & Masuk Keranjang
    inventoryPage.addBikeLightToCart();
    inventoryPage.goToCart();
    inventoryPage.proceedToCheckout();

    // 3. Isi Data Diri & Selesaikan Checkout
    checkoutPage.fillCustomerInfo('Zahrah', 'Purnama', '16424');
    checkoutPage.finishOrder();
  });
});