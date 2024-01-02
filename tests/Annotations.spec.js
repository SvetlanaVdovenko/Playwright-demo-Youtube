const {test, expect} = require('@playwright/test')

// only this test will be executed
// can be used to different tests at the same time
test.only('Test1', async ({page}) => {
    console.log('Test 1');
})
// skip - test will be skipped
test.skip('Test2', async ({page}) => {
    console.log('Test 2');
})
// also we can skip the test based on some conditions
test('Test3', async ({page,browserName}) => {
    if(browserName === 'chromium') {
        test.skip();
    };
    console.log('Test 3');
})

// Fixme - will skip the test ( UNTIL I FIX THE ISSUE WITH THE TEST)
test('Test4', async ({page}) => {
    test.fixme();
    console.log('Test 4');
})

// Fail ( for negative tests)
test('Test5', async ({page}) => {
    test.fail(); // we are expecting fail
    console.log('Test 5');
    expect(1).toBe(1); // the actual test are passed
})

// test will be failed 

test('Test6', async ({page}) => {
    test.fail(); // we are expecting fail
    console.log('Test 5');
    expect(1).toBe(3); // the actual test are failed
})

// this test will be passed

// fail the test based on the condition
// for chromium the condition is true but I expect fail that's why the test failed
// for any other browser the test will be passed
test('Test7', async ({page,browserName}) => {
    if(browserName === 'chromium') {
        test.fail();
    };
})

// slow
// default time for execution the test is 30 s
// but it can be changed in the configuration file
// in the use obj timeout should be added
test('Test8', async ({page}) => {
    //test.slow();// automatically multiply default timeout by 3
    test.setTimeout(5000); // set timeout for particular test
    await page.goto('https://demoblaze.com/index.html');
})

