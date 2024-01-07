const {test, expect} = require('@playwright/test')

test('Test 1', async ({page}) => {
    await page.goto('https://demoblaze.com/index.html');
    await expect(page).toHaveTitle('STORE');
})

test('Test 2', async ({page}) => {
    await page.goto('https://demo.opencart.com/');
    await expect(page).toHaveTitle('Your Store');
})

test('Test 3', async ({page}) => {
    await page.goto('https://demo.nopcommerce.com/');
    await expect(page).toHaveTitle('nopCommerce demo store');
})

// open configuration file and set the desired type of the reporter
// html
// list
// line
// dot
// reporter: [['json', { outputFile: 'results.json' }]]
// reporter: [['junit', { outputFile: 'results.xml' }]]
// reporter: "allure-playwright",