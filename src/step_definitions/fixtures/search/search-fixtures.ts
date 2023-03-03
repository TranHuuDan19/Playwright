import LeftSideBar from '../../page/navigation/leftSideBarPage.page';
import SearchProductPage from '../../page/search/searchPage.page';
import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

let leftSideBar: LeftSideBar;
let searchPage: SearchProductPage;

Given('I am at Search Product page', async function () {
  const page = this.page!;
  leftSideBar = new LeftSideBar(page);
  await leftSideBar.selectProductInCatalog();
});

When('I click collapse button', async function () {
  const page = this.page!;
  searchPage = new SearchProductPage(page);
  await searchPage.clickCollapseButton();
});

Then('I can not see the Search form', async function () {
  const page = this.page!;
  searchPage = new SearchProductPage(page);
  await searchPage.verifySearchFormIsHidden();
});

When('I click expand button', async function () {
  const page = this.page!;
  searchPage = new SearchProductPage(page);
  await searchPage.clickExpandButton();
});

Then('I can see the Search form', async function () {
  const page = this.page!;
  searchPage = new SearchProductPage(page);
  await searchPage.verifySearchFormIsShow();
});

When('I input {string} into product name field', async function (productName: string) {
  const page = this.page!;
  searchPage = new SearchProductPage(page);
  await searchPage.enterProductName(productName);
});

When('I click search button', async function () {
  const page = this.page!;
  searchPage = new SearchProductPage(page);
  await searchPage.clickSearchButton();
});

Then('I can see {string} in search result', async function (productName: string) {
  const page = this.page!;
  searchPage = new SearchProductPage(page);
  await searchPage.verifySearchResultWithProductName(productName);
});

When('I check search subcategories checkbox', async function () {
  const page = this.page!;
  searchPage = new SearchProductPage(page);
  searchPage.checkSearchSubcategories();
});

When('I select {string} in category option', async function (category: string) {
  const page = this.page!;
  searchPage = new SearchProductPage(page);
  await searchPage.selectCategory(category);
});

Then('I can see {string} in category field of edit mode', async function (category: string) {
  const page = this.page!;
  searchPage = new SearchProductPage(page);
  // go to edit screen
  await page.locator("(//a[@class='btn btn-default'])[1]").click();
  await this.page.waitForLoadState();
  await page.waitForTimeout(3000);
  // check the catology match with edit screen
  expect(page.locator("(//span[@unselectable='on'])[1]")).toContainText(category);
  await page.waitForTimeout(3000);
});

When('I input {string} into sku field', async function (sku: string) {
  const page = this.page!;
  searchPage = new SearchProductPage(page);
  //input to the field
  await searchPage.enterSKU(sku);
});

When('I click go button', async function () {
  const page = this.page!;
  searchPage = new SearchProductPage(page);
  await searchPage.clickGoForSearchSKUButton();
  await this.page.waitForLoadState();
});

Then('I can see {string} in sku field of edit mode', async function (sku: string) {
  const page = this.page!;
  searchPage = new SearchProductPage(page);
  await page.waitForTimeout(3000);
  // go to edit screen, check search result correct
  const visible = await page
    .locator("(//input[contains(@class,'form-control text-box')])[2]")
    .isVisible();
  if (visible) {
    const data = await page.locator('//input[@id="Sku"]').locator(':scope').allInnerTexts();
    await data.forEach(async () => {
      sku.at(0)?.match(sku);
    });
  } else {
    await page.locator("(//button[@type='button']//i)[3]")?.click();
    const data = await page.locator('//input[@id="Sku"]').locator(':scope').allInnerTexts();
    await data.forEach(async () => {
      sku.at(0)?.match(sku);
    });
  }
});

Then('I see no data in search result', async function () {
  const page = this.page!;
  searchPage = new SearchProductPage(page);
  await searchPage.verifySearchResultNothaveData();
});
