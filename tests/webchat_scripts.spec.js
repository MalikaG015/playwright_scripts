import { expect, test } from '@playwright/test'

// 1. User login to platform with any user
test('User login to platform with any user', async ({ page }) => {
    await page.goto('https://qa-lab5.finesource.org/login.html')
    await page.pause()
    await page.locator('//*[@id="username_label"]/input').fill('admin@tests.surbhi')
    await page.locator('//*[@id="password_label"]/input').fill('password123')
    await page.locator('//*[@id="btn-login"]').click()
    await expect(page).toHaveURL('https://qa-lab5.finesource.org/index.php#/fs/modules/profile/profile.html');
})

// 2. Edit webchat setting StartChatWithoutMessage to false
test('Edit webchat setting StartChatWithoutMessage to false', async ({ page }) => {
    await page.goto('https://qa-lab5.finesource.org/login.html');
    await page.pause()
    await page.fill('input[name="email"]', 'admin@tests.surbhi')
    await page.fill('input[name="password"]', 'password123')
    await page.locator('//*[@id="btn-login"]').click()
    await page.goto('https://qa-lab5.finesource.org/index.php#/fs/modules/profile/profile.html');
    await page.click('a[href="/fs/modules/_webchat/manager/webchat-manager.html"]');
    await page.click('i[class="fa fa-pencil-square"]')
    await page.locator('//*[@id="wc-webchat-form"]/div/header/ul/li[3]/a/span').click()
    await page.locator('//*[@id="wc-style"]/fieldset[4]/div/section[3]/div[3]/label/span').click()
    await page.locator('#wc-webchat-form > div > div > div > div > footer > button.btn.btn-primary > span').click()
    await page.locator('text=/Channel successfully edited!/')
})

// 3. User login to webchat & send message
test('User login to webchat & send message', async ({ page }) => {
    await page.goto('https://qa-lab5.finesource.org/login.html')
    await page.pause()
    await page.fill('input[name="email"]', 'admin@tests.surbhi')
    await page.fill('input[name="password"]', 'password123')
    await page.locator('//*[@id="btn-login"]').click()
    await expect(page).toHaveURL('https://qa-lab5.finesource.org/index.php#/fs/modules/profile/profile.html');
    await page.locator('#channel-webchat-connection-toggle').click();
    await page.getByRole('cell', { name: 'malikfa' }).click();
  //  await page.locator('[class="btn btn-primary btn-block"]').click()
    await page.locator('//body[1]/div[2]/div[2]/div[5]/div[3]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/button[1]').click()
    await page.locator('[class="textarea-ctn"]').click();
    //await page.locator('//*[@id="tab-conversation-cfd2959e-2a19-4113-833c-8287f5ea353d"]/div/div[1]/div[2]/div').fill('hii')
    await page.locator('[class="message-area message-autocomplete editable form-control ui-autocomplete-input"]').fill('hii')
    await page.locator('#send-message').click()
})

// 4. User open duplicate browser tab with same url.
test('User open duplicate browser tab with same url', async ({ page }) => {
    await page.goto('https://qa-lab5.finesource.org/login.html')
    await page.pause()
    await page.fill('input[name="email"]', 'admin@tests.surbhi')
    await page.fill('input[name="password"]', 'password123')
    await page.locator('//*[@id="btn-login"]').click()
    await page.goto('https://qa-lab5.finesource.org/index.php#/fs/modules/profile/profile.html')
    await page.locator('#keep-session').click();
})

// 5. Validate is chat sesison is tranfered successfully
// 6. Also validate chat session is terminated from previous tab.
test('validate if chat sesison is tranfered successfully and chat session is terminated from previous tab', async ({ page }) => {
    await page.goto('https://qa-lab5.finesource.org/login.html')
    await page.pause()
    await page.fill('input[name="email"]', 'admin@tests.surbhi')
    await page.fill('input[name="password"]', 'password123')
    await page.locator('//*[@id="btn-login"]').click()
    await expect(page).toHaveURL('https://qa-lab5.finesource.org/index.php#/fs/modules/profile/profile.html');
    await page.locator('#channel-webchat-connection-toggle').click();
    await page.getByRole('cell', { name: 'malika' }).click();
    await page.locator('[class="btn btn-default btn-block conversation-transfer"]').click()
    await page.getByRole('link', { name: 'Select an Agent' }).click();
    await page.getByRole('option', { name: 'Agent One' }).click();
    await page.getByRole('button', { name: 'Transfer', exact: true }).click();
    await expect(page.locator('text=Chat successfully transfered.')).toBeVisible()
})

