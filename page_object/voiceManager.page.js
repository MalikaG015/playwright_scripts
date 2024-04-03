const { expect } = require('@playwright/test')
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout = (60 * 1000);

/**
 * Represents the functionalities related to voice management.
 */
class VoiceManagerPage {

    /**
     * Waits for a specified time.
     * @param {number} time - The time to wait in seconds.
     * @returns {Promise<void>}
     */
    async wait(time) {
        return new Promise(function (resolve) {
            setTimeout(resolve, time * 1000);
        });
    }

    /**
     * Waits for a selector to be visible on the page.
     * @param {string} selector - The selector to wait for.
     * @returns {Promise<void>}
     */
    async waitForSelectorVisible(selector) {
        await page.waitForSelector(selector, {
            state: 'visible',
            timeout: setDefaultTimeout,
        });

    }
    /**
     * Configures the voice campaign.
     * @returns {Promise<void>}
     */
    async configureCampaign() {
        await this.waitForSelectorVisible('[data-title="Voice Manager"]')
        await page.locator('[data-title="Voice Manager"]').hover();
        await this.waitForSelectorVisible('//span[contains(text(),"Voice manager")]')
        await page.locator('//span[contains(text(),"Voice manager")]').click()
        await page.click('//body[1]/div[2]/div[2]/div[1]/div[2]/section[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[2]/div[3]/table[1]/tbody[1]/tr[1]/td[6]/button[1]')
        await this.wait(2)
        await this.waitForSelectorVisible('span[data-translate="dialer"]')
        await page.click('span[data-translate="dialer"]')
        await this.wait(2)
        await page.click('//*[@id="s2id_dialer-type-select"]')
        await page.click('//div[contains(text(),"Manual")]')
        await page.click('#finish-campaign')
        await page.click('#bot2-Msg1')
    }

    /**
     * Checks if the campaign is configured successfully.
     * @returns {Promise<void>}
     */
    async campaignConfiguredSuccessfully() {
        await expect(page.locator('//div[@id="divbigBoxes"]')).toHaveText('Updating campaignThe campaign \"OutboundCampaign_1\" was successfully updated.')
    }
    
    /**
     * Checks if the campaign is configured successfully.
     * @returns {Promise<void>}
     */
    async makeCall(){
        await page.click('#voiceControls-manual')
        const textBox = await page.$('.popover.fade.bottom.in input[type="text"]');
        await textBox.fill('9760719000');
        await page.keyboard.press('Enter');
        await this.waitForSelectorVisible('#voice-field-first_phone-btn')
        await page.click('#voice-field-first_phone-btn')
        await page.click('#voiceControls-close')
    }

    async makeCallWithDesiredNumber(){
        await this.wait(13)
        await page.click('#voiceControls-manual')
        const textBox = await page.$('.popover.fade.bottom.in input[type="text"]');
        await textBox.fill('990000003');
        await page.keyboard.press('Enter');
        await this.waitForSelectorVisible('#voice-field-first_phone-btn')
        await page.click('#voice-field-first_phone-btn')
        await page.click('#voiceControls-close')
    }

    /**
     * Selects the outcome of the call.
     * @returns {Promise<void>}
     */
    async selectOutcome(){
        await this.waitForSelectorVisible('//button[contains(text(),"Call Again Later")]')
        await page.click('//button[contains(text(),"Call Again Later")]')
        await page.click("//label[@class='radio' and normalize-space() = 'Ok']")
        await page.click('#voice-outcomes-submit')
    }

    /**
     * Selects the Power Preview dialer for the campaign.
     * @returns {Promise<void>}
     */
    async selectPowerPreviewDialer(){
        await this.waitForSelectorVisible('[data-title="Voice Manager"]')
        await page.locator('[data-title="Voice Manager"]').hover();
        await this.waitForSelectorVisible('//span[contains(text(),"Voice manager")]')
        await page.locator('//span[contains(text(),"Voice manager")]').click()
        await page.click('//body[1]/div[2]/div[2]/div[1]/div[2]/section[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[2]/div[3]/table[1]/tbody[1]/tr[1]/td[6]/button[1]')
        await this.wait(2)
        await this.waitForSelectorVisible('span[data-translate="dialer"]')
        await page.click('span[data-translate="dialer"]')
        await this.wait(2)
        await page.click('//*[@id="s2id_dialer-type-select"]')
        await page.click('//div[contains(text(),"Power Preview")]')
        await page.click('#finish-campaign')
        await page.click('#bot2-Msg1')
    }

    async powerPreviewCall(){
        await page.click('#voice-field-first_phone-btn')
        await page.click('#voiceControls-close')
    }
}

module.exports = { VoiceManagerPage }