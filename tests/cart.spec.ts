    import { test, expect } from '@playwright/test';
    import { HomePage } from '../pages/HomePage';


test.describe('Cart Page test Suite', () => {
    test('Go to Cart Page & Verify Url', async ({ page }) => {
        await page.goto('https://practice.sdetunicorns.com/cart/');

        await expect(page).toHaveURL('https://practice.sdetunicorns.com/cart/');
    });
});
