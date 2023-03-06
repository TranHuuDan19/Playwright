import DragDrop from '../../page/dragDrop/dragDrop.page';
import NavigationPage from '../../page/navigation/navigation.page';
import { Given, Then, When } from '@cucumber/cucumber';

let navigationPage: NavigationPage;
let dragDrop: DragDrop;

Given('I am at Drag Drop page', async function () {
  const page = this.page!;
  navigationPage = new NavigationPage(page);
  await navigationPage.goToPage('https://www.globalsqa.com/demo-site/draganddrop/');
});

When('I can click delete button of image 1', async function () {
  const page = this.page!;
  dragDrop = new DragDrop(page);
  await dragDrop.clickDeleteButtonOfOneImage();
});

When('I can drag image 1 and drop into trash', async function () {
  const page = this.page!;
  dragDrop = new DragDrop(page);
  await dragDrop.moveImageToTrashByDragAndDrop();
});

Then('I can restore image', async function () {
  const page = this.page!;
  dragDrop = new DragDrop(page);
  await dragDrop.clickRestoreOfOneImage();
});
