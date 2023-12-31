const {test, expect} = require('@playwright/test')

test('page screenshot', async ({page}) => {
    await page.goto('https://demo.opencart.com/');
    await page.screenshot({ path:'tests/screenshots/' + Date.now() + 'Homepage.png'});
});

test('full page screenshot', async ({page}) => {
    await page.goto('https://demo.opencart.com/');
    await page.screenshot({ path:'tests/screenshots/' + Date.now() + 'FullHomePage.png', fullPage: true});
});

test('element screenshot', async ({page}) => {
    await page.goto('https://demo.opencart.com/');
    await page.getByRole('link', { name: 'MacBook' }).first().screenshot({ path:'tests/screenshots/' + Date.now() + 'Macbook.png'});
});