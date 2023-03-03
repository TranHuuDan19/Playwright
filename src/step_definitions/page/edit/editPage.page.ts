import { Page, Locator, expect } from '@playwright/test';

export default class EditProductPage {
  private page: Page;
  readonly eleProductTitle: Locator;
  readonly eleEditProduct: Locator;
  //button
  readonly eleSaveBtn: Locator;
  readonly eleSaveandContinueBtn: Locator;
  readonly eleCopyProductBtn: Locator;
  readonly eleSettingsBtn: Locator;
  //product
  readonly eleProductInfo: Locator;
  readonly eleProductName: Locator;
  readonly eleShortDes: Locator;
  readonly eleFullDes: Locator;
  readonly eleSKU: Locator;
  readonly eleCategoriesDrp: Locator;
  readonly eleOptionCategories: Locator;
  readonly eleCloseCategories: Locator;
  //Prices
  readonly elePrices: Locator;
  readonly eleInputPrice: Locator;
  readonly eleIncreasePrice: Locator; //click
  readonly eleDecreasePrice: Locator; //click
  readonly eleCheckTaxexmpt: Locator;
  readonly eleTaxCategory: Locator;
  readonly eleOptionTaxCategoryNone: Locator;
  readonly eleOptionTaxCategory1: Locator;
  readonly eleOptionTaxCategory2: Locator;
  readonly eleOptionTaxCategory3: Locator;
  readonly eleOptionTaxCategory4: Locator;
  readonly eleOptionTaxCategory5: Locator;
  //Shipping
  readonly eleShipping: Locator;
  readonly eleCheckShipEnabled: Locator;
  readonly eleInputWeight: Locator;
  readonly eleIncreaseWeight: Locator;
  readonly eleDecreaseWeight: Locator;
  readonly eleInputLength: Locator;
  readonly eleIncreaseLength: Locator;
  readonly eleDecreaseLength: Locator;
  readonly eleInputWidth: Locator;
  readonly eleIncreaseWidth: Locator;
  readonly eleDecreaseWidth: Locator;
  readonly eleInputHeight: Locator;
  readonly eleIncreaseHeight: Locator;
  readonly eleDecreaseHeight: Locator;
  //Inventory
  readonly eleInventory: Locator;
  readonly eleInventoryMethod: Locator;
  readonly eleOptionInventoryMethod: Locator;
  readonly eleStockQuantity: Locator;
  readonly IncreaseQuantity: Locator;
  readonly DecreaseQuantity: Locator;
  readonly Basic: Locator;
  //Multimedia
  readonly elePictures: Locator;
  readonly eleVideos: Locator;
  readonly eleEdit: Locator;
  readonly eleDisplayOrderInput: Locator;
  readonly eleDisplayAltInput: Locator;
  readonly eleTitle: Locator;
  readonly eleUpdate: Locator;
  readonly eleCancel: Locator;
  readonly eleDelete: Locator;
  readonly Paginate: Locator;
  readonly OptionPaginate: Locator;
  readonly UploadFiles: Locator;
  //save
  readonly ProductName: Locator;
  readonly Save: Locator;
  readonly inpProductName: Locator;
  readonly btnGSearch: Locator;
  readonly ImageInput: Locator;
  readonly Publish: Locator;
  readonly ProductName07: Locator;
  readonly Price07: Locator;
  readonly Sku07: Locator;

