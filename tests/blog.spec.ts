import { test, expect } from '@playwright/test';

test.describe('Blog exercise', () => {

    test('Recent Posts verification', async ({ page }) => {
        await page.goto('https://practice.sdetunicorns.com/blog/');
        await page.waitForLoadState('networkidle'); 

        // Using CSS selector ID and element name to get the recent posts links
        const recentPosts = await page.locator('#recent-posts-3 a');

        // Verify that there are 5 recent posts
        expect(await recentPosts.count()).toBe(5);
        // console.log(recentPosts);

        for (const myPostElement of await recentPosts.elementHandles()) {

            // Length of each post should be greater than 10 characters
            const myPost = await myPostElement.textContent();

            expect(myPost.length).toBeGreaterThan(10);
            // console.log('---->>>> ' + myPost + ' has length of ' + myPost.length);
        }
    });


    test('Recent Posts verification Anaother Example', async ({ page }) => {
        await page.goto('https://practice.sdetunicorns.com/blog/');
        await page.waitForLoadState('networkidle'); 

        // Using CSS selector ID and element name to get the recent posts links
        const recentPosts = await page.locator('#recent-posts-3 a').allTextContents();

        // Verify that there are 5 recent posts
        expect(recentPosts.length).toBe(5);
        // console.log(recentPosts);

        for (const myPost of recentPosts) {

            // Length of each post should be greater than 10 characters
            expect(myPost.length).toBeGreaterThan(10);
            // console.log('---->>>> ' + myPost + ' has length of ' + myPost.length);
        }
    });


    
});