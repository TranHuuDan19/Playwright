/* eslint-disable @typescript-eslint/no-unused-vars */
import NavigationPage from '../../page/navigation/navigation.page';
import SliderPage from '../../page/slider/slider';
import { Given, Then } from '@cucumber/cucumber';

let navigationPage: NavigationPage;
let slider: SliderPage;

Given('I am at Slider page', async function () {
  const page = this.page!;
  navigationPage = new NavigationPage(page);
  await navigationPage.goToPage('https://www.globalsqa.com/demo-site/sliders/');
});

Then('I can move slider to position {int}', async function (position: number) {
  const page = this.page!;
  slider = new SliderPage(page);
  await slider.moveSlider(position);
});