  constructor(page: Page) {
    this.page = page;
    //button
    this.eleSaveBtn = page.locator('(//button[@class="btn btn-primary"])[1]');
    this.eleSaveandContinueBtn = page.locator(
      '//button[text()[normalize-space()="Save and Continue Edit"]]',
    );
    this.eleCopyProductBtn = page.locator('//button[@class="btn bg-olive"]');
    this.eleSettingsBtn = page.locator('//button[text()[normalize-space()="Settings"]]');
    //product
    this.eleProductTitle = page.locator("//h1[text()[normalize-space()='Products']]");
    this.eleEditProduct = page.locator('(//a[@class="btn btn-default"])[1]');
    this.eleProductInfo = page.locator('//div[@id="product-info"]/div[1]/div[1]');
    this.eleProductName = page.locator('//input[@id="Name"]');
    this.eleShortDes = page.locator('//textarea[@id="ShortDescription"]');
    this.eleFullDes = page.locator('//*[@id="tinymce"]');
    this.eleSKU = page.locator('//input[@id="Sku"]');
    this.eleCategoriesDrp = page.locator('//div[@class="k-multiselect-wrap k-floatwrap"])[1]');
    this.eleOptionCategories = page.locator('//ul[@id="SelectedCategoryIds_listbox"]/li[1]');
    this.eleCloseCategories = page.locator('//ul[@id="SelectedCategoryIds_taglist"]/li[2]/span[2]');
    //prices
    this.elePrices = page.locator('//div[@id="product-price"]/div[1]/div[1]');
    this.eleInputPrice = page.locator(
      '//div[@id="product-price-area"]/div[2]/span[1]/span/input[1]',
    );
    this.eleIncreasePrice = page.locator(
      '//div[@id="product-price-area"]/div[2]/span[1]/span/span[2]/span[1]/span',
    );
    this.eleDecreasePrice = page.locator(
      '//div[@id="product-price-area"]/div[2]/span[1]/span/span[2]/span[2]/span',
    );
    this.eleCheckTaxexmpt = page.locator('//input[@id="IsTaxExempt"]');
    this.eleTaxCategory = page.locator('//select[@id="TaxCategoryId"]');
    this.eleOptionTaxCategoryNone = page.locator('//select[@id="TaxCategoryId"]/option[1]');
    this.eleOptionTaxCategory1 = page.locator('//select[@id="TaxCategoryId"]/option[2]');
    this.eleOptionTaxCategory2 = page.locator('//select[@id="TaxCategoryId"]/option[3]');
    this.eleOptionTaxCategory3 = page.locator('//select[@id="TaxCategoryId"]/option[4]');
    this.eleOptionTaxCategory4 = page.locator('//select[@id="TaxCategoryId"]/option[5]');
    this.eleOptionTaxCategory5 = page.locator('//select[@id="TaxCategoryId"]/option[6]');
    //Shipping
    this.eleShipping = page.locator('//div[@id="product-shipping"]/div[1]');
    this.eleCheckShipEnabled = page.locator('//input[@id="IsShipEnabled"]');
    this.eleInputWeight = page.locator(
      '//input[@data-val-number="The field Weight must be a number."]',
    );
    this.eleIncreaseWeight = page.locator(
      '//div[@id="nestedSetting762845383"]/div[1]/div[2]/span[1]/span/span[2]/span[1]/span',
    );
    this.eleDecreaseWeight = page.locator(
      '//div[@id="nestedSetting762845383"]/div[1]/div[2]/span[1]/span/span[2]/span[2]/span',
    );
    this.eleInputLength = page.locator('//*[@id="Length"]');
    this.eleIncreaseLength = page.locator(
      '//div[@id="nestedSetting762845383"]/div[2]/div[2]/span[1]/span/span[2]/span[1]/span',
    );
    this.eleDecreaseLength = page.locator(
      '//div[@id="nestedSetting762845383"]/div[2]/div[2]/span[1]/span/span[2]/span[2]/span',
    );
    this.eleInputWidth = page.locator('//*[@id="Width"]');
    this.eleIncreaseWidth = page.locator(
      '//div[@id="nestedSetting762845383"]/div[3]/div[2]/span[1]/span/span[2]/span[1]/span',
    );
    this.eleDecreaseWidth = page.locator(
      '//div[@id="nestedSetting762845383"]/div[3]/div[2]/span[1]/span/span[2]/span[2]/span',
    );
    this.eleInputHeight = page.locator(
      '//input[@data-val-number="The field Height must be a number."]',
    );
    this.eleIncreaseHeight = page.locator(
      '//div[@id="nestedSetting762845383"]/div[4]/div[2]/span[1]/span/span[2]/span[1]/span',
    );
    this.eleDecreaseHeight = page.locator(
      '//div[@id="nestedSetting762845383"]/div[4]/div[2]/span[1]/span/span[2]/span[2]',
    );
    //Inventory
    this.eleInventory = page.locator('//div[@id="product-inventory"]/div[1]/div[1]');
    this.eleInventoryMethod = page.locator('//select[@id="ManageInventoryMethodId"]');
    this.eleOptionInventoryMethod = page.locator('//select[@id="ManageInventoryMethodId"]');
    this.eleStockQuantity = page.locator(
      '//div[@id="pnlStockQuantity"]/div[2]/span[1]/span/input[1]',
    );
    this.IncreaseQuantity = page.locator(
      '//div[@id="pnlStockQuantity"]/div[2]/span[1]/span/span[2]/span[1]/span',
    );
    this.DecreaseQuantity = page.locator(
      '//div[@id="pnlStockQuantity"]/div[2]/span[1]/span/span[2]/span[2]/span',
    );
    this.Basic = page.locator(
      '//form[@id="product-form"]/section/div/div/div/div/div/div/div/div/label/span[1]',
    );
    // Multimedia
    this.elePictures = page.locator(
      '//div[@class="card-header p-0 pt-1 border-bottom-0"]/ul[@id="custom-content-above-tab"]/li[1]/a[@href="#tab-pictures"]',
    );
    this.eleVideos = page.locator(
      '//ul[@id="custom-content-above-tab"]/li[2]/a[@href="#tab-videos"]',
    );
    this.eleEdit = page.locator('//a[@id="buttonEdit_productpictures_grid1"]');
    this.eleDisplayOrderInput = page.locator(
      '//table[@id="productpictures-grid"]/tbody/tr[1]/td[2]/input',
    );
    this.eleDisplayAltInput = page.locator(
      '//table[@id="productpictures-grid"]/tbody/tr[1]/td[3]/input',
    );
    this.eleTitle = page.locator('//table[@id="productpictures-grid"]/tbody/tr[1]/td[4]/input');
    this.eleUpdate = page.locator('//a[@id="buttonConfirm_productpictures_grid1"]');
    this.eleCancel = page.locator('//a[@id="buttonCancel_productpictures_grid1"]');
    this.eleDelete = page.locator('//table[@id="productpictures-grid"]/tbody/tr[1]/td[6]/a');
    this.Paginate = page.locator('//div[@id="productpictures-grid_length"]/label/select');
    this.OptionPaginate = page.locator(
      '//div[@id="productpictures-grid_length"]/label/select/option[2]',
    );
    this.UploadFiles = page.locator('//div[@id="picture39482881"]/div/div/div[2]/input');
    // save
    this.ProductName = page.locator('//input[@id="Name"]');
    this.Save = page.locator('//form[@id="product-form"]/div[1]/div/button[1]');
    this.inpProductName = page.locator('//input[@id="SearchProductName"]');
    this.btnGSearch = page.locator('//button[@id="search-products"]');
    this.ImageInput = page.locator('//table[@id="products-grid"]/tbody/tr[1]/td[2]');
    this.Publish = page.locator('//table[@id="products-grid"]/tbody/tr[1]/td[7]');
    this.ProductName07 = page.locator('//table[@id="products-grid"]/tbody/tr[1]/td[3]');
    this.Sku07 = page.locator('//table[@id="products-grid"]/tbody/tr[1]/td[4]');
    this.Price07 = page.locator('//table[@id="products-grid"]/tbody/tr[1]/td[5]');
  }
  public async verifyTitleOfProductPage() {
    expect(this.eleProductTitle).toContainText('Product');
  }
  public async clickEditBtn() {
    await this.eleEditProduct.click();
  }
  public async clickSaveBtn() {
    await this.eleSaveBtn.click();
  }
  public async verifySaveBtn() {
    expect(await this.eleSaveBtn.isVisible());
  }
  public async verifySaveandContinueBtn() {
    expect(await this.eleSaveandContinueBtn.isVisible());
  }
  public async verifySettingsBtn() {
    expect(await this.eleSettingsBtn.isVisible());
  }
  public async verifyCopyProductBtn() {
    expect(await this.eleCopyProductBtn.isVisible());
  }
  public async verifyClickEditBtnAction() {
    await this.clickEditBtn();
    await this.verifySaveBtn();
    await this.verifySaveandContinueBtn();
    await this.verifyCopyProductBtn();
    await this.verifySettingsBtn();
  }
  public async enterProductName(productName: string) {
    const ele = await this.eleProductName;
    await ele.waitFor();
    await ele.fill(productName);
  }
  public async verifyProductName(productName: string) {
    const result = this.eleProductName;
    const data = await result.locator(':scope').allInnerTexts();
    await data.forEach(async (value) => {
      value.at(0)?.match(productName);
    });
  }
  public async enterShortDes(des: string) {
    const ele = await this.eleShortDes;
    await ele?.waitFor();
    await ele?.fill(des);
  }
  public async verifyShortDes(des: string) {
    const result = this.eleShortDes;
    const data = await result.locator(':scope').allInnerTexts();
    await data.forEach(async (value) => {
      value.at(0)?.match(des);
    });
  }
  public async enterFullDes(des: string) {
    const ele = await this.eleFullDes;
    await ele?.waitFor();
    await ele?.fill(des);
  }
  public async verifyFullDes(des: string) {
    const result = this.eleFullDes;
    const data = await result.locator(':scope').allInnerTexts();
    await data.forEach(async (value) => {
      value.at(0)?.match(des);
    });
  }
  public async enterSKU(value: string) {
    const ele = await this.eleSKU;
    await ele?.waitFor();
    await ele?.fill(value);
  }
  public async verifySKU(sku: string) {
    const result = this.eleSKU;
    const data = await result.locator(':scope').allInnerTexts();
    await data.forEach(async (value) => {
      value.at(0)?.match(sku);
    });
  }
  public async selectCategories(value: string) {
    const ele = this.eleCategoriesDrp;
    await ele?.click();
    await ele?.getByRole('listbox', { name: value }).click();
  }
  public async verifyCategories(cate: string) {
    const result = this.eleCategoriesDrp;
    const data = await result.locator(':scope').allInnerTexts();
    await data.forEach(async (value) => {
      value.at(0)?.match(cate);
    });
  }
  public async enterPrice(price: string) {
    const ele = await this.eleInputPrice;
    // await ele?.waitFor();
    await ele?.fill(price);
  }
  public async verifyPrice(price: string) {
    const result = this.elePrices;
    const data = await result.locator(':scope').allInnerTexts();
    await data.forEach(async (value) => {
      value.at(0)?.match(price);
    });
  }
  public async selectTaxCategory(value: string) {
    const ele = this.eleTaxCategory;
    await ele?.waitFor();
    await ele.selectOption(value);
  }
  public async verifyTaxCategory(taxCate: string) {
    const result = this.eleTaxCategory;
    const data = await result.locator(':scope').allInnerTexts();
    await data.forEach(async (value) => {
      value.at(0)?.match(taxCate);
    });
  }
  public async clickShipEnabled() {
    const ele = await this.eleCheckShipEnabled;
    await ele?.click();
  }
  public async verifyShipEnabled() {
    expect(await this.eleCheckShipEnabled.click()).toBeTruthy();
  }
  public async enterWeight(Weight: string) {
    const ele = await this.eleInputWeight;

    await ele?.type(Weight);
  }
  public async verifyWeight(Weight: string) {
    const result = this.eleInputWeight;
    const data = await result.locator(':scope').allInnerTexts();
    await data.forEach(async (value) => {
      value.at(0)?.match(Weight);
    });
  }
  public async enterLength(Length: string) {
    const ele = await this.eleInputLength;

    await ele?.type(Length);
  }
  public async verifyHeight(Height: string) {
    const result = this.eleInputHeight;
    const data = await result.locator(':scope').allInnerTexts();
    await data.forEach(async (value) => {
      value.at(0)?.match(Height);
    });
  }
  public async enterWidth(Width: string) {
    const ele = await this.eleInputWidth;

    await ele?.type(Width);
  }
  public async verifyLength(Length: string) {
    const result = this.eleInputLength;
    const data = await result.locator(':scope').allInnerTexts();
    await data.forEach(async (value) => {
      value.at(0)?.match(Length);
    });
  }
  public async enterHeight(Height: string) {
    const ele = await this.eleInputHeight;

    await ele?.type(Height);
  }
  public async verifyWidth(Width: string) {
    const result = this.eleInputWidth;
    const data = await result.locator(':scope').allInnerTexts();
    await data.forEach(async (value) => {
      value.at(0)?.match(Width);
    });
  }
  public async inventorMethod() {
    // const ele = await this.Basic;
    const ele = await this.eleInventoryMethod;
    await ele?.click();
    // await ele1?.click();
  }
  public async selectInventory() {
    const ele = await this.eleOptionInventoryMethod;
    await ele?.selectOption({ index: 1 });
    // await this.verifyOptionInventory();
  }
  public async verifyOptionInventory(title: string) {
    const searchResult = this.eleInventoryMethod;
    const data = await searchResult.locator(':scope').allInnerTexts();
    await data.forEach(async (value) => {
      value.at(0)?.match(title);
    });
  }
  public async stockQuantity() {
    const ele = await this.IncreaseQuantity;
    await ele?.click();
  }
  public async clickEditPicture() {
    const ele = await this.eleEdit;
    await ele?.click();
  }
  public async clickDisplayOrder(a: string) {
    const ele = await this.eleDisplayOrderInput;
    await ele?.fill(a);
  }
  public async inputDisplayAlt(b: string) {
    const ele = await this.eleDisplayAltInput;
    await ele?.fill(b);
  }
  public async verifyDisplayOrder(Display: string) {
    const searchResult = this.eleDisplayAltInput;
    const data = await searchResult.locator(':scope').allInnerTexts();
    await data.forEach(async (value) => {
      value.at(0)?.match(Display);
    });
  }

