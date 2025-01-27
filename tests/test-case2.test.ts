import { test, expect } from '@playwright/test';
import { HomePage } from './poms/fashionhub-page-object/00-home-page';


test('Verify that the Home page is returning the expected status 200 code ', async ( {page} ) => {
    
    // Creating a listeners
    page.on('response', response => {
        expect.soft(response.status(),
        `Response with status ${response.status()} for URL: ${response.url()}`).toBe(200);
    });

    const home = new HomePage(page);
    await home.gotoHome();

    await page.close();

});

test('Verify that the Home page is returning the expected status 30x code ', async ( {page} ) => {
    
    // Creating a listeners
    page.on('response', response => {
        expect.soft(response.status(), 
        `Response with status ${response.status()} for URL: ${response.url()}`).toBeLessThan(300);
    });

    const home = new HomePage(page);
    await home.gotoHome();

    await page.close();

});

test('Verify that the Home page is not returning a 40x status code ', async ( {page} ) => {
    
    // Creating a listeners
    page.on('response', response => {
        expect(response.status()).toBeLessThan(400);
    });

    const home = new HomePage(page);
    await home.gotoHome();

    await page.close();

});