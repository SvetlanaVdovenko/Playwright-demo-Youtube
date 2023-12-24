const {test, expect} = require ('@playwright/test')

test('Assersions test', async ({page}) => {
    
    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F')

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F');

    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    const logoElement = await page.locator('.header-logo');
    await expect(logoElement).toBeVisible();

    const searchButton = await page.locator('#small-searchterms');
    await expect(searchButton).toBeEnabled();

    const maleRadioButton = await page.locator('#gender-male');
    await maleRadioButton.click();
    await expect(maleButton).toBeChecked();

    const newslwtterCheckbox = await page.locator('#Newsletter');
    await expect(newslwtterCheckbox).toBeChecked();

    const registerButton = await page.locator('#register-button');
    await expect(registerButton).toHaveAttribute('type', 'submit');

    //toHaveText - element matches text
    await expect(await page.locator('.page-title h1')).toHaveText('Register');

    //toContainText - element contains text

    await expect(await page.locator('.page-title h1')).toContainText('Reg');

    

})