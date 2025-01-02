import { expect, test } from '@playwright/test';

test.describe('I18n', () => {
  test.describe('Language Switching', () => {
    test('should switch language from English to Nepali using dropdown and verify text on the homepage', async ({
      page,
    }) => {
      // Go to homepage in English
      await page.goto('/');

      // Verify text in English
      await expect(
        page.getByRole('heading', {
          name: 'Welcome to the Nextjs Frontend Starter',
        })
      ).toBeVisible();

      await expect(
        page.getByText(
          'This is a starter template for a Next.js project with TypeScript, ESLint, Prettier, Vitest, Playwright, i18n support and many more.'
        )
      ).toBeVisible();

      // Open the language selector dropdown
      await page.locator('[aria-label="lang-switcher"]').click();

      // Wait for the dropdown options to be visible
      const dropdown = page.locator('[role="listbox"]');
      await expect(dropdown).toBeVisible();

      // Wait for the Nepali option to appear and be visible
      const nepaliOption = page.locator('text="NP"');
      await expect(nepaliOption).toBeVisible();

      // Select Nepali (Assuming 'ne' is the value for Nepali)
      await nepaliOption.click();

      // Verify text in Nepali
      await expect(
        page.getByRole('heading', {
          name: 'नेक्स्टज्स फ्रंटएन्ड स्टार्टरमा तपाईंलाई स्वागत छ',
        })
      ).toBeVisible();

      await expect(
        page.getByText(
          'यो एक नेक्स्ट.जेएस प्रोजेक्टको लागि एक स्टार्टर टेम्पलेट हो जसमा टाइपसक्रिप्ट, ईएसलिन्ट, प्रेटियर, भिटेस्ट, प्लेव्राइट, आई१८एन समर्थन र अन्य धेरै छन्।'
        )
      ).toBeVisible();
    });
  });
});
