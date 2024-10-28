import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/Loginpage';
import { Homepage } from '../pages/Homepage';
import { Cartpage } from '../pages/Cartpage';

test("logintest", async ({ page }) => {
    // LOGIN TEST CASES
    const login = new Loginpage(page);
    await login.gotoLoginpage();
    await login.login('9353804347', 'Harish@6');

    // ADD TO CART
    const home = new Homepage(page);
    await home.Home('Samsung Galaxy S23 Ultra 5G AI Smartphone');

    // CART PAGE  
    const cart = new Cartpage(page);
    await cart.cart("hareesh", "9353804348", "590303", "509", "at post this", "marthhalli", "bengalore");
});




























// npx playwright test tests/page.spec.js --headed