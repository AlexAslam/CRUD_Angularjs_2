import { AppCrudAngularPage } from './app.po';

describe('app-crud-angular App', function() {
  let page: AppCrudAngularPage;

  beforeEach(() => {
    page = new AppCrudAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
