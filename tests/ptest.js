
const playwright = require('playwright');

(async () => {
  //const browser = playwright["chromium"].launch();//headless

  const browser = playwright["chromium"].launch({
    headless: false,
    devtools: true
  });

  //context
  const context = await (await (browser)).newContext();
  //page
  const page = await context.newPage();

  //navigate to the page
  await page.goto("http://localhost:4200/");


  await page.waitForResponse(response => {
    return response.request().resourceType() === "xhr"
  })
  await page.waitForTimeout(2000)

  await page.screenshot({path: 'example.png', fullPage: true});

  const elementHandle = (await page.$('div'));
  await elementHandle.screenshot({ path: 'screenshot.png' });

  await page.click('text=Log in');

  await (await browser).close();
})();
