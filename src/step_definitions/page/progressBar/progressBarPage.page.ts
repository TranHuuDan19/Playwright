import { Page, Locator } from '@playwright/test';

export default class progressBarPage {
  private page: Page;
  readonly eleStartDownloadBtn: Locator;
  readonly eleCancelDownloadBtn: Locator;
  readonly eleComplete: Locator;
  readonly eleCloseBtn: Locator;
  constructor(page: Page) {
    this.page = page;
    this.eleStartDownloadBtn = page.locator('#downloadButton');
    this.eleCancelDownloadBtn = page.locator('//button[text()="Cancel Download"]');
    this.eleComplete = page.locator('//div[text()="Complete!"]');
    this.eleCloseBtn = page.locator('(//button[text()="Close"])[2]');
  }
  public async clickStartDownloadButton() {
    const frame = this.page.mainFrame().childFrames().at(1);
    if (frame != null) {
      await frame.locator('#downloadButton').click();
    }
  }
  public async verifyCancelDownloadButton() {
    const frame = this.page.mainFrame().childFrames().at(1);
    if (frame != null) {
      await frame.locator('//button[text()="Cancel Download"]').isVisible();
    }
  }
  public async verifyComplete() {
    const frame = this.page.mainFrame().childFrames().at(1);
    if (frame != null) {
      await frame.locator('//div[text()="Complete!"]').isVisible();
    }
  }
  public async clickCloseButton() {
    const frame = this.page.mainFrame().childFrames().at(1);
    if (frame != null) {
      await frame.locator('(//button[text()="Close"])[2]').click();
    }
  }
}
