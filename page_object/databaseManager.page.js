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
        await page.locator('#db_upload_file').setInputFiles(path.join('../../playwright', 'DB_GO-6564.csv'));
        await page.locator('#upload_new_db').click()
        await page.locator('#contact').selectOption('Contact Name')
        await page.locator('#first_phone').selectOption('1st phone')
        await page.locator('#email').selectOption('Email')
        await page.locator('#postal_code').selectOption('Postal Code')
        await page.locator('#city').selectOption('City')
        await page.click('#apply_matching_button')
        await page.click('//span[contains(text(),"Load Database")]')
    }

    async createDatabaseForNewFilters(){
        await page.locator('[id="menu_4"]').click()
        await page.locator('[id="new_db_button"]').click()
        await page.fill('#new_db_name', 'Database_1')
        await page.click('#new_db_campaign_select');
        await page.selectOption('#new_db_campaign_select', { label: 'OutboundCampaign_1' });
        await page.locator('#db_upload_file').setInputFiles(path.join('../../playwright', 'DB_GOTEST-6364.csv'));
        await page.locator('#upload_new_db').click()
        await page.locator('#contact').selectOption('Contact Name')
        await page.locator('#first_phone').selectOption('1st phone')
        await page.locator('#email').selectOption('Email')
        await page.locator('#postal_code').selectOption('Postal Code')
        await page.locator('#city').selectOption('City')
        await page.click('#apply_matching_button')
        await page.click('//span[contains(text(),"Load Database")]')
        

    }

}
module.exports = { DatabaseManagerPage }
