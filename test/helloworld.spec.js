const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.google.com');
    await page.screenshot({ path: './output/screenshot.jpg' });
    await browser.close();

})();