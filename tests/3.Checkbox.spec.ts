import { test, expect } from '@playwright/test';

// test('Checkbox', async ({ page }) => {
//   await page.goto('https://practice.expandtesting.com/checkboxes');
//   await page.getByRole('checkbox', { name: 'Checkbox 1' }).check();
//   await page.getByRole('checkbox', { name: 'Checkbox 2' }).uncheck();
//   await page.getByRole('checkbox', { name: 'Checkbox 1' }).uncheck();
//   await page.getByRole('checkbox', { name: 'Checkbox 1' }).check();
//   await page.getByRole('checkbox', { name: 'Checkbox 2' }).check();
//   await page.getByRole('checkbox', { name: 'Checkbox 1' }).uncheck();
// });

test('Checkbox', async ({ page }) => {
  test.slow();
  await page.goto('https://practice.expandtesting.com/checkboxes');

  const checkbox1 = page.getByRole('checkbox', { name: 'Checkbox 1' });
  const checkbox2 = page.getByRole('checkbox', { name: 'Checkbox 2' });

  // Установили чекбокс
  await checkbox1.check();
  await expect(checkbox1).toBeChecked();

  // сняли чекбокс
  await checkbox2.uncheck();
  await expect(checkbox2).not.toBeChecked();

  // Переключение состояния нескольких чекбоксов
  await checkbox1.uncheck();
  await checkbox2.check();
  await expect(checkbox1).not.toBeChecked();
  await expect(checkbox2).toBeChecked();

  // Обновили старницу
  await page.reload();

  // Проверка состояния после перезагрузки
  await expect(checkbox1).not.toBeChecked();
  await expect(checkbox2).toBeChecked();
});
