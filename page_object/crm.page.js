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
        // await this.waitForSelectorVisible('span.menu-item-parent[data-translate="mainMenu.crm"]')
        // await page.locator('span.menu-item-parent[data-translate="mainMenu.crm"]').click()
        await page.locator('#menu_20').click();
        //await this.wait(2)
        await this.waitForSelectorVisible('#owner-type-div label')
        await page.locator('#owner-type-div label').filter({ hasText: 'Outbound' }).locator('i').click();
        await page.click('[id="s2id_select_campaign"]')
        await page.getByRole('option', { name: 'OutboundCampaign_1' }).click();
         await page.locator('label').filter({ hasText: 'Calls' }).locator('i').click();
        await page.mouse.down();
        await page.fill('#startDate','2024-03-21')
        await page.fill('#endDate','2024-03-21')
        //await page.mouse.down();
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await this.waitForSelectorVisible('span[data-translate="search"]:nth-of-type(1)')
        await page.click('span[data-translate="search"]:nth-of-type(1)')
        //await page.click('button.btn.btn-primary > span[data-translate="search"]')
        //await page.locator('li:has-text("OutboundCampaign_1")')

    }

}
module.exports = { CRMPage }
// await page.getByLabel('Enter your password').fill('password123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.goto('https://qa-lab5.finesource.org/index.php#/fs/modules/profile/profile.html');
//   await page.getByRole('button', { name: 'Keep current session' }).click();
//   await page.locator('#menu_20').click();
//   await page.locator('#owner-type-div label').filter({ hasText: 'Outbound' }).locator('i').click();
//   await page.getByLabel('No results foundNo results foundNo results foundOutboundCampaign_1OutboundCampaign_2OutboundCampaign_3OutboundCampaign_4', { exact: true }).click();
//   await page.getByRole('option', { name: 'OutboundCampaign_1' }).click();
//   await page.getByPlaceholder('Start Date').click();
//   await page.getByText('1', { exact: true }).first().click();
//   await page.getByPlaceholder('End Date').click();
//   await page.getByText('2', { exact: true }).nth(2).click();