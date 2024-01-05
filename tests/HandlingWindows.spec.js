const {test, expect, chromium} = require('@playwright/test')

test('HandlePages/Windows', async () => {
    const browser = await chromium.launch() // this will create anre browser
    const context = await browser.newContext() // after creating a context you can create multiple pages
    //creating pages
    //there are no connection beetween these pages
    const page1 = await context.newPage()
    const page2 = await context.newPage()

    //to get all pages using the same context
    const allPages = context.pages()
    console.log('Number os pages:', allPages.length);

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle('OrangeHRM')

    await page2.goto('https://www.orangehrm.com/')
    await expect(page2).toHaveTitle('OrangeHRM HR Software | OrangeHRM')
});

test.only('Handle Multiple Pages/Windows', async () => {
    const browser = await chromium.launch() 
    const context = await browser.newContext() 
    
    const page1 = await context.newPage()

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle('OrangeHRM')

    const pagePromise = context.waitForEvent('page') //open a new page with empty tab
    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click();
    const newPage = await pagePromise;
    await expect(newPage).toHaveTitle('OrangeHRM HR Software | OrangeHRM');

    await page1.waitForTimeout(3000);
    await newPage.waitForTimeout(3000);

    await browser.close();
})
