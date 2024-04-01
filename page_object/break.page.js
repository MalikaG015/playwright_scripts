const { expect } = require('@playwright/test')
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout = (60 * 1000);

/**
 * Represents functionalities related to breaks management.
 */
class BreakPage {
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
     * Adds an agent to a group.
     * @returns {Promise<void>}
     */
    async AddAgentToGroup() {
        await page.locator(' //span[contains(text(),"Agent One")]').click()
        await this.waitForSelectorVisible('[id="s2id_group_select"]')
        await page.locator('[id="s2id_group_select"]').click()
        await this.waitForSelectorVisible('//div[@class="select2-result-label" and contains(text(), "Group_1")]')
        await page.locator('//div[@class="select2-result-label" and contains(text(), "Group_1")]').click();
        await page.locator('span[data-translate="btn-save"]').click()
    }

    /**
     * Adds a supervisor to a group.
     * @returns {Promise<void>}
     */
    async AddSupervisorToGroup() {
        await this.waitForSelectorVisible('span[data-translate="user-nav-title"]')
        await page.locator('span[data-translate="user-nav-title"]').click()
        await page.locator('//span[contains(text(),"Supervisor One")]').click()
        await this.waitForSelectorVisible('[id="s2id_group_select"]')
        await page.locator('[id="s2id_group_select"]').click()
        await this.waitForSelectorVisible('//div[@class="select2-result-label" and contains(text(), "Group_1")]')
        await page.locator('//div[@class="select2-result-label" and contains(text(), "Group_1")]').click();
        await page.locator('span[data-translate="btn-save"]').click()
        //await this.waitForSelectorVisible('#divbigBoxes')
        // await expect(page.locator('#divbigBoxes')).toHaveText('/Agent saved/')
    }

    /**
     * Checks if break is created successfully.
     * @returns {Promise<void>}
     */
    async breakCreatedSuccessful() {
        await page.locator('i.break-header-btn[data-translate="breaksTitle"]').click()
        await this.waitForSelectorVisible('span.menu-breaks-name[title="Break1"]')
        await expect(page.locator('span.menu-breaks-name[title="Break1"]')).toBeVisible()
    }

    /**
     * Selects a break group.
     * @returns {Promise<void>}
     */
    async selectBreakGroup() {
        //await page.getByLabel('Groups (3) Add').locator('label').filter({ hasText: 'Group_1' }).click();
        await page.getByLabel('Groups (3) Add').getByText('Group_1').click();
    }

    /**
     * Accesses a break.
     * @returns {Promise<void>}
     */
    async accessBreak() {
        await this.wait(10);
        await this.waitForSelectorVisible('i.break-header-btn[data-translate="breaksTitle"]')
        await page.locator('i.break-header-btn[data-translate="breaksTitle"]').click()
        await this.waitForSelectorVisible('span.menu-breaks-name[title="Break1"]')
        await page.locator('span.menu-breaks-name[title="Break1"]').click()
    }

    /**
     * Checks if break is applied successfully.
     * @returns {Promise<void>}
     */
    async breakAppliedSuccessfully() {
        const breakElement = page.locator('a#break-id-33.jarvismetro-tile.big-cubes.break-box.break-with-permission.bg-color-blueGo.break-active');
        await expect(breakElement).toHaveCount(1);
    }
}
module.exports = { BreakPage };