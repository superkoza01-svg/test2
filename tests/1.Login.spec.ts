import { test, expect } from '@playwright/test';

test('Валидное логирование', async ({ page }) => {
  test.slow();
  await page.goto('https://practice.expandtesting.com/login', {
    waitUntil: 'networkidle',
    timeout: 60000,
  });
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('practice');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('text=You logged into a secure area!')).toBeVisible();
});

test('Невалидный логин', async ({ page }) => {
  test.slow();
  await page.goto('https://practice.expandtesting.com/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('practices');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('text=Your password is invalid!')).toBeVisible();
});

test('Невалидный пароль', async ({ page }) => {
  test.slow();
  await page.goto('https://practice.expandtesting.com/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('practice');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPas');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('text=Your password is invalid!')).toBeVisible();
});

test('Пустые поля', async ({ page }) => {
  test.slow();
  await page.goto('https://practice.expandtesting.com/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('text=Your username is invalid!')).toBeVisible();
});
