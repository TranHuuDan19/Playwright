import ProgressBarPage from '../../page/progressBar/progressBarPage.page';
import NavigationPage from '../../page/navigation/navigation.page';
import { Given, Then, When } from '@cucumber/cucumber';

let navigationPage: NavigationPage;
let progressBarPage: ProgressBarPage;

Given('I am at Progress Bar page', async function () {
  const page = this.page!;
  navigationPage = new NavigationPage(page);
  await navigationPage.goToPage('https://www.globalsqa.com/demo-site/progress-bar/');
});
When('I click on Start Download button', async function () {
  const page = this.page!;
  progressBarPage = new ProgressBarPage(page);
  await progressBarPage.clickStartDownloadButton();
});
Then('I can see Cancel Download button is available', async function () {
  const page = this.page!;
  progressBarPage = new ProgressBarPage(page);
  await progressBarPage.verifyCancelDownloadButton();
});
When('I see Complete! on pop up', async function () {
  const page = this.page!;
  progressBarPage = new ProgressBarPage(page);
  await progressBarPage.verifyComplete();
});
Then('I can click Close button.', async function () {
  const page = this.page!;
  progressBarPage = new ProgressBarPage(page);
  await progressBarPage.clickCloseButton();
});
