const {test, expect} = require('@playwright/test')

test('Home Page Test', async ({page}) => {
    await page.goto('https://demoblaze.com/index.html');
    //login
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.getByRole('button', { name: 'Log in' }).click();
    //home page
    const products = await page.$$('.hrefch');
    await expect(products).toHaveLength(9);
    //logout
    await page.getByRole('link', { name: 'Log out' }).click();
});

test('Add Product to the cart Test', async ({page}) => {
    await page.goto('https://demoblaze.com/index.html');
    //login
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.getByRole('button', { name: 'Log in' }).click();
    //add product
    await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
    await page.getByRole('link', { name: 'Add to cart' }).click();
    page.on('dialog', async dialog => {
        expect(dialog.message).toContain('Product added.');
        await dialog.accept();
    })
    //logout
    await page.getByRole('link', { name: 'Log out' }).click();
});