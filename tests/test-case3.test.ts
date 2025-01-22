import { test, expect } from '@playwright/test';
import { HomePage } from './poms/fashionhub-page-object/00-home-page';
import { LoginPage } from './poms/fashionhub-page-object/01.2-login-page';
import { AccountPage } from './poms/fashionhub-page-object/01.1-account-page';

test('Verify that a user can login using login and password', async({ page }) => {

    // Object Instantiation
    const home = new HomePage(page);
    const account = new AccountPage(page);
    const login = new LoginPage(page);
    await home.gotoHome(); 
    await home.gotoAccount();

    await login.credentialsInput('demouser','fashion123');
    await login.clickButtonLogin();
    
    await expect(account.logoutButton).toContainText('Logout');
    await page.close();

});
