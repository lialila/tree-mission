import 'setimmediate';
import { Browser, chromium, Page } from 'playwright';

describe('Home page', () => {
  let browser: Browser;
  let page: Page;

  beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();

    await page.goto('http://localhost:3000');
  });

  afterAll(async () => {
    await page.close();
  });

  test('should have correct title', async () => {
    const title = await page.title();

    expect(title).toEqual('Tree.ly');
  });

  test('should have a headline', async () => {
    const headline = await page.$('h1');

    expect(headline).toBeTruthy();
  });

  test('should have a "Learn more" button', async () => {
    const learnMoreButton = await page.$('button');

    expect(learnMoreButton).toBeTruthy();
  });

  test('should have three cards', async () => {
    const cards = await page.$$('styles.cards');

    expect(cards).toBeTruthy();
  });
});
