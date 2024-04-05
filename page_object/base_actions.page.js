
var { setDefaultTimeout } = require('cucumber');
const path = require('path');
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
     * @param {Page} page - The page to wait on.
     * @param {string} selector - The selector to wait for.
     * @returns {Promise<void>}
     */
    async waitForSelectorVisible(page, selector) {
        await page.waitForSelector(selector, {
            state: 'visible',
            timeout: setDefaultTimeout,
        });
    }

    async setupBrowserContext(scenario) {
        if (global.browser) {
            global.agentContext = await global.browser.newContext({
                recordVideo: {
                    dir: path.join('videos', 'agent')
                }
            });
            global.agentPage = await global.agentContext.newPage();

            global.supervisorContext = await global.browser.newContext({
                recordVideo: {
                    dir: path.join('videos', 'supervisor')
                }
            });
            global.supervisorPage = await global.supervisorContext.newPage();
        } else {
            throw new Error('Browser not initialized!');
        }
    }

    async closeBrowserContext() {
        if (global.agentPage) {
            await global.agentPage.close();
        }
        if (global.agentContext) {
            await global.agentContext.close();
        }
        if (global.supervisorPage) {
            await global.supervisorPage.close();
        }
        if (global.supervisorContext) {
            await global.supervisorContext.close();
        }
    }
}

module.exports = BasePage;