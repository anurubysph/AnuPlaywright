import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';


test.describe('Shop Page test Suite', () => {


    test('Go to Shop Page & Verify Url', async ({ page }) => {
        await page.goto('https://practice.sdetunicorns.com/shop/');

        await expect(page).toHaveURL('https://practice.sdetunicorns.com/shop/');
    });

});
