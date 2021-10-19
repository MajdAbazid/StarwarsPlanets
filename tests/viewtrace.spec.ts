import { test, expect } from '@playwright/test';

test('filter test', async ({ browser }) => {
  const context = await browser.newContext({
    recordVideo: {
      dir: 'videos'
    }
  });
  await context.tracing.start({
    screenshots: true, snapshots: true
  });

  const page = await context.newPage();
  await page.goto("http://localhost:4200/");
  await page.waitForTimeout(2000);
  await page.screenshot({ path: Date.now() + '.png'});

  const input = 'tat';
  await page.locator('input').type(input);
  await page.click('button');
  await page.waitForTimeout(1000);
  await page.screenshot({ path:'aftersearch.png'});

  await expect(page.locator('app-planet')).toContainText('Tat');
  await expect(page.locator('button')).toContainText('Sear');

  await context.tracing.stop({path: 'trace.zip'})

});

test('count test', async ({ page }) => {
  /*const context = await browser.newContext();
  await context.tracing.start({
    screenshots: true, snapshots: true
  });
  */


  //const page = await context.newPage();
  await page.goto("http://localhost:4200/");
  await page.waitForTimeout(2000);

  await expect(page.locator("app-planet")).toHaveCount(60);

  //await context.tracing.stop({path: 'trace.zip'})

});
