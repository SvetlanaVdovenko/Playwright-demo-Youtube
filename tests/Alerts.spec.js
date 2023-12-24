const {test, expect} = require ('@playwright/test')

test('Alert with OK', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enabling Dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    })

    await page.getByRole('button', { name: 'Alert' }).click();
});

test('Confirmation dialog - alert', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enabling Dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        //await dialog.accept();
        await dialog.dismiss();
    })

    await page.getByRole('button', { name: 'Confirm Box' }).click();
});

test('Propmt', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enabling Dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('Svitlana');
    })

    await page.getByRole('button', { name: 'Prompt' }).click();
    await expect(page.locator('#demo')).toHaveText('Hello Svitlana! How are you today?');
})