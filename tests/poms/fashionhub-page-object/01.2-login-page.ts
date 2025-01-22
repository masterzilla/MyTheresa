import { type Locator, type Page } from '@playwright/test';
import { getBaseUrl } from '../../../config.ts';

export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('input\[id="username"]');
    this.password = page.locator('input\[id="password"]');
    this.loginButton = page.getByRole('button', {name: 'Login'});
  }

  async credentialsInput(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
  }

  async clickButtonLogin() {
    await this.loginButton.click();
  }

}