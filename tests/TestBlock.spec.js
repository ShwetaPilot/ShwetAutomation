const {test, expect} = require ('@playwright/test')
//import { test, expect } from '@playwright/test';

test('TestBlock', async ({page}) => {
  await page.goto('https://google.com/')
  await expect(page).toHaveTitle(/Google/)
});