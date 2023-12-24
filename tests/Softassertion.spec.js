const {test, expect} = require('@playwright/test');


test('Soft assertion', async ({page}) => {
    await page.goto("https://demoblaze.com/index.html")

    
    await expect.soft(page).toHaveTitle('STORE2');
    await expect.soft(page).toHaveURL('https://demoblaze.com/index.html');
    await expect.soft(page.locator('.navbar-brand')).toBeVisible();
})