  public async enterTitle(c: string) {
    const ele = await this.eleTitle;
    await ele?.fill(c);
  }

  public async verifyTitle(title: string) {
    const searchResult = this.eleTitle;
    const data = await searchResult.locator(':scope').allInnerTexts();
    await data.forEach(async (value) => {
      value.at(0)?.match(title);
    });
  }

  public async enterUpdate() {
    const ele = await this.eleUpdate;
    await ele?.click();
  }
  public async uploadFile() {
    // ele = await this.UploadFiles;
    await this.page.setInputFiles('input[type="file"]', '/utils/Image/ImageTest.jpg');
  }
  public async verifyImage() {
    await expect(this.UploadFiles).toContainText('ImageTest.jpg');
  }
  public async inputProductName(a: string) {
    const ele = await this.ProductName;
    await ele?.fill(a);
  }
  public async clickSave() {
    const ele = await this.Save;
    await ele?.click();
  }
  public async inputName(b: string) {
    const ele = await this.inpProductName;
    await ele?.type(b);
  }
  public async searchProduct() {
    const ele = await this.btnGSearch;
    await ele?.click();
  }
  public async verifyProductNameTitle(name: string) {
    const searchResult = this.ProductName07;
    const data = await searchResult.locator(':scope').allInnerTexts();
    await data.forEach(async (value) => {
      value.at(0)?.match(name);
    });
  }
  public async verifySku07(sku: string) {
    const searchResult = this.Sku07;
    const data = await searchResult.locator(':scope').allInnerTexts();
    await data.forEach(async (value) => {
      value.at(0)?.match(sku);
    });
  }
  public async verifyPrice07(price: string) {
    const searchResult = this.Price07;
    const data = await searchResult.locator(':scope').allInnerTexts();
    await data.forEach(async (value) => {
      value.at(0)?.match(price);
    });
  }
}
