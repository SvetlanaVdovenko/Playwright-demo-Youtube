const { test, expect} = require('@playwright/test')

test('Hidden options dropdown', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', {name: 'PIM'}).click();
    await page.locator('form i').nth(2).click();
    await page.getByRole('option', { name: 'Chief Executive Officer' }).locator('span').click();
    await expect(page.locator('form')).toContainText('Chief Executive Officer');

    await page.waitForTimeout(5000);
} )