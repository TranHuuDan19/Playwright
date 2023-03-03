import LeftSideBar from '../../page/navigation/leftSideBarPage.page';
import AddProductPage from '../../page/add/addPage.page';
import { Then, When } from '@cucumber/cucumber';

let leftSideBar: LeftSideBar;
let addProductPage: AddProductPage;

When('I click on Product to Product Page', async function () {
  const page = this.page!;
  leftSideBar = new LeftSideBar(page);
  await leftSideBar.selectProductInCatalog();
});

Then('I click on Add new button', async function () {
  const page = this.page!;
  addProductPage = new AddProductPage(page);
  await addProductPage.clickBtn(addProductPage.eleAddNewBtn);
  //await addProductPage.clickAddNewBtn();
});

When('I verify that Setting button is visible', async function () {
  const page = this.page!;
  addProductPage = new AddProductPage(page);
  await addProductPage.verifyVisible(addProductPage.eleSettingBtn);
});

Then('I verify that Save button is visible', async function () {
  const page = this.page!;
  addProductPage = new AddProductPage(page);
  await addProductPage.verifyVisible(addProductPage.eleSaveBtn);
});
When('I verify that Save and Continue Edit button is visible', async function () {
  const page = this.page!;
  addProductPage = new AddProductPage(page);
  await addProductPage.verifyVisible(addProductPage.eleSaveandCont);
});
Then('I verify that Toggle is visible', async function () {
  const page = this.page!;
  addProductPage = new AddProductPage(page);
  await addProductPage.verifyVisible(addProductPage.eleToggle);
});
When('I click on the Advance button', async function () {
  const page = this.page!;
  addProductPage = new AddProductPage(page);
  await addProductPage.clickBtn(addProductPage.eleToggle);
});
When('I input all values on Create Page', async function () {
  const page = this.page!;
  addProductPage = new AddProductPage(page);
  //verify Product Info plus or minus
  const test = await page.locator('div#product-info').getAttribute('class');
  if (test?.toString() == 'card card-secondary card-outline collapsed-card') {
    await addProductPage.clickBtn(addProductPage.elePlusProd);
  }
  // Product info
  await addProductPage.inputText('prodname789789', addProductPage.eleProdNameText);
  await addProductPage.inputText(
    'account testing add new product',
    addProductPage.eleShortDescText,
  );
  await addProductPage.inputText('sku789789', addProductPage.eleSKUText);
  //save
  await addProductPage.clickBtn(addProductPage.eleSaveBtn);
  //verify success notification
});
Then('I verify that green notification visible', async function () {
  const page = this.page!;
  addProductPage = new AddProductPage(page);
  await addProductPage.verifyVisible(addProductPage.eleSuccessnoti);
});
