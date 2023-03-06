import { Page, Locator } from '@playwright/test';

export default class dialogPage {
  private page: Page;
  readonly eleCreateUserBtn: Locator;
  readonly eleName: Locator;
  readonly eleEmail: Locator;
  readonly elePassword: Locator;
  readonly eleCreateAcctBtn: Locator;
  readonly eleExistingUser: Locator;
  constructor(page: Page) {
    this.page = page;
    this.eleCreateUserBtn = page.locator('//button[@id="create-user"]');
    this.eleName = page.locator('//input[@id="name"]');
    this.eleEmail = page.locator('//input[@id="email"]');
    this.elePassword = page.locator('//input[@id="password"]');
    this.eleCreateAcctBtn = page.locator('//button[text()="Create an account"]');
    this.eleExistingUser = page.locator('//table[@id="users"]');
  }
  public async clickCreateUserBtn() {
    const frame = this.page.mainFrame().childFrames().at(1);
    if (frame != null) {
      await frame.locator('//button[@id="create-user"]').click();
    }
  }
  public async enterName(name: string) {
    const frame = this.page.mainFrame().childFrames().at(1);
    if (frame != null) {
      await frame.locator('//input[@id="name"]').fill(name);
    }
  }
  public async verifyName(name: string) {
    const result = this.eleName;
    const data = await result.locator(':scope').allInnerTexts();
    await data.forEach(async (value) => {
      value.at(0)?.match(name);
    });
  }
  public async enterEmail(email: string) {
    const frame = this.page.mainFrame().childFrames().at(1);
    if (frame != null) {
      await frame.locator('//input[@id="email"]').fill(email);
    }
  }
  public async verifyEmail(email: string) {
    const result = this.eleEmail;
    const data = await result.locator(':scope').allInnerTexts();
    await data.forEach(async (value) => {
      value.at(0)?.match(email);
    });
  }
  public async enterPassword(password: string) {
    const frame = this.page.mainFrame().childFrames().at(1);
    if (frame != null) {
      await frame.locator('//input[@id="password"]').fill(password);
    }
  }
  public async verifyPassword(password: string) {
    const result = this.elePassword;
    const data = await result.locator(':scope').allInnerTexts();
    await data.forEach(async (value) => {
      value.at(0)?.match(password);
    });
  }
  public async clickCreateAcctBtn() {
    const frame = this.page.mainFrame().childFrames().at(1);
    if (frame != null) {
      await frame.locator('//button[text()="Create an account"]').click();
    }
  }
  public async verifyUserAlreadyAdded(name: string, email: string, password: string) {
    const result = this.eleExistingUser;
    const data = await result.locator(':scope').allInnerTexts();
    await data.forEach(async (value) => {
      value.at(0)?.match(name);
      value.at(0)?.match(email);
      value.at(0)?.match(password);
    });
  }
}
