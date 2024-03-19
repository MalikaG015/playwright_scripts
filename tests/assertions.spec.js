import {expect, test} from '@playwright/test'

test('Assertions', async({page})=>{
    await page.goto('https://kitchen.applitools.com/')
    await page.pause()
})