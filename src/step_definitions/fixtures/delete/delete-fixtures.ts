import DeleteProductPage from '../../page/delete/deletePage.page';
import { Then, When } from '@cucumber/cucumber';

let deletePage: DeleteProductPage;

When(/^I click check box on first record$/, async function () {
  const page = this.page!;
  deletePage = new DeleteProductPage(page);
  await deletePage.selectOneRecord();
});
When(/^I click delete button$/, async function () {
  const page = this.page!;
  deletePage = new DeleteProductPage(page);
  await deletePage.clickDeleteButton();
});
When(/^I click yes button on a popup "Are you sure"$/, async function () {
  const page = this.page!;
  deletePage = new DeleteProductPage(page);
  await deletePage.clickYesButton();
});
//Ac2

When(/^I click check box All on header of table$/, async function () {
  const page = this.page!;
  deletePage = new DeleteProductPage(page);
  await deletePage.selectAll();
});
When(/^I click the delete button$/, async function () {
  const page = this.page!;
  deletePage = new DeleteProductPage(page);
  await deletePage.clickDeleteButton();
});

//AC3

When(/^I not select any record and click delete button$/, async function () {
  const page = this.page!;
  deletePage = new DeleteProductPage(page);
  await deletePage.clickDeleteButton();
});
Then(/^I see the message error display$/, async function () {
  const page = this.page!;
  deletePage = new DeleteProductPage(page);
  await deletePage.verifyErrorDisplay();
});
