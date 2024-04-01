const { expect } = require('@playwright/test')
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout = (60 * 1000);

/**
 * Represents the functionalities related to ticket management.
 */
class TicketPage{

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
     * Accesses the ticket channel.
     * @returns {Promise<void>}
     */
    async accessTicketChannel(){
        await page.click('[id="channel-tickets-connection-toggle"]')

    }
}
module.exports={TicketPage}