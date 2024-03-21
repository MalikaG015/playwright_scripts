const { expect } = require('@playwright/test')
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout=(60 * 1000);

class LoginPage {
    //restrucure, js doc, datatype, return type, params
    elements = {
        emailInput: 'input[name="email"]',
        passwordInput: 'input[name="password"]'
    }
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

    async navigate() {
        await page.goto('https://qa-lab5.finesource.org/login.html'), { timeout: 50000 };
        await page.waitForLoadState('load');
    }

    async supervisorLoginToMain() {
        await page.waitForSelector(this.elements.emailInput, {
            state: 'visible',
            timeout: setDefaultTimeout,
        })
        await page.fill(this.elements.emailInput, 'admin@tests.surbhi')
        await page.waitForSelector(this.elements.passwordInput, {
            state: 'visible',
            timeout: setDefaultTimeout,
        })
        await page.fill(this.elements.passwordInput, 'password123')
        await page.waitForSelector('#btn-login', {
            state: 'visible',
            timeout: setDefaultTimeout,
        })
        await page.locator('#btn-login').click()
    }

    async supervisorLoginToMainSuccessfull() {
        await page.waitForSelector('#groupdName', {
            state: 'visible',
            timeout: setDefaultTimeout,
        });
        await expect(page).toHaveURL('https://qa-lab5.finesource.org/index.php#/fs/modules/profile/profile.html');
    }

    async AgentloginToMain() {
        await page.waitForSelector('input[name="email"]', {
            state: 'visible',
            timeout: setDefaultTimeout,
        })
        await page.fill('input[name="email"]', 'Agent_1@tests.surbhi')
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
    async agentLoginToMainSuccessfull() {
        await page.waitForSelector('#groupdName', {
            state: 'visible',
            timeout: setDefaultTimeout,
        });
        await expect(page).toHaveURL('https://qa-lab5.finesource.org/index.php#/fs/modules/profile/profile.html');
    }
    async createBreak() {
        await page.waitForSelector('[data-title="Users"]', {
            state: 'visible',
            timeout: setDefaultTimeout,
        })
        await page.locator('[data-title="Users"]').hover();
        await page.waitForSelector('//span[contains(text(),"Groups & users")]', {
            state: 'visible',
            timeout: setDefaultTimeout,
        })
        await page.locator('//span[contains(text(),"Groups & users")]').click()
       // await page.waitForNavigation({waitUntil:"networkidle0"})
        await page.waitForSelector('//span[contains(text(),"Group_1")]', {
            state: 'visible',
            timeout: setDefaultTimeout,
            //waitUntil: 'networkidle0',
        });

        await page.locator('//span[contains(text(),"Group_1")]').click()

        await page.waitForSelector('//span[contains(text(),"Add break")]', {
            state: 'visible',
            timeout: setDefaultTimeout,
        });
        await page.locator('//span[contains(text(),"Add break")]').click();
        await page.locator('(//input[@placeholder="Morning Breaks"])').fill('Break1');
        await page.locator('input.form-control.timepick-input.new-timepick-init.text-center.react-to-pointer-event-on-disabled[placeholder="HH:MM"]').fill('10:00');
        await page.locator('input.form-control.timepick-input.new-timepick-end.text-center.react-to-pointer-event-on-disabled[placeholder="HH:MM"]').fill('23:00');
        await page.locator('input.form-control.spinner-both.new-break-max-time.text-align-center.react-to-pointer-event-on-disabled.ui-spinner-input[placeholder="MM"]').fill('60');
        await page.locator('i.fa.fa-lock.fa-2x.new-toggle-auth.click-icons.react-to-pointer-event-on-disabled').click();
         await page.locator('#breaks-table-body').getByRole('button').first().click();
    }

    
    async AgentloginToVoice() {
        await page.waitForSelector('#channel-voice-label-text', {
            state: 'visible',
            timeout: setDefaultTimeout,
        });
        await page.locator('#channel-voice-label-text').getByText('Offline').click();
    }

    async configureVoiceChannel() {
        await page.locator('//*[@id="s2id_voice-outbound-inbound-selector-select"]/a').click()
         await page.locator("//li[div[@class='select2-result-label' and contains(text(), 'OutboundCampaign_1')]]").click();
        await this.waitForSelectorVisible('//span[contains(text(),"InboundQueue_1")]')
        await page.locator('//span[contains(text(),"InboundQueue_1")]').click()
        await this.waitForSelectorVisible('#voice-login-extension')
        await page.fill('#voice-login-extension', '999')
        await page.mouse.down();
        await expect(page.locator('#voice-login-submit')).toBeVisible()
        await page.click('#voice-login-submit');
    }
}

module.exports = { LoginPage };