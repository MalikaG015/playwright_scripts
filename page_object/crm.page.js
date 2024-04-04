const { expect } = require('@playwright/test')
const BasePage = require('./base_actions.page')

/**
 * Represents functionalities related to CRM operations.
 */
class CRMPage extends BasePage {

  /**
   * Checks CRM functionalities.
   * @returns {Promise<void>}
   */
  async checkCRM() {
    await this.waitForSelectorVisible('[id="menu_5"]')
    await page.locator('[id="menu_5"]').hover()
    await page.click('#menu_20')
    await this.waitForSelectorVisible('#owner-type-div label')
    await page.click('#owner-type-div label').filter({ hasText: 'Outbound' }).locator('i')
    await page.click('[id="s2id_select_campaign"]')
    await page.getByRole('option', { name: 'OutboundCampaign_1' }).click()
    await page.click('label').filter({ hasText: 'Calls' }).locator('i')
    await page.waitForLoadState('load');
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0,10);
    await page.fill('#startDate', formattedDate)
    await page.keyboard.press('Enter');
    await page.fill('#endDate', formattedDate)
    await page.keyboard.press('Enter');
    const submitButton = await page.$$('button[type="submit"]');
    await submitButton[1].click();
  }

  /**
   * Checks if call is registered successfully.
   * @returns {Promise<void>}
   */
  async callRegisteredSuccessfully() {
    await expect(page.locator('//*[@id="table_search_result_calls"]/tbody')).toHaveCount(1)
  }
}
module.exports = { CRMPage }