import { Page } from '@playwright/test';
export default class SliderPage {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  public async moveSlider(position: number) {
    const frame = this.page.mainFrame().childFrames().at(1);
    if (frame != null) {
      await frame.waitForSelector("(//div[contains(@class,'ui-slider ui-corner-all')])[1]");
      const s = await frame.$("(//div[contains(@class,'ui-slider ui-corner-all')])[1]");
      let isComplete = false;
      if (s) {
        while (!isComplete) {
          const srcBound = await s.boundingBox();
          if (srcBound) {
            let i = 0;
            const percent = srcBound.width / 100;
            for (let widthUp = 0; widthUp <= srcBound.width; widthUp += percent) {
              await this.page.mouse.move(srcBound.x + widthUp, srcBound.y + srcBound.height / 2);
              await this.page.mouse.down();
              await this.page.mouse.up();
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              i++;
              if (i == position + 1) {
                isComplete = true;
                break;
              }
            }
          }
        }
      }
      await frame.waitForTimeout(50);
    }
  }
}
