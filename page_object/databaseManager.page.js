const path = require('path');
const BasePage = require('./base_actions.page')

/**
 * Represents functionalities related to managing databases.
 */
class DatabaseManagerPage extends BasePage {

    /**
     * Helper function to create a new database.
     * @param {string} fileName - The name of the CSV file to upload.
     * @returns {Promise<void>}
     */
    async createNewDatabase(fileName){
        await page.locator('[id="menu_4"]').click()
        await page.locator('[id="new_db_button"]').click()
        await page.fill('#new_db_name', 'Database_1')
        await page.click('#new_db_campaign_select');
        await page.selectOption('#new_db_campaign_select', { label: 'OutboundCampaign_1' });
        await page.locator('#db_upload_file').setInputFiles(path.join('../../playwright', fileName));
        await page.locator('#upload_new_db').click()
        await page.locator('#contact').selectOption('Contact Name')
        await page.locator('#first_phone').selectOption('1st phone')
        await page.locator('#email').selectOption('Email')
        await page.locator('#postal_code').selectOption('Postal Code')
        await page.locator('#city').selectOption('City')
        await page.click('#apply_matching_button')
        await page.click('//span[contains(text(),"Load Database")]')
    }
    /**
     * Creates a new database.
     * @returns {Promise<void>}
     */
    async createDatabase() {
        await this.createNewDatabase('DB_GO-6564.csv');
    }

    /**
     * Creates a new database for new filters.
     * @returns {Promise<void>}
     */
    async createDatabaseForNewFilters() {
        await this.createNewDatabase('DB_GOTEST-6364.csv');
    }
}
module.exports = { DatabaseManagerPage }
