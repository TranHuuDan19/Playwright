import IFramePage from '../../page/iFrame/iFramePage.page';
import NavigationPage from '../../page/navigation/navigation.page';
import { Given, Then } from '@cucumber/cucumber';

let iFramePage: IFramePage;
let navigationPage: NavigationPage;

Given('I am at Iframe Tab page', async function () {
  const page = this.page!;
  navigationPage = new NavigationPage(page);
  await navigationPage.goToPage(
    'https://www.globalsqa.com/demo-site/frames-and-windows/#Open%20New%20Tab',
  );
});

Then('I click open new tab and verify page url', async function () {
  const page = this.page!;
  iFramePage = new IFramePage(page);
  const pagePromise = this.context.waitForEvent('page');
  await iFramePage.clickOpenNewTab(pagePromise);
});
