import { Page, Locator, expect } from '@playwright/test';

export default class SearchProductPage {
  private page: Page;
  readonly btnCollapse: Locator;
  readonly btnExpand: Locator;
  readonly inpProductName: Locator;
  readonly drpCategory: Locator;
  readonly ckbSearchSubcategories: Locator;
  readonly drpManufacturer: Locator;
  readonly drpVendor: Locator;
  readonly drpWarehouse: Locator;
  readonly drpProductType: Locator;
  readonly drpPublished: Locator;
  readonly inpGoDirectlyToProductSKU: Locator;
  readonly btnGoForSearchSKU: Locator;
  readonly btnSearch: Locator;
  readonly eleProductTitle: Locator;
  readonly eleSearchForm: Locator;
  readonly tblSearchResult: Locator;
  constructor(page: Page) {
    this.page = page;
    this.btnCollapse = page.locator("//i[@class='far fa-angle-up']");
    this.btnExpand = page.locator("//i[@class='far fa-angle-down']");
    this.inpProductName = page.locator('#SearchProductName');
    this.drpCategory = page.locator('#SearchCategoryId');
    this.ckbSearchSubcategories = page.locator('#SearchIncludeSubCategories');
    this.drpManufacturer = page.locator('#SearchManufacturerId');
    this.drpVendor = page.locator('#SearchVendorId');
    this.drpWarehouse = page.locator('#SearchWarehouseId');
    this.drpProductType = page.locator('#SearchProductTypeId');
    this.drpPublished = page.locator('#SearchPublishedId');
    this.inpGoDirectlyToProductSKU = page.locator('#GoDirectlyToSku');
    this.btnGoForSearchSKU = page.locator('#go-to-product-by-sku');
    this.btnSearch = page.locator('#search-products');
    this.eleProductTitle = page.locator("//h1[text()[normalize-space()='Products']]");
    this.eleSearchForm = page.locator("//div[@class='search-body ']");
    this.tblSearchResult = page.locator("//*[@id='products-grid']/tbody/tr[1]");
  }

  async getPageObj() {
    return this.page;
  }
  public async clickCollapseButton() {
    const ele = await this.btnCollapse;
    const visible = await ele?.isVisible();
    if (visible) {
      await ele?.click();
    }
  }
  public async clickExpandButton() {
    const ele = await this.btnExpand;
    const visible = await ele?.isVisible();
    if (visible) {
      await ele?.click();
    }
  }
  public async enterProductName(productName: string) {
    const ele = await this.inpProductName;
    await ele?.fill(productName);
  }
  public async selectCategory(value: string) {
    const ele = this.drpCategory;
    await ele.selectOption({ label: value });
  }
  public async checkSearchSubcategories() {
    const ele = this.ckbSearchSubcategories;
    await ele.check();
    await this.verifyCheckboxSearchSubcategoriesAlreadyChecked();
  }
  public async verifyCheckboxSearchSubcategoriesAlreadyChecked() {
    const ele = this.ckbSearchSubcategories;
    expect(ele.isChecked()).toBeTruthy();
  }
  public async selectManufacturer(value: string) {
    const ele = this.drpManufacturer;
    await ele.selectOption({ label: value });
  }

  public async selectVendor(value: string) {
    const ele = this.drpVendor;
    await ele.selectOption({ label: value });
  }

  public async selectWarehouse(value: string) {
    const ele = this.drpWarehouse;
    await ele.selectOption({ label: value });
  }

  public async selectProductType(value: string) {
    const ele = this.drpProductType;
    await ele.selectOption({ label: value });
  }

  public async selectPublished(value: string) {
    const ele = this.drpPublished;
    await ele.selectOption({ label: value });
  }
  public async enterSKU(sku: string) {
    const ele = await this.inpGoDirectlyToProductSKU;
    await ele?.fill(sku);
  }
  public async clickSearchButton() {
    const ele = await this.btnSearch;
    await ele?.click();
  }
  public async clickGoForSearchSKUButton() {
    const ele = await this.btnGoForSearchSKU;
    await ele?.click();
  }
  public async verifyTitleOfProductPage() {
    await expect(this.eleProductTitle).toContainText('Product');
  }
  public async verifySearchFormIsShow() {
    const ele = this.eleSearchForm;
    await expect(ele).toBeVisible();
  }
  public async verifySearchFormIsHidden() {
    const ele = this.eleSearchForm;
    await expect(ele).not.toBeVisible();
  }
  public async verifySearchResultWithProductName(productName: string) {
    const searchResult = this.tblSearchResult;
    const data = await searchResult.locator(':scope').allInnerTexts();
    await data.forEach(async (value) => {
      value.at(0)?.match(productName);
    });
  }
  public async verifySearchResultNothaveData() {
    const searchResult = this.tblSearchResult;
    const data = await searchResult.locator(':scope').allInnerTexts();
    await data.at(0)?.match('No data available in table');
  }
}
