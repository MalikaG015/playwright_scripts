import {expect, test} from '@playwright/test'
//Write a script to test any auth form[Invalid username, invalid password, non empty, 
//username!=pass use not same. Pass match 8 alpha-num length.

test('check credentials on GoContact', async({page})=>{
    await page.goto('https://qa-lab5.finesource.org/login.html')
    await page.pause()
    //To check for invalid username
    await page.locator('//*[@id="username_label"]/input').fill('abc@xyz.com')
    await page.locator('//*[@id="password_label"]/input').fill('password123')
    await page.locator('//*[@id="btn-login"]').click()
    await expect.soft(page.locator('text=Unable to sign in at GoContact.')).toBeTruthy();

    //To check for invalid password
    await page.locator('//*[@id="username_label"]/input').fill('admin@tests.surbhi')
    await page.locator('//*[@id="password_label"]/input').fill('password')
    await page.locator('//*[@id="btn-login"]').click()
    await expect.soft(page.locator('text=/Wrong password/')).toBeTruthy()

    //To check password should not be empty
    await page.locator('//*[@id="username_label"]/input').fill('admin@tests.surbhi')
    await page.locator('//*[@id="password_label"]/input').fill(' ')
    await expect.soft(page.locator('text=Please enter your Password')).toBeTruthy()

    //To check username!=password
    await page.locator('//*[@id="username_label"]/input').fill('admin')
    await page.locator('//*[@id="password_label"]/input').fill('admin')
    await page.locator('//*[@id="btn-login"]').click()
    await expect(page.locator('text=/Wrong password/')).toBeTruthy()

    //Password should match 8 alpha-num length
    await page.locator('//*[@id="username_label"]/input').fill('admin@tests.surbhi')
    await page.locator('//*[@id="password_label"]/input').fill('admin')
    await expect(page.locator('text=/Please enter at least 6 characters/')).toBeTruthy()

})