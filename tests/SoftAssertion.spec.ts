import {test, expect } from '@playwright/test';

test.describe('First exercise', () => {

    test('Soft Assertion Example', async ({ page }) => {
        await page.goto('https://practice.sdetunicorns.com/contact/');

        
        await page.waitForLoadState('networkidle');
 
        // First go to the div tag and then go to the input tag and fill the value
        await page.locator('.contact-name input').fill('Anu');

        expect.soft(await page.locator('.contact-name input').inputValue()).toBe('Karthick');

        await page.locator('.contact-email input').fill('anu@example.com');

        expect.soft(await page.locator('.contact-email input').inputValue()).toBe('karthik@test.com');
        
        // THis is a hard assertion, if this fails, the test will stop and the next steps will not be executed.
        // even if there are soft assertions following.
        // expect(test.info().errors).toBe(0);

        await page.locator('.contact-phone input').fill('1234567890');
        await page.locator('.contact-message textarea').fill('This is a test message');

        expect.soft(await page.locator('.contact-message textarea')).toHaveText('Dummy message');
        await page.click('text=Submit');


        const successMessage = await page.locator('text=Thanks for contacting us! We will be in touch with you shortly');
        await expect(successMessage).toBeVisible();  
    });

})
