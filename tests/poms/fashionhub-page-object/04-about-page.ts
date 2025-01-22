import { type Page } from '@playwright/test';

export class AboutPage {
    readonly page: Page;
  
    constructor(page: Page) {
      this.page = page;
    }
    
    async gotoAbout() {
        await this.page.goto('http://localhost:4000/fashionhub/about.html'); 
    }
  
}