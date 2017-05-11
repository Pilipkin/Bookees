import { BooksPage } from './app.po';

describe('books App', () => {
  let page: BooksPage;

  beforeEach(() => {
    page = new BooksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
