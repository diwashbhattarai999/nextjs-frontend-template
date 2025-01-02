import { expect, test } from '@playwright/test';

test.describe('landing page', () => {
  test('given any user: shows the test user', async ({ page }) => {
    // Go to the landing page
    await page.goto('/');

    // Wait for the text to be visible, with a timeout of 10 seconds
    await expect(page.getByText('Hello world!')).toBeVisible({
      timeout: 10000,
    });
  });
});
