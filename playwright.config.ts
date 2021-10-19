import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  retries: 1,
  use: {
    trace: 'on-first-retry',
  },
  testMatch: ["**.test.ts"],
  reporter: [["dot"], ["json", { outputFile: "test-result.json" }]]
};
export default config;
