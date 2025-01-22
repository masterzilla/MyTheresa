import { test, expect } from '@playwright/test';
import { HomePage } from './poms/fashionhub-page-object/00-home-page';

test('Verify that there are no console errors when you visit the fashionhub webpage', async ( {page} ) => {

    page.on('console', msg => { 
        console.log(msg)
        expect.soft(msg.type()).not.toEqual('error');
    });    
    
    const home = new HomePage(page);
    await home.gotoHome();
    await page.close();

});