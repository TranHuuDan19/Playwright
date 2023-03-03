import { expect, Locator, Page } from '@playwright/test';

export default class LeftSideBar {
  private page: Page;
  readonly btnDashBoard: Locator;
  readonly drpCatalog: Locator;
  readonly productOption: Locator;
  readonly eleDashboardTitle: Locator;
  constructor(page: Page) {
    this.page = page;
    this.btnDashBoard = page.locator("//p[text()=' Dashboard']");
    this.drpCatalog = page.locator("(//i[contains(@class,'right fas')])[1]");
    this.productOption = page.locator("//p[text()=' Products']");
    this.eleDashboardTitle = page.locator("//h1[text()[normalize-space()='Dashboard']]");
  }
  public async clickDashBoard() {
    const ele = this.btnDashBoard;
    await ele?.click();
  }
  public async selectProductInCatalog() {
    const ele = this.drpCatalog;
    const option = this.productOption;
    await ele.scrollIntoViewIfNeeded();
    this.page.waitForLoadState();
    await this.page.waitForTimeout(5000);
    await ele.click();
    await option?.click();
    await this.page.waitForLoadState();
  }
  public verifyDashBoardAlreadyLoad() {
    this.page.waitForLoadState();
    expect(this.btnDashBoard).toBeVisible();
    expect(this.eleDashboardTitle).toContainText('Dashboard');
  }
}
