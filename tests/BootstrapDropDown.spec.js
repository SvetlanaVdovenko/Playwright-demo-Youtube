const{test, expect} = require('@playwright/test')

test('Boostrap dropdown', async ({page}) => {
    await page.goto('url');

    await page.locator('.multiselect').click();
    // variant 1 - count match locators
    const optionsArr = await page.locator('label input');
    await expect(options).toHaveCount(11);
    //variant 2 - count the length of array
    const optionsArr2 = await page.$$('label input');
    await expect(options.length).toBe(11);
    //select multiple options
    const optionsArr3 = await page.$$('label input');
    for(let option of optionsArr3) {
        let value = await option.textContent();
        if(value.includes('Angular') || value.includes('Java')){
            await option.click();
        }
    }
    //deselect selected option
    const optionsArr4 = await page.$$('label input');
    for(let option of optionsArr4) {
        let value = await option.textContent();
        if(value.includes('CSS')){
            await option.click();
        }
    }
})