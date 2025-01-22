import { type Page } from '@playwright/test';
import { getBaseUrl } from '../../../config.ts';

export class HomePage {
    readonly page: Page;
  
    constructor(page: Page) {
      this.page = page;
    }
    
    async gotoHome() {
        await this.page.goto(getBaseUrl()); // base on the definition in the 'config.json' and the 'config.ts' files. 
    }

    async gotoAccount(){
      await this.page.getByRole('link', { name: 'Account' }).click();
    }
  
}