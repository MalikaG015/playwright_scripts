const { expect } = require('@playwright/test')
var { setDefaultTimeout } = require('cucumber');
const path = require('path');
setDefaultTimeout = (60 * 1000);

/**
 * Represents functionalities related to managing databases.
 */
class DatabaseManagerPage {

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
     * Creates a new database.
     * @returns {Promise<void>}
     */
    async createDatabase(){
        await page.locator('[id="menu_4"]').click()
        await page.locator('[id="new_db_button"]').click()
        await page.fill('#new_db_name', 'Database_1')
        await page.click('#new_db_campaign_select');
        await page.selectOption('#new_db_campaign_select', { label: 'OutboundCampaign_1' });
        await page.locator('#db_upload_file').setInputFiles(path.join('../../playwright', 'contacts_to_import.csv'));
        await page.locator('#upload_new_db').click()
        await page.locator('#contact').selectOption('FNAME')
        await page.locator('#first_phone').selectOption('CELL')
        await page.locator('#email').selectOption('EMAIL')
        await page.locator('#city').selectOption('CITY')
        await page.locator('#postal_code').selectOption('POSTAL CODE')
        await page.click('#apply_matching_button')
        await page.click('//span[contains(text(),"Load Database")]')
    }

}
module.exports = { DatabaseManagerPage }
