import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'http://www.automationpractice.pl/index.php',
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
  },
  testDir: './tests',
  timeout: 30000,
  });