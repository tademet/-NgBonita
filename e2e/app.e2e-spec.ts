import { @NgBonitaPage } from './app.po';

describe('@ng-bonita App', function() {
  let page: @NgBonitaPage;

  beforeEach(() => {
    page = new @NgBonitaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
