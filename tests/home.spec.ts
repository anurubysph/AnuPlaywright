import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';


let homePage : HomePage;

test.describe('Home Page test Suite', () => {

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
    });

    test('Go to Home Page and Verify Title', async ({ page }) => {
        await homePage.navigate();

        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    });

    test('Go to Home Page & Verify Url', async ({ page }) => {
        await homePage.navigate();

        await expect(page).toHaveURL('https://practice.sdetunicorns.com/');
    });


    test('Click Get-Started button and verify the url', async ({ page }) => {
        await homePage.navigate();    

        const buttonElement = page.locator('#get-started');
        await buttonElement.click();
        // await expect(page).toHaveURL('https://practice.sdetunicorns.com/#get-started');

        // Regular expression to match the URL pattern
        await expect(page).toHaveURL(/.*#get-started/);   
    })
    

    test('verify the text is visible in the page', async ({ page }) => {
        await page.goto('https://practice.sdetunicorns.com/');
        // Single quotes are used to substring match and non case sensitive 
        // const textElement = page.locator('text=think different. Make different.');

        // Double quotes are used to match the text exactly, including case sensitivity and punctuation.
        const textElement = page.locator('text="Think different. Make different."');
        await expect(textElement).toBeVisible();
    })
    
    test('Verify the home link is enabled at the footer', async ({ page }) => {
        await page.goto('https://practice.sdetunicorns.com/');
        // To find out the home button is enabled at the footer, we can use
        //  CSS and the text selector combination.
        const homelink = page.locator('#menu-secondary >> text=Home');
        await expect(homelink).toBeEnabled();
    });

    
    test('Verify the home link is enabled at the footer New', async ({ page }) => {
        await page.goto('https://practice.sdetunicorns.com/');
        // To find out the home button is enabled at the footer, we can use
        //  CSS and the text selector combination.
        const homelink = page.locator('#menu-secondary >> text=Home');
        await expect(homelink).toBeEnabled();
    });

    test('Verify the home link is enabled at the footer using XPath', async ({ page }) => {
        await page.goto('https://practice.sdetunicorns.com/');
        // TODO : XPath Selector, currently not working, need to recheck
        const homelink = page.locator('///*[@id="menu-secondary"]///*[@href="https://practice.sdetunicorns.com/"]');
        await expect(homelink).toBeEnabled();
    });

    
    test('Verify the Footer Quick links content using XPath', async ({ page }) => {

        const expectedLinks = [
            'Home',
            'About',
            'Blog',
            'Contact',
            'Support Form'
        ];

        await page.goto('https://practice.sdetunicorns.com/');

        // Using XPAth to get the footer quick links
        const quickLinks = page.locator('#menu-secondary li[id*=menu]');
        expect(await quickLinks.allTextContents()).toEqual(expectedLinks); 

        // Print each elements in the quick links to the console in a for loop
        for (const linkElement of await quickLinks.elementHandles()) {
            
            const linkText = await linkElement.textContent();
            console.log('---->>>> ' + linkText);              
        }

    });


});
