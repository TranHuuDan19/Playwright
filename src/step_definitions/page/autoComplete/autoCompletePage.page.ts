import { Page, Locator } from '@playwright/test';

export default class autoCompletePage {
  private page: Page;
  readonly eleSearch: Locator;
  readonly eleResultList: Locator;
  constructor(page: Page) {
    this.page = page;
    this.eleSearch = page.locator('//*[@id="search"]');
    this.eleResultList = page.locator('//*[@id="ui-id-1"]');
  }
  public async clickSearchField() {
    const frame = this.page.mainFrame().childFrames().at(1);
    if (frame != null) {
      await frame.locator('//input[@id="search"]').click();
    }
  }
  public async enterSearch(s: string) {
    const frame = this.page.mainFrame().childFrames().at(1);
    if (frame != null) {
      await frame.locator('//*[@id="search"]').fill(s);
    }
  }
  public async autoComplete(res: string, s: string) {
    const frame = this.page.mainFrame().childFrames().at(1);
    if (frame != null) {
      await frame.locator('//*[@id="search"]').fill(s);
      const expectedValue = res;
      const options = frame.locator('li.ui-menu-item div.ui-menu-item-wrapper');
      const optionsCount = await options.count();
      for (let i = 0; i < optionsCount; i++) {
        const text = await options.nth(i).textContent();
        if (text === expectedValue) {
          await options.nth(i).click();
          break;
        }
      }
    }
  }
  public async verifyResultValue(res: string) {
    const result = this.eleSearch;
    const data = await result.locator(':scope').allInnerTexts();
    await data.forEach(async (value) => {
      value.at(0)?.match(res);
    });
  }
}
