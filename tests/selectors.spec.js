import {test, expect} from '@playwright/test'

test('selectors and locators', async ({page})=>{
    await page.goto('https://www.saucedemo.com/')
   
    // using any object property
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('standard_user')

    //using CSS selectors
   
    await page.locator('#password').fill('secret_sauce')

    //using XPath
    await page.locator('//*[@id="password"]').fill('malika')
    await page.pause();
    
    //using text
    await page.locator('text=Login').click()
    



})