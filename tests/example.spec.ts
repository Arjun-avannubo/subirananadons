// Removed invalid line
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  use: {
    browserName: 'chromium',
    headless: true,
  },
});

//tests/example.spec.ts:
import { test, expect } from '@playwright/test';

test('hello world test', async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.title();
  expect(title).toBe('Example Domain');
});