const {test, expect} = require('@playwright/test')

test('Mouse Right Click', async ({page}) => {
    await page.goto('url');

    const button = await page.locator('licator_of_button');

    // right click action
    await button.click({button:'right'});
})