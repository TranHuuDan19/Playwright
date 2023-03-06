import { Page, Locator } from '@playwright/test';
export default class DragDropPage {
  private page: Page;
  readonly eleViewImage: Locator;
  readonly eleCloseImage: Locator;
  readonly eleTrashImage: Locator;
  readonly eleRestoreImage: Locator;
  readonly eleImage: Locator;
  constructor(page: Page) {
    this.page = page;
    this.eleViewImage = page.locator('//ul[@id="gallery"]/li[1]/a[1]');
    this.eleCloseImage = page.locator('//span[@class="ui-button-icon ui-icon ui-icon-closethick"]');
    this.eleTrashImage = page.locator("(//a[@class='ui-icon ui-icon-trash'])[1]");
    this.eleRestoreImage = page.locator('//div[@id="trash"]/ul/li/a[2]');
    this.eleImage = page.locator('//img[@id="ui-id-1"]');
  }
  public async goToPage(url: string) {
    await this.page.goto(url);
    await this.page.waitForLoadState();
    await this.page.waitForTimeout(3000);
  }
  public async clickDeleteButtonOfOneImage() {
    const frame = this.page.mainFrame().childFrames().at(1);
    if (frame != null) {
      await frame.locator("(//a[@class='ui-icon ui-icon-trash'])[1]").click();
    }
  }
  public async clickRestoreOfOneImage() {
    const frame = this.page.mainFrame().childFrames().at(1);
    if (frame != null) {
      await frame.locator("//a[@class='ui-icon ui-icon-refresh']").click();
    }
  }
  public async moveImageToTrashByDragAndDrop() {
    const frame = this.page.mainFrame().childFrames().at(1);
    if (frame != null) {
      await frame
        .locator("//img[@alt='The peaks of High Tatras']")
        .dragTo(frame.locator("//div[contains(@class,'ui-widget-content ui-state-default')]"));
    }
  }
}
