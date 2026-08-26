import {test, expect } from '@playwright/test';

test.describe('First exercise', () => {

    test('Contact Page verification Exercise', async ({ page }) => {
        await page.goto('https://practice.sdetunicorns.com/contact/');
        
        // TODO : Need to uncomment to test the feature.
        // await page.pause();

        await page.waitForLoadState('networkidle');
 
        // First go to the div tag and then go to the input tag and fill the value
        await page.locator('.contact-name input').fill('Anu');
        await page.locator('.contact-email input').fill('anu@example.com');
        await page.locator('.contact-phone input').fill('1234567890');
        await page.locator('.contact-message textarea').fill('This is a test message');
        await page.click('text=Submit');

        const successMessage = await page.locator('text=Thanks for contacting us! We will be in touch with you shortly');
        await expect(successMessage).toBeVisible();  
    });

})
