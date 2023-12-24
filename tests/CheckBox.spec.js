const {test, expect} = require('@playwright/test')

test('Handle checkboxes', async ({page}) => {
    await page.goto('https://itera-qa.azurewebsites.net/home/automation');
    
    //single checkbox
    await page.locator('single_check_box').check();
    await expect(await page.locator('single_check_box4')).toBeChecked();
    await expect(await page.locator('single_check_box4').isChecked()).toBeTruthy();

    await page.locator('single_check_box_unchecked');
    await expect(await page.locator('single_check_box4')).not.toBeChecked();
    await expect(await page.locator('single_check_box4').isChecked()).toBeFalsy();

    //multiple checkboxes
    const checkboxeLocators = ['checkboxLocator1', 'checkboxLocator2', 'checkboxLocator3' ];
    
    //select each checkboxes
    for(let locator of checkboxeLocators) {
        await page.locator(locator).check();
    }
    //unselect checked checkboxes
    for(let locator of checkboxeLocators) {
        if(await page.locator(locator).isChecked()) {
            await page.locator(locator).uncheck();
        };
    }


})