const { expect } = require('@playwright/test')
class LoginPage {
    //restrucure, js doc, datatype, return type, params
    elements = {
        emailInput: 'input[name="email"]'
    }
    async navigate() {
        await page.goto('https://qa-lab5.finesource.org/login.html');
    }

    async supervisorLoginToMain() {
        await page.fill(this.elements.emailInput, 'admin@tests.surbhi')
        await page.fill('input[name="password"]', 'password123')
        await page.locator('#btn-login').click()
    }

    async supervisorLoginToMainSuccessfull() {
        await expect(page).toHaveURL('https://qa-lab5.finesource.org/index.php#/fs/modules/profile/profile.html');
    }
    async AgentloginToMain() {
        await page.fill('input[name="email"]', 'Agent_1@tests.surbhi')
        await page.fill('input[name="password"]', 'password123')
        await page.locator('#btn-login').click()
    }
    async agentLoginToMainSuccessfull() {
        await expect(page).toHaveURL('https://qa-lab5.finesource.org/index.php#/fs/modules/profile/profile.html');
    }
    async createBreak() {
        // await page.locator('//a[@id="menu_10"]').isVisible({ timeout: 5000 });
        await page.locator('[data-title="Users"]').hover();
        //await page.locator('[data-title="Users & Groups"]').click()
        //await  page.locator('//a[@data-title="Users"]').click()
        // await page.locator('//a[@id="menu_10"]').click()
        //await page.dispatchEvent('//a[@id="menu_10"]', 'mouseover');
        //await  page.locator('//a[@data-title="Users & Groups"]').click()
        //await  page.locator('//a[@id="menu_30"]').click()

        // await page.locator('//span[contains(text(), "Group_1")]').click();
        // await page.locator('//span[contains(text(),"Add break")]').click();
        // await page.locator('//input[@placeholder="Morning Breaks"]').fill('Break1');
        // await page.locator('input.form-control.timepick-input.new-timepick-init.text-center.react-to-pointer-event-on-disabled[placeholder="HH:MM"]').fill('10:00');
        // await page.locator('input.form-control.timepick-input.new-timepick-end.text-center.react-to-pointer-event-on-disabled[placeholder="HH:MM"]').fill('23:00');
        // await page.locator('input.form-control.spinner-both.new-break-max-time.text-align-center.react-to-pointer-event-on-disabled.ui-spinner-input[placeholder="MM"]').fill('60');
        // await page.locator('i.fa.fa-lock.fa-2x.new-toggle-auth.click-icons.react-to-pointer-event-on-disabled').click();
        // await page.locator('button.btn.btn-success.btn-xs.break-save.click-icons.access-level-edit').click();
    }

    // async accessUsersAndGroup() {
    //     await page.getByRole('link', { name: 'Groups & users' }).click();
    //     //  await page.locator('text=Users & groups management').toBeVisible()
    // }
    // async selectBreakGroup() {
    //     //await page.getByLabel('Groups (3) Add').locator('label').filter({ hasText: 'Group_1' }).click();
    //     await page.getByLabel('Groups (3) Add').getByText('Group_1').click();
    // }

    async AgentloginToVoice() {
        await this.AgentloginToMain()
        await page.locator('#channel-voice-label-text').getByText('Offline').click();
    }
    async configureVoiceChannel() {
        //select campaign and queue
        await page.getByRole('option', { name: 'OutboundCampaign_1' }).click();
        await page.getByText('InboundQueue_1').click();
        await page.getByPlaceholder('Example:').click();
        await page.getByPlaceholder('Example:').fill('999')
        await page.locator('#voice-login-submit').click()
        await page.locator('text= Call actions').toBeVisible()

    }

}
module.exports = { LoginPage };