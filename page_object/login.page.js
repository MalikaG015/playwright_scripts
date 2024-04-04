const { expect } = require('@playwright/test')
const BasePage = require('./base_actions.page')

/**
 * Represents the login page functionalities.
 */

class LoginPage extends BasePage {
    /**
     * Elements on the login page.
     * @type {Object}
     * @property {string} emailInput - Selector for the email input field.
     * @property {string} passwordInput - Selector for the password input field.
     */
    elements = {
        emailInput: 'input[name="email"]',
        passwordInput: 'input[name="password"]'
    }

    /**
     * Navigates to the login page.
     * @returns {Promise<void>}
     */
    async navigate() {
        await page.goto('https://qa-lab5.finesource.org/login.html'), { timeout: 50000 };
        await page.waitForLoadState('load');
    }

    /**
     * Performs supervisor login to the main page.
     * @param {string} username - The username for login.
     * @param {string} password - The password for login.
     * @returns {Promise<void>}
     */
    async userLoginToMain(username, password) {
        await this.waitForSelectorVisible(this.elements.emailInput)
        await page.fill(this.elements.emailInput, username)
        await this.waitForSelectorVisible(this.elements.passwordInput)
        await page.fill(this.elements.passwordInput, password)
        await this.waitForSelectorVisible('#btn-login')
        await page.locator('#btn-login').click()
    }

    /**
     * Verifies supervisor login to the main page.
     * @returns {Promise<void>}
     */
    async loginToMainSuccessfull() {
        await this.waitForSelectorVisible('#groupdName')
        await expect(page).toHaveURL('https://qa-lab5.finesource.org/index.php#/fs/modules/profile/profile.html');
    }

    /**
     * Creates a break.
     * @returns {Promise<void>}
     */
    async createBreak() {
        await this.waitForSelectorVisible('[data-title="Users"]')
        await page.locator('[data-title="Users"]').hover();
        await this.waitForSelectorVisible('//span[contains(text(),"Groups & users")]')
        await page.locator('//span[contains(text(),"Groups & users")]').click()
        await this.waitForSelectorVisible('//span[contains(text(),"Group_1")]')
        await page.locator('//span[contains(text(),"Group_1")]').click()
        await this.waitForSelectorVisible('//span[contains(text(),"Add break")]')
        await page.locator('//span[contains(text(),"Add break")]').click();
        await page.locator('(//input[@placeholder="Morning Breaks"])').fill('Break1');
        await page.locator('input.form-control.timepick-input.new-timepick-init.text-center.react-to-pointer-event-on-disabled[placeholder="HH:MM"]').fill('10:00');
        await page.locator('input.form-control.timepick-input.new-timepick-end.text-center.react-to-pointer-event-on-disabled[placeholder="HH:MM"]').fill('23:00');
        await page.locator('input.form-control.spinner-both.new-break-max-time.text-align-center.react-to-pointer-event-on-disabled.ui-spinner-input[placeholder="MM"]').fill('60');
        await page.locator('i.fa.fa-lock.fa-2x.new-toggle-auth.click-icons.react-to-pointer-event-on-disabled').click();
         await page.locator('#breaks-table-body').getByRole('button').first().click();
    }

    /**
     * Performs agent login to the voice channel.
     * @returns {Promise<void>}
     */
    async AgentloginToVoice() {
        await this.waitForSelectorVisible('#channel-voice-label-text')
        await page.locator('#channel-voice-label-text').getByText('Offline').click();
    }

    /**
     * Configures the voice channel.
     * @returns {Promise<void>}
     */
    async configureVoiceChannel() {
        await page.locator('//*[@id="s2id_voice-outbound-inbound-selector-select"]/a').click()
         await page.locator("//li[div[@class='select2-result-label' and contains(text(), 'OutboundCampaign_1')]]").click();
        await this.waitForSelectorVisible('//span[contains(text(),"InboundQueue_1")]')
        await page.locator('//span[contains(text(),"InboundQueue_1")]').click()
        await this.waitForSelectorVisible('#voice-login-extension')
        await page.fill('#voice-login-extension', '999')
        await page.mouse.down();
        await expect(page.locator('#voice-login-submit')).toBeVisible()
        await page.click('#voice-login-submit');
    }

    async createUnauthorizedBreak() {
        await this.waitForSelectorVisible('[data-title="Users"]')
        await page.locator('[data-title="Users"]').hover();
        await this.waitForSelectorVisible('//span[contains(text(),"Groups & users")]')
        await page.locator('//span[contains(text(),"Groups & users")]').click()
        await this.waitForSelectorVisible('//span[contains(text(),"Group_1")]')
        await page.locator('//span[contains(text(),"Group_1")]').click()
        await this.waitForSelectorVisible('//span[contains(text(),"Add break")]')
        await page.locator('//span[contains(text(),"Add break")]').click();
        await page.locator('(//input[@placeholder="Morning Breaks"])').fill('Break1');
        await page.locator('input.form-control.timepick-input.new-timepick-init.text-center.react-to-pointer-event-on-disabled[placeholder="HH:MM"]').fill('10:00');
        await page.locator('input.form-control.timepick-input.new-timepick-end.text-center.react-to-pointer-event-on-disabled[placeholder="HH:MM"]').fill('23:00');
        await page.locator('input.form-control.spinner-both.new-break-max-time.text-align-center.react-to-pointer-event-on-disabled.ui-spinner-input[placeholder="MM"]').fill('60');
        await page.locator('#breaks-table-body').getByRole('button').first().click();
    }    
}

module.exports = { LoginPage };