import LeftSideBar from '../../page/navigation/leftSideBarPage.page';
// import SearchProductPage from '../../page/search/searchPage.page';
import EditProductPage from '../../page/edit/editPage.page';
import { Then, When } from '@cucumber/cucumber';

let leftSideBar: LeftSideBar;
let editPage: EditProductPage;

When('I am at Edit Product page', async function () {
  const page = this.page!;
  leftSideBar = new LeftSideBar(page);
  await leftSideBar.selectProductInCatalog();
});

Then('I can click Edit button to edit Product details.', async function () {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.clickEditBtn();
});
When('I can verify Setting button is visible', async function () {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.verifySettingsBtn();
});
When('I can verify Save button is visible', async function () {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.verifySaveBtn();
});
When('I can verify Save and Continue Edit button is visible', async function () {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.verifySaveandContinueBtn();
});
When('I can verify Copy product button is visible', async function () {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.verifyCopyProductBtn();
});

When('I can enter {string} in Product Name field', async function (pN: string) {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.enterProductName(pN);
});
Then('I can verify value of {string} in Product Name field', async function (pN: string) {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.verifyProductName(pN);
});
When('I can enter {string} in Short Description field', async function (sDes: string) {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.enterShortDes(sDes);
});
Then('I can verify value of {string} in Short Description field', async function (sDes: string) {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.verifyShortDes(sDes);
});
When('I can enter {string} in SKU field', async function (SKU: string) {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.enterSKU(SKU);
});
Then('I can verify value of {string} in SKU field', async function (SKU: string) {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.verifySKU(SKU);
});

When('I can enter {string} in Prices field', async function (price: string) {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.enterPrice(price);
});
Then('I can verify value of {string} in Prices field', async function (price: string) {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.verifyPrice(price);
});
When('I can enter {string} in Tax Category field', async function (taxCate: string) {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.selectTaxCategory(taxCate);
});
Then('I can verify value of {string} in Tax Category field', async function (taxCate: string) {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.verifyTaxCategory(taxCate);
});

When('I can enter {string} in Weight field', async function (weight: string) {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.enterWeight(weight);
});
Then('I can verify value of {string} in Weight field', async function (weight: string) {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.verifyWeight(weight);
});
When('I can enter {string} in Length field', async function (length: string) {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.enterLength(length);
});
Then('I can verify value of {string} in Length field', async function (length: string) {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.verifyLength(length);
});
When('I can enter {string} in Width field', async function (width: string) {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.enterWidth(width);
});
Then('I can verify value of {string} in Width field', async function (width: string) {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.verifyWidth(width);
});
When('I can enter {string} in Height field', async function (height: string) {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.enterHeight(height);
});
Then('I can verify value of {string} in Height field', async function (height: string) {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.verifyHeight(height);
});
//TC5
When('I can change the values of fields or upload the picture on Multimedia', async function () {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.inventorMethod();
  await editPage.selectInventory();
});
Then('I can change value of Quantity', async function () {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.stockQuantity();
});

Then('I can see value of fields or upload the picture on Multimedia', async function () {
  const page = this.page!;
  editPage = new EditProductPage(page);
  const a = 'Track inventory';
  await editPage.verifyOptionInventory(a);
});
//TC6
Then('I can click edit value on Multimedia', async function () {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.clickEditPicture();
});

When('I can change {string} of DisplayOrder', async function (b: string) {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.clickDisplayOrder(b);
});

Then('I can see {string} in DisplayOrder', async function (b: string) {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.verifyDisplayOrder(b);
});

When('I input {string} into DisplayAlt', async function (a: string) {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.inputDisplayAlt(a);
});

Then('I can change {string} of Title', async function (Title: string) {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.enterTitle(Title);
});

When('I can see {string} in the Title', async function (Title: string) {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.verifyTitle(Title);
});

Then('I can update all change of DisplayOrder , DisplayAlt , Title', async function () {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.enterUpdate();
});

Then('I can change {string} of Product Name', async function (abc: string) {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.inputProductName(abc);
});

When('I can click Save', async function () {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.clickSave();
});

Then('I can change {string} of input Product Name', async function (abc: string) {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.inputName(abc);
});

Then('I can click Search Product', async function () {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.searchProduct();
});

Then('I can see {string} in Product Name Title', async function (abc: string) {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.verifyProductNameTitle(abc);
});

Then('I can see value of Sku ', async function (a: string) {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.verifySku07(a);
});

Then('I can see value of Price ', async function (b: string) {
  const page = this.page!;
  editPage = new EditProductPage(page);
  await editPage.verifyPrice07(b);
});
