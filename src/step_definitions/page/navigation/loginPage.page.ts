import { Locator, Page } from '@playwright/test';

export default class LoginPage {
  private page: Page;
  readonly inpEmail: Locator;
  readonly inpPassword: Locator;
  readonly btnLogIn: Locator;
  constructor(page: Page) {
    this.page = page;
    this.inpEmail = page.locator('#Email');
    this.inpPassword = page.locator('#Password');
    this.btnLogIn = page.locator("//button[@class='button-1 login-button']");
  }
  public async goToPage(url: string) {
    await this.page.goto(url);
  }
  public async enterEmail(email: string) {
    const ele = this.inpEmail;
    await ele?.fill(email);
  }
  public async enterPassword(pass: string) {
    const ele = this.inpPassword;
    await ele?.fill(pass);
  }
  public async clickLogInButton() {
    const ele = this.btnLogIn;
    await ele?.click();
    await this.page.waitForLoadState();
  }
  public async loginWithEmailAndPassword(email: string, pass: string) {
    await this.enterEmail(email);
    await this.enterPassword(pass);
    await this.clickLogInButton();
  }
}
