import { test, expect } from 'playwright-test-coverage-native';

test('can count from 0 to 4', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const heading = page.getByRole('heading', { name: 'Nuxt App' });
  await heading.waitFor();

  const counter = page.locator('.counter');
  await expect(counter).toHaveText('0');

  await page.getByRole('button', { name: 'count' }).click();
  await expect(counter).toHaveText('1');

  await page.getByRole('button', { name: 'count' }).click();
  await expect(counter).toHaveText('2');

  await page.getByRole('button', { name: 'count' }).click();
  await expect(counter).toHaveText('3');

  await page.getByRole('button', { name: 'count' }).click();
  await expect(counter).toHaveText('4');
});


