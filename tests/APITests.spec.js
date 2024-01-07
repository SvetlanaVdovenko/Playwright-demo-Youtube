const {test, expect} = require ('@playwright/test')
// these tests should be run in paralel
// it should be disabled in config file
 /* Run tests in files in parallel */
 //fullyParallel: false,

let userId;

test('Get users', async ({request}) => {
    const response = await request.get('https://reqres.in/api/users?page=2');
    console.log(await response.json());
    expect(response.status()).toBe(200);
})

test('Create user', async ({request}) => {
    const response = await request.post('https://reqres.in/api/users',
    {
        data: {
            "name": "Svitlana",
             "job": "QA"
        },
        headers: {
            "Accept": "application/json"
        }
    });

    console.log(await response.json());
    expect(response.status()).toBe(201);

    let res = await response.json()
    userId = res.id
})

test('Update user', async ({request}) => {
    const response = await request.put('https://reqres.in/api/users/'+userId,
    {
        data: {
            "name": "Svitlana",
             "job": "BA"
        },
        headers: {
            "Accept": "application/json"
        }
    });

    console.log(await response.json());
    expect(response.status()).toBe(200);

})

test('Delete user', async ({request}) => {
    const response = await request.delete('https://reqres.in/api/users/'+userId)
    expect(response.status()).toBe(204);
})