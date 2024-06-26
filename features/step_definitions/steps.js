const { Given, When, Then } = require('cucumber')
const BasePage  = require('../../page_object/base_actions.page');
const config = require('../../config.json')
const { BreakPage } = require('../../page_object/break.page')
const { LoginPage } = require('../../page_object/login.page');
const { VoiceManagerPage } = require('../../page_object/voiceManager.page')
const { CRMPage } = require('../../page_object/crm.page')
const { TicketPage }=require('../../page_object/ticket.page')
const { DashboardPage}= require('../../page_object/dashboard.page')
const { DatabaseManagerPage }= require('../../page_object/databaseManager.page')
const { WebchatPage }= require('../../page_object/webchat.page')

const basePage = new BasePage();
const voiceManagerPage = new VoiceManagerPage();
const databaseManagerPage =new DatabaseManagerPage();
const dashboardPage=new DashboardPage();
const ticketPage= new TicketPage();
const webchatPage= new WebchatPage();
const crmPage = new CRMPage();
const breakpage = new BreakPage();
const loginpage = new LoginPage();

Given('As a user log in to the platform', async () => {
   await loginpage.navigate(config.url);
   await loginpage.navigate(config.url, true); 
})

Given('Agent logs in with correct email and password', async()=>{
    await loginpage.userLoginToMain(global.agentPage, config.users.agent.username, config.users.agent.password);
})

Given('Supervisor logs in with correct email and password', async () => {
    await loginpage.userLoginToMain(global.supervisorPage, config.users.supervisor.username, config.users.supervisor.password);
})

Then('Supervisor login should be successful', async () => {
   await loginpage.loginToMainSuccessfull(global.supervisorPage);
})

Then('Agent login should be successful', async () => {
   await loginpage.loginToMainSuccessfull(global.agentPage);
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

Given('Log in on the voice channel',async()=>{
   await loginpage.AgentloginToVoice(global.agentPage);
})

When('Agent chooses campaigns and queues',async()=>{
   await loginpage.configureVoiceChannel(global.agentPage);
})

When('Agent apply for a break',async()=>{
   await breakpage.accessBreak(global.agentPage);
})

When('Supervisor authorize the break request', async()=>{
   await breakpage.authorizeBreak(global.supervisorPage);
})

Then('Agent should be on break',async()=>{
   await breakpage.breakAppliedSuccessfully(global.agentPage)

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
   await dashboardPage.checkIdleStateForTicket()
})

Given('User access the voice manager tab to configure campaign settings for power preview',async()=>{
   await voiceManagerPage.selectPowerPreviewDialer()
})

When('User access data manager menu',async()=>{
   await databaseManagerPage.createDatabase()
})

When('User access dialer control menu from Real time tools',async()=>{
   await dashboardPage.configureDialerControl()
})

When('Preview filters on hopper table', async()=>{
   await dashboardPage.previewHopper()
})

When('Dial call in power preview', async()=>{
   await voiceManagerPage.powerPreviewCall()
})

When('User access data manager menu for creating database', async()=>{
   await databaseManagerPage.createDatabaseForNewFilters()
})
When('User access dialer control menu from Real time tools for configuring filters', async()=>{
   await dashboardPage.configureFilters()
})

When('Supervisor authorize the break requestr', async()=>{
   await loginpage.createUnauthorizedBreak()
})

When('User access webchat channel', async()=>{
   await webchatPage.accessWebchatChannel()
})

When('User selects the webchat tab', async()=>{
   await dashboardPage.accessWebchatTab()
})

Then('Verify agent is in idle state in webchat tab', async()=>{
   await dashboardPage.checkIdleStateForWebchat()
})

When('Makes a call with desired number',async()=>{
   await voiceManagerPage.makeCallWithDesiredNumber()
})