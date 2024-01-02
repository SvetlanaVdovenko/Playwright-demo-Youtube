const {test, expect} = require('@playwright/test')

test('Test1@sanity', async ({page}) => {
    console.log('Test 1');
})

test('Test2@sanity', async ({page}) => {
    console.log('Test 2');
})

test('Test3@regression', async ({page}) => {
    console.log('Test 3');
})

test('Test4@regression', async ({page}) => {
    console.log('Test 4');
})

test('Test5@sanity@regression', async ({page}) => {
    console.log('Test 5');
})

/**
 * @sanity - tag for the test
 * If I want to execute tests with sanity tag (1, 2, 5):
 * npx playwright test --grep @sanity
 * npx playwright test tests/Tags.spec.js --project chromium --headed --grep @sanity
 * 
 * If I want to execute only tests which contain both tags (5):
 * npx playwright test tests/Tags.spec.js --project chromium --headed --grep @sanity@regression
 * 
 * If I want to execute only tests with sanity tag which don't belong to regression (1,2):
 * npx playwright test tests/Tags.spec.js --project chromium --headed --grep @sanity --grep-invert @regression
 */