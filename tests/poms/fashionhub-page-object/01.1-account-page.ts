import { type Locator, type Page } from '@playwright/test';

export class AccountPage {
    readonly page: Page;
    readonly logoutButton: Locator;
  
    constructor(page: Page) {
      this.page = page;
      this.logoutButton = page.getByRole('button', {name: 'Logout'});
    }
  
  }