import { ConfusionPage } from './app.po';
import { browser } from 'protractor';


describe('confusion App', () => {
  let page: ConfusionPage;

  beforeEach(() => {
    page = new ConfusionPage();
  });

  it('should display message saying Ristorante Con Fusion', () => {
    page.navigateTo('/');
    expect(page.getParagraphText('app-root h1')).toEqual('Ristorante Con Fusion');
  });

  it('should navigate to about us page by clicking on the link', () => {
  	page.navigateTo('/');
  	let navLink = page.getAllElements('a').get(1);
  	navLink.click();

  	expect(page.getParagraphText('h3')).toBe('About Us');
  });

  it('should enter a new comment for the first dish', () => {
    page.navigateTo('/dishdetail/0');

    let newAuthor = page.getElement('input[type=text]');
    newAuthor.sendKeys('Test Author');

    let newComment = page.getElement('textarea');
    newComment.sendKeys('Test Comment');

    let newSubmitButton = page.getElement("button[type=submit]");
    newSubmitButton.click();

    browser.pause();
  });
});
