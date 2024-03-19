The scripts for webchat is written under file - webchat_scripts.spec.js
The scripts cover following cases-

1. User login to platform with any user
In this, user should be able to login on gocontact platform after entering their credentials(username and password) 

2. Edit webchat setting StartChatWithoutMessage to false
In this, user should follow the below written steps-
a. login on the gocontact platform
b. Go to webchat manager
c. Edit the webchat channel on clicking pencil like icon
d. In settings tab, you will find an option 'Send chat without message'.
e. Disable the option 'Send chat without message'
f. Click on save
Webchat should be successfull edited

3. User login to webchat & send message
In this, user should be able to send chat message
Follow the steps described below to test the scenario-
a. login on the gocontact platform
b. Click on webchat
c. Click on chat that you want to reply.
d. Click on Reply
e. Click on text area and type your message
f. Click on send button to send the chat message to the client.
Message should be successfully delievered.

4. User open duplicate browser tab with same url
In this, if user is able to open the tab in another browser then gocontact will ask whether to keep on current session. Ob clicking the button user will now be able to use current session on different browser and from old browser gocontact will be logged out.

5. Validate if chat sesison is tranfered successfully and chat session is terminated from previous tab
In this test, usre should able to succesfully transfer the chat to another user. Follow the steps to transfer the chat-
a. login on the gocontact platform
b. Go to webchat
c. Open the chat
d. Click on Transfer conversation button
e. Select agent from the dropdown that you wnat to transfer the chat
f. Click on Tranfer.
Chat should be transfered successfully.
Note- Make sure the agent to whom chat is being transferred is online.


** The execution test reports along with videos are present in the folder named 'execution_success_report'.

The other task was to validate gocontact auth form with following requirements and the code is present in file goContactAuth.spec.js
1. Test auth form for Invalid username, invalid password, non empty, 
username!=pass and pass match 8 alpha-num length.


**Its execution test reports is also  present in the folder named 'execution_success_report'.
//================================================================================================
Assertions in cucumber
const assert = require('assert')

Then('the result should be {word}', function (expected) {
  // this.actual is typically set in a previous step
  assert.equal(this.actual, expected)
})