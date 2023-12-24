const {test, expect} = require('@playwright/test')

test('Frames/iFrames', async ({page}) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');

    //total frames
    const allFrames = await page.frames();
    console.log('Number of frames:', allFrames.length);

    // Interact with a frame using  a frame locator
    // await page.frameLocator('frame >> nth=0').getByRole('textbox').fill('Hello');

    // using a url/name of the frame
    const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    await frame1.fill("[name='mytext1']", 'Hello');
});

test('Hested/Inner frames', async ({page}) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    await frame3.fill("[name='mytext3']", 'Hello');

    // nested frame
    const childFrames = await frame3.childFrames(); //array of frames
    await childFrames[0].getByLabel('Hi, I am the UI.Vision IDE').check();
    
    await page.waitForTimeout(5000);
})