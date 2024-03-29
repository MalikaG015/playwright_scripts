const { expect } = require('@playwright/test')
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout=(60 * 1000);

class BreakPage {
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

    async login() {
        await page.goto('https://qa-lab5.finesource.org/login.html'), { timeout: 50000 };
        await page.waitForLoadState('load');
        await page.waitForSelector('input[name="email"]', {
            state: 'visible',
            timeout: setDefaultTimeout,
        })
        await page.fill('input[name="email"]', 'admin@tests.surbhi')
        await page.waitForSelector('input[name="password"]', {
            state: 'visible',
            timeout: setDefaultTimeout,
        })
        await page.fill('input[name="password"]', 'password123')
        await page.waitForSelector('#btn-login', {
            state: 'visible',
            timeout: setDefaultTimeout,
        })
        await page.locator('#btn-login').click()
    }
    async AddAgentToGroup() {
        await page.locator(' //span[contains(text(),"Agent One")]').click()
        await this.waitForSelectorVisible('[id="s2id_group_select"]')
        await page.locator('[id="s2id_group_select"]').click()
        await this.waitForSelectorVisible('//div[@class="select2-result-label" and contains(text(), "Group_1")]')
        await page.locator('//div[@class="select2-result-label" and contains(text(), "Group_1")]').click();
        await page.locator('span[data-translate="btn-save"]').click()
    }

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

    async breakCreatedSuccessful() {
        await page.locator('i.break-header-btn[data-translate="breaksTitle"]').click()
        await this.waitForSelectorVisible('span.menu-breaks-name[title="Break1"]')
        await expect(page.locator('span.menu-breaks-name[title="Break1"]')).toBeVisible()
    }

    async selectBreakGroup() {
        //await page.getByLabel('Groups (3) Add').locator('label').filter({ hasText: 'Group_1' }).click();
        await page.getByLabel('Groups (3) Add').getByText('Group_1').click();
    }

    async accessBreak() {
        await this.wait(10);
        await this.waitForSelectorVisible('i.break-header-btn[data-translate="breaksTitle"]')
        await page.locator('i.break-header-btn[data-translate="breaksTitle"]').click()
        await this.waitForSelectorVisible('span.menu-breaks-name[title="Break1"]')
        await page.locator('span.menu-breaks-name[title="Break1"]').click()
    }

    async authorizeBreak() {
        //steps
        //1. suerviosor login
        await this.login()
        await expect(page.locator('#box-ask-break-auth-9924a72c-f612-4764-b8ae-a60ec236ed3e')).toHaveText('/asking for breaks/')
        await page.locator('#bigBoxAuthorize').click()

    }
    async breakAppliedSuccessfully() {
        const breakElement = page.locator('a#break-id-33.jarvismetro-tile.big-cubes.break-box.break-with-permission.bg-color-blueGo.break-active');
        await expect(breakElement).toHaveCount(1);
    }
}
module.exports = { BreakPage };