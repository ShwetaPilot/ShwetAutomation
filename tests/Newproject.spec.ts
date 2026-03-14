import { test, expect } from '@playwright/test';

test('Open Google homepage', async ({ page }) => {
  // Navigate to Google
  await page.goto('https://www.google.com');

    // Wait for 2 seconds before executing next command
  await page.waitForTimeout(8000);

  // Wait for the search box to appear
  await expect(page.locator('input[name="q"]')).toBeVisible();


  // Optional: take a screenshot
  await page.screenshot({ path: 'google-home.png' });
});
