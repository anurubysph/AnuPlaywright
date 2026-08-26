import {test, expect } from '@playwright/test';
import path from 'path';

test.describe('Upload Exercise', () => {

    test('First Upload Example', async ({ page }) => {
        await page.goto('https://practice.sdetunicorns.com/cart/');
        await page.waitForLoadState('networkidle');

        const filePath = path.resolve(__dirname, '../data/abc.jpg'); 

        // Sets the local file to the fileUpload element 
        await page.setInputFiles('input[type="file"]', filePath); 

        // await page.click('text=Upload File');
        await page.locator('#upload_1').click();
         
        await expect(page.locator('#wfu_messageblock_header_1_1')).toContainText('uploaded successfully');      
    });

})
