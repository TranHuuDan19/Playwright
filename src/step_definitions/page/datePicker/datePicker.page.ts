import { Page, Locator } from '@playwright/test';
import moment from 'moment';
export default class DatePickerPage {
  private page: Page;
  readonly eleDate: Locator;
  constructor(page: Page) {
    this.page = page;
    this.eleDate = page.locator('#datepicker.hasDatepicker');
  }
  async getObj() {
    return this.page;
  }
  public async clickDatePicker() {
    const frame = this.page.mainFrame().childFrames().at(1);
    if (frame != null) {
      if (await frame.locator('#datepicker.hasDatepicker').isVisible())
        await frame.locator('#datepicker.hasDatepicker').click();
    }
  }
  public async enterDate(date: string) {
    const frame = this.page.mainFrame().childFrames().at(1);
    if (frame != null) {
      await frame.locator('#datepicker.hasDatepicker').fill(date);
    }
  }
  public async verifyDate(date: string) {
    const frame = this.page.mainFrame().childFrames().at(1);
    if (frame != null) {
      const result = await frame.locator('#datepicker.hasDatepicker');
      const data = await result.locator(':scope').allInnerTexts();
      await data.forEach(async (value) => {
        value.at(0)?.match(date);
      });
    }
  }
  public async selectDateFromDatePicker(date: string, month: string, year: string) {
    const frame = this.page.mainFrame().childFrames().at(1);
    if (frame != null) {
      const monthLocator = frame.locator("//div[@class='ui-datepicker-title']//span[1]");
      const yearLocator = frame.locator(
        "//span[@class='ui-datepicker-month']/following-sibling::span[1]",
      );
      const prev = frame.locator("//span[text()='Prev']");
      const next = frame.locator("//span[text()='Next']");
      const monthYear = month + ' ' + year;
      const currentMonthAndYear = moment(monthYear).isSame(moment().format('MMMM YYYY'));
      const flag = await moment(monthYear).isBefore(moment().format('MMMM YYYY'));
      if (currentMonthAndYear) {
        await frame.click(`//a[text()='${date}']`);
      } else {
        while (
          !(
            (await monthLocator.allInnerTexts()).at(0)?.toString() == month &&
            (await yearLocator.allInnerTexts()).at(0)?.toString() == year
          )
        ) {
          if (flag) await prev.click();
          else await next.click();
        }
        await frame.click(`//a[text()='${date}']`);
      }
    }
  }
}
