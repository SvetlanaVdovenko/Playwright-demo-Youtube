const {test, expect} = require('@playwright/test')

test.beforeAll(async() => {
    console.log('This is before all hook');
})

test.afterAll(async () => {
    console.log('This is after all hook');
})

test.beforeEach(async () => {
    console.log('This is before each');
})

test.describe('Group1', () => {
    test('Test1', async ({page}) => {
        console.log('This is my test 1')
    });
    
    test('Test2', async ({page}) => {
        console.log('This is my test 2')
    });
})

test.describe.only('Group2', () => {
    test('Test3', async ({page}) => {
        console.log('This is my test 3')
    });
    
    test('Test4', async ({page}) => {
        console.log('This is my test 4')
    });
})

