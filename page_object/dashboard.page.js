const { expect } = require('@playwright/test')
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout = (60 * 1000);

/**
 * Represents the functionalities related to the dashboard.
 */
class DashboardPage{

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
     * Accesses the dashboard page.
     * @returns {Promise<void>}
     */
    async accessDashboardPage(){
        await this.wait(1)
        await this.waitForSelectorVisible('[data-title="Real Time Tools"]')
        await page.locator('[data-title="Real Time Tools"]').hover();
        await this.waitForSelectorVisible('//span[contains(text(),"Dashboards")]')
        await page.locator('//span[contains(text(),"Dashboards")]').click()

    }

    /**
     * Accesses the agent tab.
     * @returns {Promise<void>}
     */
    async accessAgentTab(){
        await page.click('#agents-tab')
    }

    /**
     * Accesses the ticket tab.
     * @returns {Promise<void>}
     */
    async accessTicketTab(){
        await page.click('#tickets-tab')
    }

    /**
     * Checks if the agent is in idle state.
     * @returns {Promise<expect>}
     */
    async checkIdleState() {
        const agentStateElement = await page.locator('//td[contains(text(),"Idle")]');
        const agentState = await agentStateElement.textContent();
        return expect(agentState).toBe('Idle');
    }

    /**
     * Configures the dialer control.
     * @returns {Promise<void>}
     */
    async configureDialerControl(){
        await this.waitForSelectorVisible('a[data-title="Real Time Tools"]')
        await page.locator('a[data-title="Real Time Tools"]').hover()
        await page.click('//span[contains(text(),"Dialer control")]')
        await this.wait(5)
        await this.waitForSelectorVisible('#dialer-control-add-filter-group')
        await page.click('#dialer-control-add-filter-group')
        await page.locator('//span[@id="dropdonw-caret"]').click()
        await page.click('//b[contains(text(),"All")]')
        const elements = await page.$$('.dropdown-option-text'); 
        const thirdElement = elements[2]; 
        await thirdElement.click();
        await page.mouse.click(100, 100);
        const firstElement = await page.$('.select2-arrow'); 
        await firstElement.click();


       //await page.click('div[class^="select2-container"][class*="dialer-control-filter-fields"]')
       await page.selectOption('div[class^="select2-container"][class*="dialer-control-filter-fields"]', { label: 'Time of day' });

        // const element = await page.$('.select2-result-label');
        // const text = await element.innerText();
        // if (text.includes('Time of day')) {
        //     await element.click(); 
        // }    
        
        // const inputElement = await page.$('.dialer-control-filter-hour-1');
        // await inputElement.fill('00:00');

        // const inputElement2 = await page.$('.dialer-control-filter-hour-2');
        // await inputElement2.fill('23:59');

        // await page.click('#dialer-control-add-filter-0')
    }
}

module.exports={DashboardPage}

