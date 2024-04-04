
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout = (60 * 1000);

class BasePage {
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
}

module.exports = BasePage;
