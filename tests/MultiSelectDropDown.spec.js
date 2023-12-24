const {test, expect} = require('@playwright/test')

test('Handle multiselect drop-downs', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    //Select multiple options from multi select drop down
    //await page.selectOption('#colors'['Blue', 'Red', 'Yellow']);
    //Check the number of options in drop-down
    const options = await page.locator('#colors option');
    await expect(options).toHaveCount(5);
    //Check number of option in dropdown using array
    const optionsArr = await page.$$('#colors option');
    console.log("Number of options:", optionsArr.length);
    await expect(optionsArr.length).toBe(5);
    //Check the presence of the value in the drop down
    const content = await page.locator('#colors').textContent();
    await expect(content.includes('Blue')).toBeTruthy();
    await expect(content.includes('Black')).toBeFalsy();
    

})