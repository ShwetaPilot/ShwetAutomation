const {test, expect} = require ('@playwright/test');
const { chromium } = require('playwright');

test('has title', async ({ page })=> {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  //const page = await context.newPage();
  await page.goto('https://www.google.com/?zx=1767671131140&no_sw_cr=1');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('siva vis');
  await page.getByText('siva vishnu temple md').click();
  await page.locator('iframe[name="a-azd1tgclz2cn"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.getByRole('link', { name: 'Sri Siva Vishnu Temple Sri' }).click();

  // ---------------------
  await context.close();
  await browser.close();
});