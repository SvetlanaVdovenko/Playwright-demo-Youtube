const {test, expect} = require('@playwright/test')

let page;

test.beforeAll(async ({browser}) => {
    page = await browser.newPage()
    await page.goto('https://demoblaze.com/index.html');
    //login
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.getByRole('button', { name: 'Log in' }).click();
});

test.afterAll(async () => {
    //logout
    await page.getByRole('link', { name: 'Log out' }).click();
});

test('Home Page Test', async () => {
    const products = await page.$$('.hrefch');
    await expect(products).toHaveLength(9);
    
});

test('Add Product to the cart Test', async () => {
    await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
    await page.getByRole('link', { name: 'Add to cart' }).click();
    page.on('dialog', async dialog => {
        expect(dialog.message).toContain('Product added.');
        await dialog.accept();
    })
});