const { Given, When, Then } = require('cucumber')
const { BreakPage } = require('../../page_object/break.page')
const { LoginPage } = require('../../page_object/login.page');
const { VoiceManagerPage } = require('../../page_object/voiceManager.page')
const { CRMPage } = require('../../page_object/crm.page')
const { TicketPage }=require('../../page_object/ticket.page')
const { DashboardPage}= require('../../page_object/dashboard.page')
const { DatabaseManagerPage }= require('../../page_object/databaseManager.page')

const voiceManagerPage = new VoiceManagerPage();
const databaseManagerPage =new DatabaseManagerPage();
const dashboardPage=new DashboardPage();
const ticketPage= new TicketPage();
const crmPage = new CRMPage();
const breakpage = new BreakPage();
const loginpage = new LoginPage();

Given('As a supervisor log in to the platform', async () => {
   await loginpage.navigate();
});

When('Supervisor logs in with correct email {string} and password {string}', async (username, password) => {
   await loginpage.supervisorLoginToMain(username, password);
})

Then('Supervisor login should be successfull', async () => {
   await loginpage.supervisorLoginToMainSuccessfull();
})

When('Break is configured by supervisor', async () => {
   await loginpage.createBreak()
});

When('Supervisor is added in the break group', async () => {
   await breakpage.AddSupervisorToGroup()
});

When('Agent is added in the break group', async () => {
   await breakpage.AddAgentToGroup()
});

Then('Break should be successfully created', async () => {
   await breakpage.breakCreatedSuccessful();
});

//=================================Agent related activities
Given('As an agent log in to the platform', async () => {
   await loginpage.navigate();
});

When('Agent logs in with correct email {string} and password {string}', async (username, password) => {
   await loginpage.AgentloginToMain(username, password);
});

Then('Agent login should be successfull', async () => {
   await loginpage.agentLoginToMainSuccessfull()
});

When('Log in on the voice channel',async()=>{
   await loginpage.AgentloginToVoice();
})

//Agent chooses campaigns {string} and queues {string}
When('Agent chooses campaigns and queues',async()=>{
   await loginpage.configureVoiceChannel();
})

When('Agent apply for a break',async()=>{
   await breakpage.accessBreak();

})
Then('Agent should be on break',async()=>{
   await breakpage.breakAppliedSuccessfully()

})
When('Access the voice manager tab to configure campaign settings', async () => {
   await voiceManagerPage.configureCampaign()
})
Then('Campaign is set sucessfully', async()=>{
   await voiceManagerPage.campaignConfiguredSuccessfully()
})

When('Makes a call', async()=>{
   await voiceManagerPage.makeCall()
})

Then('Outcome is selected', async()=>{
   await voiceManagerPage.selectOutcome()
})

When('Use CRM to verify call log', async()=>{
   await crmPage.checkCRM()
})

Then('Call and all its data is sucessfully registered',async()=>{
   await crmPage.callRegisteredSuccessfully()
})

When ('User access ticket channel', async()=>{
   await ticketPage.accessTicketChannel()

})

When('Let user wait for 1 second before navigating to the dashboard page', async()=>{
   await dashboardPage.accessDashboardPage()
})

When('User selects the agent tab', async()=>{
   await dashboardPage.accessAgentTab()
})
When('User selects the ticket tab', async()=>{
   await dashboardPage.accessTicketTab()
})
Then('Verify agent is in idle state in ticket tab',async()=>{
   await dashboardPage.checkIdleState()
})

When('User access the voice manager tab to configure campaign settings for power preview',async()=>{
   await voiceManagerPage.selectPowerPreviewDialer()
})

When('User access data manager menu',async()=>{
   await databaseManagerPage.createDatabase()
})
When('User access dialer control menu from Real time tools',async()=>{
   await dashboardPage.configureDialerControl()

})
