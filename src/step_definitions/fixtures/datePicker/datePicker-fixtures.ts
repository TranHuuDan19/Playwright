import DatePickerPage from '../../page/datePicker/datePicker.page';
import NavigationPage from '../../page/navigation/navigation.page';
import { Given, Then, When } from '@cucumber/cucumber';

let navigationPage: NavigationPage;
let datePickerPage: DatePickerPage;

Given('I am at Date Picker page', async function () {
  const page = this.page!;
  navigationPage = new NavigationPage(page);
  await navigationPage.goToPage(
    'https://www.globalsqa.com/demo-site/datepicker/#Simple%20Date%20Picker',
  );
});
When('I click on Date field', async function () {
  const page = this.page!;
  datePickerPage = new DatePickerPage(page);
  await datePickerPage.clickDatePicker();
});
When('I input {string} in Date field', async function (date: string) {
  const page = this.page!;
  datePickerPage = new DatePickerPage(page);
  await datePickerPage.enterDate(date);
});
Then('I can verify value {string} of Date field', async function (date: string) {
  const page = this.page!;
  datePickerPage = new DatePickerPage(page);
  await datePickerPage.verifyDate(date);
});
When(
  'I select {string} and {string} and {string} on date picker',
  async function (date: string, month: string, year: string) {
    const page = this.page!;
    datePickerPage = new DatePickerPage(page);
    await datePickerPage.selectDateFromDatePicker(date, month, year);
  },
);
