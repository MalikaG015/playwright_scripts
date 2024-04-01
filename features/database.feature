Feature: Supervisor configures database and apply filters on dialer control menu

    Scenario Outline: Superviosor log in on Gocontact platform, configure database and apply filters on dialer control menu
        Given As a supervisor log in to the platform
        When Supervisor logs in with correct email "<Username>" and password "<Password>"
        # And User access the voice manager tab to configure campaign settings for power preview
        # And User access data manager menu
        And User access dialer control menu from Real time tools
        # And Let user wait for 1 second before navigating to the dashboard page
        # And User selects the agent tab
        # And User selects the ticket tab
        # Then Verify agent is in idle state in ticket tab

        Examples:
            | Username           | Password    |
            | admin@tests.surbhi | password123 |