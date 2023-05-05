import { expect, test } from '@playwright/test';

test('Homepage loads', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('http://localhost:3000');

  // Verify that the main heading is correct
  const mainHeading = await page.textContent('h1');
  expect(mainHeading).toBe('This is the headline');
});
