const { expect } = require('@playwright/test')
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout = (60 * 1000);

class DashboardPage{
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
    async accsessDashboardPage(){
        await this.wait(1)
        await this.waitForSelectorVisible('[data-title="Real Time Tools"]')
        await page.locator('[data-title="Real Time Tools"]').hover();
        await this.waitForSelectorVisible('//span[contains(text(),"Dashboards")]')
        await page.locator('//span[contains(text(),"Dashboards")]').click()

    }
    async accessAgentTab(){
        await page.click('#agents-tab')
    }

    async accessTicketTab(){
        await page.click('#tickets-tab')
    }

    async checkIdleState() {
        const agentStateElement = await page.locator('//td[contains(text(),"Idle")]');
        const agentState = await agentStateElement.textContent();
        return expect(agentState).toBe('Idle');
    }
}

module.exports={DashboardPage}