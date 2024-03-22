Feature: Supervisor logins on ticket channel

    Scenario Outline: Superviosor log in on Gocontact platform and check idle state
        Given As a supervisor log in to the platform
        When Supervisor logs in with correct email "<Username>" and password "<Password>"
        And User access ticket channel
        And Let user wait for 1 second before navigating to the dashboard page
        And User selects the agent tab
        And User selects the ticket tab
        Then Verify agent is in idle state in ticket tab

        Examples:
            | Username           | Password    |
            | admin@tests.surbhi | password123 |
