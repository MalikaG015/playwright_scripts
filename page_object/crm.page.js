const { expect } = require('@playwright/test')
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout = (60 * 1000);

class CRMPage {
    async wait(time) {
        return new Promise(function (resolve) {
          setTimeout(resolve, time * 1000);
        });
      }

      async waitForSelectorVisible(selector) {
        await page.waitForSelector(selector, {
            state: 'visible',
            timeout: setDefaultTimeout,
        });
    }

    async checkCRM(){
        await this.waitForSelectorVisible('[id="menu_5"]')
        await page.locator('[id="menu_5"]').hover();
        await page.locator('#menu_20').click();
        await this.waitForSelectorVisible('#owner-type-div label')
        await page.locator('#owner-type-div label').filter({ hasText: 'Outbound' }).locator('i').click();
        await page.click('[id="s2id_select_campaign"]')
        await page.getByRole('option', { name: 'OutboundCampaign_1' }).click();
         await page.locator('label').filter({ hasText: 'Calls' }).locator('i').click();
         await page.waitForLoadState('load');
         await page.evaluate(() => {
          window.scrollTo(0, document.body.scrollHeight);
      });
        await page.fill('#startDate','2024-03-21')
        await this.wait(2)
        await page.fill('#endDate','2024-03-21')
        await this.waitForSelectorVisible('span[data-translate="search"]:nth-of-type(1)')
        await page.click('span[data-translate="search"]:nth-of-type(1)')
    }

    async callRegisteredSuccessfully(){
      await expect(page.locator('//*[@id="table_search_result_calls"]/tbody')).toHaveCount(1)
    }

}
module.exports = { CRMPage }