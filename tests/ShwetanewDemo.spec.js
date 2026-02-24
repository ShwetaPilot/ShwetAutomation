const {test, expect} = require ('@playwright/test')

test ('newplayright_project', async({page}) => {

await page.goto('https://google.com')
await expect(page).toHaveTitle('Google')

});