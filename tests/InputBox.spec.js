const {test, expect} = require('@playwright/test')

test('Handle input box', async ({page}) => {
    await page.goto('https://itera-qa.azurewebsites.net/home/automation');
    //Inputbox - Name
    await expect(await page.locator("//input[@id='name")).toBeVisible();
    await expect(await page.locator("//input[@id='name")).toBeEmpty();
    await expect(await page.locator("//input[@id='name")).toBeEditable();
    await expect(await page.locator("//input[@id='name")).toBeEnabled();

    await page.locator("//input[@id='name").fill('John')
    // another variant:
    // await page.fill("//input[@id='name", "John");

    // pausing code
    // await page.waitForTimeout(5000); 

})