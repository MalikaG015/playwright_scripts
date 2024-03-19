const { expect } = require('@playwright/test')

class BreakPage {

    async login(username, password) {
        console.log('login=======================')
        await page.fill('#email', username);
        await page.fill('#password', password);
        await page.locator('#btn-login').click()
    }
    async AddAgentToGroup() {
        await page.getByText('Agent One').click();
        await page.getByRole('link', { name: 'Group_1' }).click();
        await page.getByRole('option', { name: 'Group_1' }).click();
        await page.locator('//body[1]/div[2]/div[2]/div[1]/div[2]/article[2]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/button[1]/span[1]').click()
        await expect(page.locator('#divbigBoxes')).toHaveText('Agent saved')
    }

    async AddSupervisorToGroup() {
        await page.getByText('Supervisor One').click();
        await page.getByRole('link', { name: 'Group_1' }).click();
        await page.getByRole('option', { name: 'Group_1' }).click();
        await page.locator('//body[1]/div[2]/div[2]/div[1]/div[2]/article[2]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/button[1]/span[1]').click()
        await expect(page.locator('#divbigBoxes')).toHaveText('Agent saved')
    }


    async breakCreatedSuccessful() {
        await page.locator('text=Break1').toHaveCount(1)

    }
    async selectBreakGroup() {
        //await page.getByLabel('Groups (3) Add').locator('label').filter({ hasText: 'Group_1' }).click();
        await page.getByLabel('Groups (3) Add').getByText('Group_1').click();
    }

    async accessBreak() {
        //steps
        //  1. click on mug button
        //  2. Click on break
        await page.locator('//body[1]/header[1]/span[2]/div[5]/span[1]/a[1]/i[1]').click()
        await page.locator('#break-id-1').click()
    }

    async authorizeBreak() {
        await expect(page.locator('#box-ask-break-auth-9924a72c-f612-4764-b8ae-a60ec236ed3e')).toHaveText('/asking for breaks/')
        await page.locator('#bigBoxAuthorize').click()

    }
    async breakAppliedSuccessfully() {
        await page.locator('text=your break was authorised').toBeVisible()
    }

    // async AgentOnBreakManager() {

    // }



}
module.exports = { BreakPage };