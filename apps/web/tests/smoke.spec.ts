import { test, expect } from '@playwright/test';

const pages = ['/', '/origins', '/philosophy', '/projects', '/timeline', '/connect', '/archive'];

for (const path of pages) {
  test(`${path} loads`, async ({ page }) => {
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.locator('body')).toBeVisible();
  });
}
