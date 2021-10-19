import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await expect(page.locator('text=Get Started'));

  await expect(page).toHaveTitle("StarwarsPlanets");
  await page.screenshot({ path: Date.now() + 'screenshot.png'});// with "fullPage: true" for a full browser page

  const elementHandle = await page.$('body:nth-child(2) app-root:nth-child(1) > nav.navbar.navbar-default');
  await elementHandle.screenshot({ path: 'header.png' });
  await page.locator("app-planet").count();

});
