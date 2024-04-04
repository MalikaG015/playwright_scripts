# Feature: Supervisor logins on ticket channel

#     Background:
#         Given As a user log in to the platform

#     Scenario Outline: Superviosor log in on Gocontact platform and check idle state
#         Given User logs in with correct email "<Username>" and password "<Password>"
#         When User access ticket channel
#         And Let user wait for 1 second before navigating to the dashboard page
#         And User selects the agent tab
#         And User selects the ticket tab
#         Then Verify agent is in idle state in ticket tab

#         Examples:
#             | Username           | Password    | 
#             | admin@tests.surbhi | password123 | 

#     Scenario Outline: Agent log in on Gocontact platform and check idle state
#         When User logs in with correct email "<Username>" and password "<Password>"
#         And User access webchat channel
#         And Let user wait for 1 second before navigating to the dashboard page
#         And User selects the ticket tab
#         And User selects the agent tab
#         And User selects the webchat tab
#         Then Verify agent is in idle state in webchat tab

#         Examples:
#             | Username           | Password    | 
#             | admin@tests.surbhi | password123 |
