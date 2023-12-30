const {test, expect} = require('@playwright/test')

test('Mouse Double Click', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.getByRole('button', { name: 'Copy Text' }).dblclick();

    await expect(page.locator('#field2')).toHaveValue('Hello World!');

})