const {test, expect} = require('@playwright/test')

test('handle dropdowns', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Multiple ways to select an option from the dropdown
    
    // await page.locator('#country').selectOption({label:'India'}); //labe/visible text
    // await page.waitForTimeout(5000);

    // await page.locator('#country').selectOption('India'); //visible text
    
    // await page.locator('#country').selectOption({value:'uk'}); //value attribute

    // await page.locator('#country').selectOption({index: 5}); //index

    // await page.selectOption('#country', 'India'); // by text

    //Assertions
    //1) check the number of optiopns in  drop down
   const options = await page.locator('#country option');
   await expect(options).toHaveCount(10);

    // 2) check the number of optiopns in  drop down - approach 2
    const arrOptions = await page.$$('#country option');
    //console.log("Number of options:", arrOptions.length)
    await expect(arrOptions.length).toBe(10);

    // 3) check the presence of some option in drop-down - approach 1
    const content = await page.locator('#country').textContent();
    await expect(content.includes('India')).toBeTruthy;

    // 4) check the presence of some option in drop-down - approach 2
    const arrOptions2 = await page.$$('#country option');
    let status = false;
    for (let option of arrOptions2) {
        //console.log(await option.textContent()); - print all option
       let value = await option.textContent();
       if(value.includes('France')){
        status = true;
        break;
       }
    }
    await expect(status).toBeTruthy();

    // 5) Select an option from drop-down using looping statement
    const arrOptions3 = await page.$$('#country option');
    
    for (let option of arrOptions3) {
       let value = await option.textContent();
       if(value.includes('France')){
        await page.selectOption('#country', value);
        break;
       }
    }

})