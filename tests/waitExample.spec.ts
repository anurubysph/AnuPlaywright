import {test, expect } from '@playwright/test';
import path from 'path';

test.describe('Wait Exercise', () => {

    test('Example', async ({ page }) => {
        await page.goto('https://practice.sdetunicorns.com/cart/');
        await page.waitForLoadState('networkidle');

        const filePath = path.resolve(__dirname, '../data/abc.jpg'); 

        // Sets the local file to the fileUpload element 
        await page.setInputFiles('input[type="file"]', filePath); 

        // Hard Coded wait for 5 seconds, should be avoided in real tests, use conditional waits instead
        await page.waitForTimeout(5000);

        // Conditional wait for the element to be visible
        // To be used when the asserion wait cannot be used, can be used for 
        // any state like visible, hidden, attached, detached
        await page.locator('#upload_1').waitFor({ state: 'visible' });

        // Conditional wait for the element to be visible -- Default timeout is 30 seconds
        // can be used when the asserion wait cannot be used and only for Visible state
        await page.locator('#upload_1').waitFor(); 
        
        // await page.click('text=Upload File');
        await page.locator('#upload_1').click();
         
        // page.waitForTimeout(15000);
        // Assessern Wait : Timeout is set to 10 seconds for the assertion to pass
        // Most commonly used wait
         await expect(page.locator('#wfu_messageblock_header_1_1'))
            .toContainText('uploaded successfully', { timeout: 10000 });    
            
        // page.waitForTimeout(15000);  
    });

})
