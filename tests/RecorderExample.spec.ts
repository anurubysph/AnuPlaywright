import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    await page.goto('https://practice.sdetunicorns.com/contact/');
    await page.getByRole('textbox', { name: 'Name *' }).fill('Karthick');
    await page.getByRole('textbox', { name: 'Email *' }).fill('Karthick@test.com');
    await page.getByRole('textbox', { name: 'Phone *' }).fill('9323232');
    await page.getByRole('textbox', { name: 'Message' }).fill('This is generated using recorder');
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.getByRole('alert')).toContainText('Thanks for contacting us! We will be in touch with you shortly');
});