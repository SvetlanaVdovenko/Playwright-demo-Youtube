const {test, expect} = require('@playwright/test')

test('Mouse Hover', async ({page}) => {
    await page.goto('https://demo.opencart.com/');

    const desktop = await page.getByRole('link', { name: 'Desktops', exact: true });
    const mackbook = await page.getByRole('link', { name: 'Mac (1)' });

    await desktop.hover();
    await mackbook.hover();

    await page.waitForTimeout(5000);
})