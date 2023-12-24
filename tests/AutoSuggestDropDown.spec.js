const {test, expect} = require('@playwright/test')

test('Handle autosuggest dropdown', async ({page}) => {
    await page.goto('https://www.redbus.in/');

    //catch input field/search field and enter search query
    await page.locator('#src').fill('Delhi');
    //write locator that catch the necessary value from suggested results
    await page.waitForSelector('put here selector');
    const searchResultsArr = await page.$$('locator');
    for(let option of searchResultsArr){
        const value = await option.textContent();
        if(value.includes('Anad vihar')){
            await option.click();
            break;
        }
    }
})