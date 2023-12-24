const {test, expect} = require ('@playwright/test')

test('Tables', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator('#productTable');

    // total number of rows and columns

    const columns = await table.locator('thead tr th');
    const numOfColumn = await columns.count();
    console.log('number of columns:', numOfColumn);
    await expect(await columns.count()).toBe(4);

    const rows = await table.locator('tbody tr');
    const numOfRows = await rows.count();
    console.log('number of rows:', numOfRows);
    await expect(await rows.count()).toBe(5);

    // select product from the table
    /*
   const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Product 4'
    })

    await matchedRow.locator('input').check();

    */

    // selecting multiple products by re-uasble function

    await selectProduct(rows, page, 'Product 1');
    await selectProduct(rows, page, 'Product 2');
    await selectProduct(rows, page, 'Product 3');

    // print all product details using loop
    /*
    for( let i = 0; i < await rows.count(); i++) {
        const row = rows.nth(i); // extract the first row
        const tds =  await row.locator('td'); // extrat td for this row
        for(let j = 0; j < await tds.count() - 1; j++) { // -1 because we don't want to print the last column
            console.log(await tds.nth(j).textContent());
        }
    }
    */

    // print all the data from the table (pagination)
    const pages = await page.locator('.pagination li a');
    console.log(await pages.count());

    for(let p = 0; p < await pages.count(); p++ ) {
        if(p > 0) {
            await pages.nth(p).click();
        }
        for( let i = 0; i < await rows.count(); i++) {
            const row = rows.nth(i); 
            const tds =  await row.locator('td'); 
            for(let j = 0; j < await tds.count() - 1; j++) { 
                console.log(await tds.nth(j).textContent());
            }
        }
    }


   
    await page.waitForTimeout(3000);

});

async function selectProduct(rows, page, name) {
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: name
    });
    await matchedRow.locator('input').check();

}