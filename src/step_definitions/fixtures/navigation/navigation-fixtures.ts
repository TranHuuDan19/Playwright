import LoginPage from '../../page/navigation/loginPage.page';
import { Given } from '@cucumber/cucumber';
let loginPage: LoginPage;

Given('I am at Dashboard page', async function () {
  const page = this.page!;
  loginPage = new LoginPage(page);
  await loginPage.goToPage('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');
  await loginPage.clickLogInButton();
});
