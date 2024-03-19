import {expect, test} from '@playwright/test'

test('Demo login test',async ({page})=>{
    await page.goto('https://admin-demo.nopcommerce.com/')
    await page.pause()
    await page.locator('//*[@id="Email"]').fill('admin@yourstore.com')
    await page.locator('//*[@id="Password"]').fill('admin')
    await page.locator('text= LOG IN').click()
    await page.waitForURL('https://admin-demo.nopcommerce.com/admin');
    await page.close()

})