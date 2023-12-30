const {test, expect} = require('@playwright/test')

test("Drag and Drop", async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const elementToDrag = await page.locator('#draggable');
    const elementToDrop = await page.locator('#droppable');
    await elementToDrag.dragTo(elementToDrop);

    await page.waitForTimeout(5000);
})