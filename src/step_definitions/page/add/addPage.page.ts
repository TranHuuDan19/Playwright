import { Page, Locator, expect } from '@playwright/test';

export default class AddProductPage {
  private page: Page;
  //Log in
  readonly eleLoginBtn: Locator;
  //Add new
  readonly eleAddNewBtn: Locator;
  readonly eleSettingBtn: Locator;
  readonly eleSaveandCont: Locator;
  readonly eleToggle: Locator;
  //Product info
  readonly eleProdNameText: Locator;
  readonly eleShortDescText: Locator;
  readonly eleFullDescText: Locator;
  readonly eleSKUText: Locator;
  readonly eleCategorisText: Locator;
  readonly eleChosenCate: Locator;
  //Prices
  readonly elePriceText: Locator;
  readonly eleTaxexCheckbox: Locator;
  //readonly eleTaxcateDrop: Locator;
  //Shipping
  readonly eleWeightText: Locator;
  readonly eleLengthText: Locator;
  readonly eleWidthText: Locator;
  readonly eleHeightText: Locator;
  //Inventory
  readonly eleInvenDrop: Locator;
  //Save
  readonly eleSaveBtn: Locator;
  //verify card elemnet
  readonly eleGiftCard: Locator;
  readonly eleRentalCard: Locator;
  readonly eleDownloadProdCard: Locator;
  // Title Card
  readonly elePlusProd: Locator;
  readonly eleMinusProd: Locator;
  readonly eleProdCardTitle: Locator;
  readonly elePriceCardTitle: Locator;
  readonly eleShippingCardTitle: Locator;
  readonly eleInveCardTitle: Locator;
  // success notification
  readonly eleSuccessnoti: Locator;
  constructor(page: Page) {
    this.page = page;
    //Log in
    this.eleLoginBtn = page.locator("//button[text()='Log in']");
    //Add new
    this.eleAddNewBtn = page.locator("//a[contains(.,'Add new')]");
    this.eleSaveBtn = page.locator("button[name='save']");
    this.eleSettingBtn = page.locator('#product-editor-settings');
    this.eleSaveandCont = page.locator(
      "//button[text()[normalize-space()='Save and Continue Edit']]",
    );
    this.eleToggle = page.locator('.onoffswitch-switch');
    // this.eleToggle = page.locator("//span[@data-locale-advanced='Advanced']");
    //Product info
    this.eleProdNameText = page.locator('#Name');
    this.eleShortDescText = page.locator('#ShortDescription');
    this.eleFullDescText = page.locator('.tox-edit-area');
    this.eleSKUText = page.locator('#Sku');
    this.eleCategorisText = page.locator("(//div[@class='k-multiselect-wrap k-floatwrap'])[1]");
    this.eleChosenCate = page.locator("//li[@class='k-item k-state-hover']");
    //Prices
    this.elePriceText = page.locator("(//span[@class='k-icon k-i-arrow-60-up'])[2]");
    this.eleTaxexCheckbox = page.locator('input#IsTaxExempt');
    //Shipping
    this.eleWeightText = page.locator("(//span[@class='k-icon k-i-arrow-60-up'])[9]");
    this.eleLengthText = page.locator("(//span[@class='k-icon k-i-arrow-60-up'])[10]");
    this.eleWidthText = page.locator("(//span[@class='k-icon k-i-arrow-60-up'])[11]");
    this.eleHeightText = page.locator("(//span[@class='k-icon k-i-arrow-60-up'])[12]");
    //Inventory
    this.eleInvenDrop = page.locator('#ManageInventoryMethodId');
    //verify card elemnet
    this.eleGiftCard = page.locator("//div[text()='Gift card']");
    this.eleRentalCard = page.locator("//div[text()='Rental']");
    this.eleDownloadProdCard = page.locator("//div[text()='Downloadable product']");
    // Title Card
    this.elePlusProd = page.locator("(//i[contains(@class,'fa toggle-icon')])[1]");
    this.eleMinusProd = page.locator('div#product-info');
    this.eleProdCardTitle = page.locator("//div[@data-hideattribute='ProductPage.HideInfoBlock']");
    this.elePriceCardTitle = page.locator("//div[text()='Prices']");
    this.eleShippingCardTitle = page.locator("//div[text()='Shipping']");
    this.eleInveCardTitle = page.locator("//div[text()='Inventory']");
    // success notification
    this.eleSuccessnoti = page.locator("//div[contains(@class,'alert alert-success')]");
  }
  public async navigateTo(url: string) {
    await this.page.goto(url, { timeout: 60 * 1000 });
  }

  public async inputText(value: string, text: Locator) {
    await text?.fill(value);
  }

  public async clickBtn(ele: Locator) {
    await ele?.click();
  }

  public async verifyVisible(ele: Locator) {
    await expect(ele).toBeVisible();
  }

  public async PressKey(action: string, ele: Locator) {
    await ele.press(action);
  }

  public async selectDropDownList(value: string, eleoption: Locator) {
    await eleoption?.selectOption(value);
  }

  public async selectDropDownLable(value: string, eleoption: Locator) {
    await eleoption?.selectOption({ label: value });
  }
}
