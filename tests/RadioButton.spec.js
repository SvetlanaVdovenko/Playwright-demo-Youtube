const {test, expect} = require('@playwright/test')

test('Handle radio button', async ({page}) => {
    await page.goto('https://itera-qa.azurewebsites.net/home/automation');
    
    await page.locator("//input[@value='option2']").check();
    //await page.check("//input[@value='option2']");
    await expect(await page.locator("//input[@value='option2']")).toBeChecked();
    await expect(await page.locator("//input[@value='option2']").isChecked()).toBeTruthy();

    await page.locator("//input[@value='option1']");
    await expect(await page.locator("//input[@value='option1']")).not.toBeChecked();
    await expect(await page.locator("//input[@value='option1']").isChecked()).toBeFalsy();

})