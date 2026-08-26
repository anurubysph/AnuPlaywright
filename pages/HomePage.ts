import { Page, Locator } from '@playwright/test';

export class HomePage {
    private page: Page;
    public homeLink: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.homeLink = page.locator('#menu-secondary >> text=Home');
    }   

    async navigate() {
        await this.page.goto('https://practice.sdetunicorns.com/');
    }
}