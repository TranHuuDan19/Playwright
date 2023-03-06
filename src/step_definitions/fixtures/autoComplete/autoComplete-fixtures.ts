import AutoCompletePage from '../../page/autoComplete/autoCompletePage.page';
import NavigationPage from '../../page/navigation/navigation.page';
import { Given, Then, When } from '@cucumber/cucumber';

let navigationPage: NavigationPage;
let autoCompletePage: AutoCompletePage;

Given('I am at Auto Complete page', async function () {
  const page = this.page!;
  navigationPage = new NavigationPage(page);
  await navigationPage.goToPage('https://www.globalsqa.com/demo-site/auto-complete/#Categories');
});
When('I click on search field', async function () {
  const page = this.page!;
  autoCompletePage = new AutoCompletePage(page);
  await autoCompletePage.clickSearchField();
});
Then(
  'I can auto complete {string} with input value {string}',
  async function (res: string, s: string) {
    const page = this.page!;
    autoCompletePage = new AutoCompletePage(page);
    await autoCompletePage.enterSearch(s);
    await autoCompletePage.autoComplete(res, s);
  },
);
When('I can verify value {string} of Search field', async function (res: string) {
  const page = this.page!;
  autoCompletePage = new AutoCompletePage(page);
  await autoCompletePage.verifyResultValue(res);
});
