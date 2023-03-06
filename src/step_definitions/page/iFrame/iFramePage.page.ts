import { Page, Locator, expect } from '@playwright/test';

export default class IFramePage {
  private page: Page;
  readonly eleClickHere: Locator;
  readonly eleLink: Locator;

  constructor(page: Page) {
    this.page = page;
    //button
    this.eleClickHere = page.locator('//div[@id="post-2632"]/div[2]/div/div/div[1]/a');
    this.eleLink = page.locator('https://www.globalsqa.com/demo-site/frames-and-windows/#');
  }
  public async goToPage(url: string) {
    await this.page.goto(url);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async clickOpenNewTab(pagePromise: any) {
    const ele = await this.eleClickHere;
    await ele?.click();
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    await expect(newPage).toHaveURL('https://www.globalsqa.com/demo-site/frames-and-windows/#');
  }
}
