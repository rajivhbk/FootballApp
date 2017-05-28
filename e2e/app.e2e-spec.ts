import { FootballAppPage } from './app.po';

describe('football-app App', function() {
  let page: FootballAppPage;

  beforeEach(() => {
    page = new FootballAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
