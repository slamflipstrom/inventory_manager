import { InventoryManagerPage } from './app.po';

describe('inventory-manager App', function() {
  let page: InventoryManagerPage;

  beforeEach(() => {
    page = new InventoryManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
