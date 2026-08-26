import { test, expect } from '@playwright/test';
class SearchOption {
  private page: any; 
     constructor(page: any) {
    this.page = page;
    }
    async navigate() {
        await this.page.goto('https://practice.sdetunicorns.com');
    }
    async searchForOption(option: string) {
    }
}