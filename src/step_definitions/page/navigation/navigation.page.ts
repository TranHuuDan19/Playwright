import { Page } from '@playwright/test';
export default class navigationPage {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  public async goToPage(url: string) {
    await this.page.goto(url);
    await this.page.waitForLoadState();
    await this.page.waitForTimeout(3000);
  }
}
