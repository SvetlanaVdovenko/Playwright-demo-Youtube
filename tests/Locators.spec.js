const {test, expect} = require('@playwright/test')

test('Locators', async ({page}) => {
    await page.goto('https://demoblaze.com/index.html');
    
    //click on login button - property locator
    await page.click('id=login2');
    
    //provide username - CSS
    await page.fill('#loginusername','pavanol');

    //provide password - CSS
    await page.fill("input[id='loginpassword']",'test@123');

    // click on the login button - xPath
    await page.click("//button[normalize-space()='Log in']");

    //verify logout link presence
   const logoutLink = page.locator('//*[@id="logout2"]');
   await expect(logoutLink).toBeVisible();

   await page.close();
})

//Locate multiple web elements
// const elements = await page.$$(locator)

test('Locate Multiple Links', async ({page}) => {
    await page.goto('https://demoblaze.com/index.html');

    const links = await page.$$('a');

    for(let link of links) {
        const linktext = await link.textContent();
        console.log(linktext);
    }
})

test('Locate Products titles', async ({page}) => {
    await page.goto('https://demoblaze.com/index.html');

    //page.waitForSelector("//div[@id='tbodyid']//div//h4/a");
    const products = await page.$$("//div[@id='tbodyid']//div//h4/a");

    for(let product of products){
        const productName = await product.textContent();
        console.log(productName);
    }
})