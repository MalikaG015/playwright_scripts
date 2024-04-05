# Feature: Supervisor logins on ticket channel

#     Background:
#         Given As a user log in to the platform

#     Scenario: Supervisor log in on Gocontact platform and check idle state
#         Given Supervisor logs in with correct email and password
#         When User access ticket channel
#         And Let user wait for 1 second before navigating to the dashboard page
#         And User selects the agent tab
#         And User selects the ticket tab
#         Then Verify agent is in idle state in ticket tab

#     Scenario: Agent log in on Gocontact platform and check idle state
#         When Agent logs in with correct email and password
#         And User access webchat channel
#         And Let user wait for 1 second before navigating to the dashboard page
#         And User selects the ticket tab
#         And User selects the agent tab
#         And User selects the webchat tab
#         Then Verify agent is in idle state in webchat tab
