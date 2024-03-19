const { Given, When, Then } = require('cucumber')
const { BreakPage } = require('../../page_object/break.page')
const { LoginPage } = require('../../page_object/login.page');

const breakpage = new BreakPage();
const loginpage = new LoginPage();

Given('As a supervisor log in to the platform', async () => {
   await loginpage.navigate();
});

When('Supervisor logs in with correct email and password', async () => {
   await loginpage.supervisorLoginToMain();
})

Then('Login should be successfull', async () => {
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

When('Agent logs in with correct email and password', async () => {
   await loginpage.AgentloginToMain();
});

Then('Login should be successfull', async () => {
   await loginpage.agentLoginToMainSuccessfull()
});

When('Agent log in on the voice channel',async()=>{
   await loginpage.AgentloginToMain()
   await loginpage.AgentloginToVoice();

})
When('Agent chooses campaigns and queues',async()=>{
   await loginpage.configureVoiceChannel();
})
When('Agent apply for a break',async()=>{
   await breakpage.accessBreak();

})
When('Supervisor receives authorization request for break and is clicked on Authorize button',async()=>{
   await breakpage.authorizeBreak();
})
Then('Agent should be on break',async()=>{
   await breakpage.breakAppliedSuccessfully()

})



// Given('As an agent log in to the voice channel', async()=>{
//    await loginpage.AgentloginToVoice()
// })


