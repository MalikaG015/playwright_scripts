const { Given, When, Then } = require('cucumber')
const { LoginPage } = require('../../page_object/login.page');
const { VoiceManagerPage } = require('../../page_object/voiceManager.page')
const { CRMPage } = require('../../page_object/crm.page')

const loginpage = new LoginPage();
const voiceManagerPage = new VoiceManagerPage();
const crmPage = new CRMPage();


// Given('As a supervisor log in to the platform', async () => {
//     await loginpage.navigate();
// })

// When('Supervisor logs in with correct email and password', async () => {
//     await loginpage.supervisorLoginToMain();
// })

When('Access the voice manager tab to configure campaign settings', async () => {
    await voiceManagerPage.configureCampaign()

})

Then('Campaign is set sucessfully', async () => {

})