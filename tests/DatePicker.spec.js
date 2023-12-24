const { test, expect} = require('@playwright/test');
const { deflateSync } = require('zlib');

test('Date Picker', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // await page.fill('#datepicker', '06/30/2023');

    //date picker

    const year = '2024';
    const month = 'May';
    const date = '3';

    await page.click('#datepicker'); // open calendar
    while(true){
       const currentYear = await page.locator('.ui-datepicker-year').textContent(); 
       const currentMonth = await page.locator('.ui-datepicker-month').textContent();
       if (currentYear === year && currentMonth === month){
            break;
       }
       await page.locator('[title="Next"]').click();
    }

    // capture all the days
    const daysArr = await page.$$("//a[@class='ui-state-default']");
    for( let day of daysArr) {
        console.log(await day.textContent());
        if( await day.textContent() == date) {
            await day.click();
            break;
        }
    }

    await page.waitForTimeout(6000);
})