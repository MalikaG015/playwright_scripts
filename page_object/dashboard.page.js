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
     * Accesses the webchat tab.
     * @returns {Promise<void>}
     */
    async accessWebchatTab(){
        await page.click('#webchat-tab')
    }

    /**
     * Checks if the agent is in idle state.
     * @returns {Promise<expect>}
     */
    async checkIdleStateForTicket() {
        const agentStateElement = await page.locator('//td[contains(text(),"Idle")]');
        const agentState = await agentStateElement.textContent();
        return expect(agentState).toBe('Idle');
    }

    async checkIdleStateForWebchat() {
        const agentStateElement = await page.$('tr.odd td:nth-child(2)');
        const agentState = await agentStateElement[2].textContent();
        return expect(agentState).toBe('Idle');
    }

    /**
     * Configures the dialer control.
     * @returns {Promise<void>}
     */
    async configureDialerControl() {
        await this.waitForSelectorVisible('a[data-title="Real Time Tools"]')
        await page.locator('a[data-title="Real Time Tools"]').hover()
        await page.click('//span[contains(text(),"Dialer control")]')
        await this.wait(3)
        // creating Filter-1
        await this.waitForSelectorVisible('#dialer-control-add-filter-group')
        await page.click('#dialer-control-add-filter-group')
        await page.click('//span[@id="dropdonw-caret"]')
        // const dropdownForDatabase = await page.$$('//span[@id="dropdonw-caret"]');
        // await dropdownForDatabase[0].click();
        const disbleAllOptionFromDatabase = await page.$$('//b[contains(text(),"All")]');
        await disbleAllOptionFromDatabase[0].click()
        const elements = await page.$$('.dropdown-option-text');
        const thirdElement = elements[2];
        await thirdElement.click();
        await page.mouse.click(100, 100);
        const selectFieldForFilter1 = await page.$$('div.select2-container');
        await selectFieldForFilter1[0].click()
        const clickonSearchforFilter1 = await page.$$('.select2-search');
         await clickonSearchforFilter1[3].click()
         const selectedFieldForFilter1 = await page.$('div.select2-result-label:has-text("Time of day")');
        await selectedFieldForFilter1.click()
        await this.waitForSelectorVisible('[class="dialer-control-filter-hour-1 form-control input"]')
        await page.fill('[class="dialer-control-filter-hour-1 form-control input"]', '00:00')
        await this.waitForSelectorVisible('[class="dialer-control-filter-hour-2 form-control input"]')
        await page.fill('[class="dialer-control-filter-hour-2 form-control input"]', '23:59')
        await page.click('#dialer-control-add-filter-0')
 
        // creating Filter-2
        const dropdownForDatabase1 = await page.$$('//span[@id="dropdonw-caret"]');
         await dropdownForDatabase1[1].click();
         const disbleAllOptionFromDatabase1 = await page.$$('//b[contains(text(),"All")]');
         await disbleAllOptionFromDatabase1[1].click()
         const elements1 = await page.$$('.dropdown-option-text');
         const sixthElement = elements1[5];
         await sixthElement.click()
         await page.mouse.click(100, 100);
         const selectField = await page.$$('div.select2-container');
         await selectField[2].click()
         const clickonSearchForFilter2 = await page.$$('.select2-search');
         await clickonSearchForFilter2[5].click()
         const selectedField1 = await page.$('div.select2-result-label:has-text("City")');
        await selectedField1.click()
        const inputElement = await page.$('input.dialer-control-filter-string');
         await inputElement.type('Lisboa');
         await page.click('#dialer-control-add-filter-0')

         //creating filter-3
         const dropdownForDatabase2 = await page.$$('//span[@id="dropdonw-caret"]');
         await dropdownForDatabase2[2].click();
         const disbleAllOptionFromDatabase2 = await page.$$('//b[contains(text(),"All")]');
         await disbleAllOptionFromDatabase2[2].click()
         const elements2 = await page.$$('.dropdown-option-text');
         const ninthElement = elements2[8];
         await ninthElement.click()
         await page.mouse.click(100, 100);
         const filterType = await page.$$('[class="select2-container dialer-control-filter-type required"]')
         await filterType[1].click()
         const clickonSearchforFilter3 = await page.$$('.select2-search');
         await clickonSearchforFilter3[7].click()
         const selectedField2 = await page.$('div.select2-result-label:has-text("Started by")');
        await selectedField2.click()
        const dataForFilter3 = await page.$$('[class="dialer-control-filter-string form-control input"]');
        await dataForFilter3[2].type('1');
        await page.click('#dialer-control-filter-save')
        await page.click('#dialer-control-submit-filters')
    }
    
    async previewHopper() {
        await this.waitForSelectorVisible('a[data-title="Real Time Tools"]')
        await page.locator('a[data-title="Real Time Tools"]').hover()
        await page.click('//span[contains(text(),"Dialer control")]')
        await this.wait(5)
        await this.waitForSelectorVisible('[id="dialer-control-filter-preview"]')
        await page.click('[id="dialer-control-filter-preview"]')
        const button = await page.$('button[data-dismiss="modal"][aria-hidden="true"][data-translate="close"]')
        await button.click()
    }

    async configureFilters() {
        console.log('aaaaaaaaaaaa')
        await this.waitForSelectorVisible('a[data-title="Real Time Tools"]')
        await page.locator('a[data-title="Real Time Tools"]').hover()
        await page.click('//span[contains(text(),"Dialer control")]')
        await this.wait(3)
        await this.waitForSelectorVisible('#dialer-control-add-filter-group')
        await page.click('#dialer-control-add-filter-group')
        await page.click('//span[@id="dropdonw-caret"]')
        await page.click('//b[contains(text(),"All")]')
        const elements1 = await page.$$('.dropdown-option-text');
        const thirdElement = elements1[2];
        await thirdElement.click()
        await page.mouse.click(100, 100);
        const clickonSearchForFilter = await page.$$('[class="select2-choice"]');
        await clickonSearchForFilter[1].click()
        const clickonSearchforFilter = await page.$$('.select2-search');
         await clickonSearchforFilter[3].click()
         const selectedField = await page.$('div.select2-result-label:has-text("Not started by")');
        await selectedField.click()
        const inputElement = await page.$('input.dialer-control-filter-string');
        await inputElement.type('1')
        await page.click('#dialer-control-filter-save')
        await page.click('#dialer-control-submit-filters')
    }
}

module.exports={DashboardPage}

