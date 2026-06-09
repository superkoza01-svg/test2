import { test, expect } from '@playwright/test';

test('e-mail', async ({ page }) => {
  test.slow();
  //Валидное
  await page.goto('https://practice.expandtesting.com/forgot-password');
  await page.getByRole('textbox', { name: 'E-mail' }).click();
  await page.getByRole('textbox', { name: 'E-mail' }).fill('test@test.com');
  await page.getByRole('textbox', { name: 'E-mail' }).press('Enter');
  await expect(
    page.locator('text=An e-mail has been sent to you which explains how to reset your password.'),
  ).toBeVisible();
  //невалидные
  await page.goto('https://practice.expandtesting.com/forgot-password');
  await page.getByRole('textbox', { name: 'E-mail' }).click();
  await page.getByRole('textbox', { name: 'E-mail' }).fill('test');
  await page.getByRole('button', { name: 'Retrieve password' }).click();
  await expect(page.locator('text=Please enter a valid email address.')).toBeVisible();

  await page.getByRole('textbox', { name: 'E-mail' }).click();
  await page.getByRole('textbox', { name: 'E-mail' }).fill('test@');
  await page.getByRole('button', { name: 'Retrieve password' }).click();
  await expect(page.locator('text=Please enter a valid email address.')).toBeVisible();

  await page.getByRole('textbox', { name: 'E-mail' }).click();
  await page.getByRole('textbox', { name: 'E-mail' }).fill('test@s');
  await page.getByRole('button', { name: 'Retrieve password' }).click();
  await expect(page.locator('text=Your email is invalid!')).toBeVisible();
});
