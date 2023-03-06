import NavigationPage from '../../page/navigation/navigation.page';
import DialogPage from '../../page/dialog/dialogPage.page';
import { Given, Then, When } from '@cucumber/cucumber';

let navigationPage: NavigationPage;
let dialogBoxPage: DialogPage;

Given('I am at Dialog Boxes page', async function () {
  const page = this.page!;
  navigationPage = new NavigationPage(page);
  await navigationPage.goToPage('https://www.globalsqa.com/demo-site/dialog-boxes/');
});
When('I click on Create new user button', async function () {
  const page = this.page!;
  dialogBoxPage = new DialogPage(page);
  await dialogBoxPage.clickCreateUserBtn();
});
Then('I can input {string} in Name field', async function (name: string) {
  const page = this.page!;
  dialogBoxPage = new DialogPage(page);
  await dialogBoxPage.enterName(name);
});
When('I can verify value {string} of Name field', async function (name: string) {
  const page = this.page!;
  dialogBoxPage = new DialogPage(page);
  await dialogBoxPage.verifyName(name);
});
Then('I can input {string} in Email field', async function (email: string) {
  const page = this.page!;
  dialogBoxPage = new DialogPage(page);
  await dialogBoxPage.enterEmail(email);
});
When('I can verify value {string} of Email field', async function (email: string) {
  const page = this.page!;
  dialogBoxPage = new DialogPage(page);
  await dialogBoxPage.verifyEmail(email);
});
Then('I can input {string} in Password field', async function (pw: string) {
  const page = this.page!;
  dialogBoxPage = new DialogPage(page);
  await dialogBoxPage.enterPassword(pw);
});
When('I can verify value {string} of Password field', async function (pw: string) {
  const page = this.page!;
  dialogBoxPage = new DialogPage(page);
  await dialogBoxPage.verifyPassword(pw);
});
Then('I can click Create an account button', async function () {
  const page = this.page!;
  dialogBoxPage = new DialogPage(page);
  await dialogBoxPage.clickCreateAcctBtn();
});
When(
  'I can verify user {string} , {string} and {string} of table',
  async function (name: string, email: string, pw: string) {
    const page = this.page!;
    dialogBoxPage = new DialogPage(page);
    await dialogBoxPage.verifyUserAlreadyAdded(name, email, pw);
  },
);
