import { test, expect } from '@playwright/test';

test('Display Input', async ({ page }) => {
  test.slow();
  await page.goto('https://practice.expandtesting.com/inputs');
  await page.getByRole('spinbutton', { name: 'Input: Number' }).click();
  await page.getByRole('spinbutton', { name: 'Input: Number' }).fill('12323123');
  await page.getByRole('textbox', { name: 'Input: Text' }).click();
  await page.getByRole('textbox', { name: 'Input: Text' }).fill('test');
  await page.getByRole('textbox', { name: 'Input: Password' }).click();
  await page.getByRole('textbox', { name: 'Input: Password' }).fill('password');
  await page.getByRole('textbox', { name: 'Input: Date' }).fill('2026-06-09');
  await page.getByRole('button', { name: 'Display Inputs' }).click();

  //Проверка
  await expect(page.getByRole('spinbutton', { name: 'Input: Number' })).toHaveValue('12323123');
  await expect(page.getByRole('textbox', { name: 'Input: Text' })).toHaveValue('test');
  await expect(page.getByRole('textbox', { name: 'Input: Password' })).toHaveValue('password');
  await expect(page.getByRole('textbox', { name: 'Input: Date' })).toHaveValue('2026-06-09');

  //Очистка
  await page.getByRole('button', { name: 'Clear Inputs' }).click();
});
