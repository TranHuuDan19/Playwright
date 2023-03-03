import { Locator, Page, expect } from '@playwright/test';

export default class DeleteProductPage {
  private page: Page;
  readonly eleCheckbox: Locator;
  readonly eleCheckAll: Locator;
  readonly eleDeleteButton: Locator;
  readonly eleProductTitle: Locator;
  readonly eleYesToDetele: Locator;
  readonly eleNoToDelete: Locator;
  readonly eleOk: Locator;
  constructor(page: Page) {
    this.page = page;
    this.eleCheckbox = page.locator("(//input[@name='checkbox_products'])[1]");
    this.eleCheckAll = page.locator("(//input[@class='mastercheckbox'])[1]");
    this.eleDeleteButton = page.locator("//button[@class='btn btn-danger']");
    this.eleProductTitle = page.locator("//h1[text()[normalize-space()='Products']]");
    this.eleYesToDetele = page.locator("(//button[contains(@class,'btn btn-primary')])[1]");
    this.eleNoToDelete = page.locator("//span[contains(@class,'btn btn-default')]");
    this.eleOk = page.locator("(//span[contains(@class,'btn btn-primary')])[2]");
  }
  async getPageObj() {
    return this.page;
  }
  public async selectOneRecord() {
    const ele = this.eleCheckbox;
    await ele.check();
    expect(ele.isChecked()).toBeTruthy();
  }
  public async selectAll() {
    const ele = this.eleCheckAll;
    await ele.check();
    expect(ele.isChecked()).toBeTruthy();
  }
  public async clickDeleteButton() {
    const ele = this.eleDeleteButton;
    await ele?.click();
  }
  public async verifyTitleOfProductPage() {
    await expect(this.eleProductTitle).toContainText('Product');
  }

  public async clickNoButton() {
    const ele = this.eleNoToDelete;
    await ele?.click();
  }
  public async clickYesButton() {
    const ele = this.eleYesToDetele;
    await ele?.click();
  }
  public async verifyErrorDisplay() {
    const ele = this.eleOk;
    await ele?.click();
  }
}
