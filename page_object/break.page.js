const { expect } = require('@playwright/test')
const BasePage = require('./base_actions.page')

/**
 * Represents functionalities related to breaks management.
 */
class BreakPage extends BasePage {

    /**
     * Adds an agent to a group.
     * @returns {Promise<void>}
     */
    async AddAgentToGroup() {
        await page.click(' //span[contains(text(),"Agent One")]')
        await this.waitForSelectorVisible('[id="s2id_group_select"]')
        await page.click('[id="s2id_group_select"]')
        await this.waitForSelectorVisible('//div[@class="select2-result-label" and contains(text(), "Group_1")]')
        await page.click('//div[@class="select2-result-label" and contains(text(), "Group_1")]')
        await page.click('span[data-translate="btn-save"]')
    }

    /**
     * Adds a supervisor to a group.
     * @returns {Promise<void>}
     */
    async AddSupervisorToGroup() {
        await this.waitForSelectorVisible('span[data-translate="user-nav-title"]')
        await page.click('span[data-translate="user-nav-title"]')
        await page.click('//span[contains(text(),"Supervisor One")]')
        await this.waitForSelectorVisible('[id="s2id_group_select"]')
        await page.click('[id="s2id_group_select"]')
        await this.waitForSelectorVisible('//div[@class="select2-result-label" and contains(text(), "Group_1")]')
        await page.click('//div[@class="select2-result-label" and contains(text(), "Group_1")]')
        await page.click('span[data-translate="btn-save"]')
    }

    /**
     * Checks if break is created successfully.
     * @returns {Promise<void>}
     */
    async breakCreatedSuccessful() {
        await page.click('i.break-header-btn[data-translate="breaksTitle"]')
        await this.waitForSelectorVisible('span.menu-breaks-name[title="Break1"]')
        await expect(page.locator('span.menu-breaks-name[title="Break1"]')).toBeVisible()
    }

    /**
     * Selects a break group.
     * @returns {Promise<void>}
     */
    async selectBreakGroup() {
        await page.getByLabel('Groups (3) Add').getByText('Group_1').click();
    }

    /**
     * Accesses a break.
     * @returns {Promise<void>}
     */
    async accessBreak() {
        await this.wait(10);
        await this.waitForSelectorVisible('i.break-header-btn[data-translate="breaksTitle"]')
        await page.click('i.break-header-btn[data-translate="breaksTitle"]')
        await this.waitForSelectorVisible('span.menu-breaks-name[title="Break1"]')
        await page.click('span.menu-breaks-name[title="Break1"]')
    }

    /**
     * Checks if break is applied successfully and console the status.
     * @returns {Promise<void>}
     */
    async breakAppliedSuccessfully() {
        const breakElement = await page.$('span.menu-breaks-name:has-text("Break1")');
        if (breakElement) {
            console.log("Break1 is active.");
        }
        else {
            console.log("Break1 not active.");
        }
    }
    
}
module.exports = { BreakPage };