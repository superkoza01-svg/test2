import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.slow();
  await page.goto('https://practice.expandtesting.com/autocomplete');
  const resultLocator = page.locator('#result');
  await page.getByRole('textbox', { name: 'Country name' }).click();
  await page.getByRole('textbox', { name: 'Country name' }).fill('can');
  await page.getByText('Canada').click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(resultLocator).toHaveText(/You selected: Canada/i);
});
