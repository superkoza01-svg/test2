import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.slow();
  await page.goto('https://practice.expandtesting.com/key-presses');
  const resultLocator = page.locator('#result');
  //Нажимаем кнопку
  await page.locator('body').press('Escape');
  //проверяем отображение
  await expect(resultLocator).toHaveText(/You entered: Escape/i);
  await page.locator('body').press('Enter');
  await expect(resultLocator).toHaveText(/You entered: Enter/i);
  await page.locator('body').press('Control');
  await expect(resultLocator).toHaveText(/You entered: CONTROL/i);
  await page.locator('body').press('Backspace');
  await expect(resultLocator).toHaveText(/You entered: BACK_SPACE/i);
  await page.locator('body').press('Tab');
  await expect(resultLocator).toHaveText(/You entered: TAB/i);
});
