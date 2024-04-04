Feature: Supervisor configures database and apply filters on dialer control menu

    Background:
        Given As a user log in to the platform

    Scenario Outline: Supervisor log in on Gocontact platform, configure database and apply filters on dialer control menu
        Given User logs in with correct email "<Username>" and password "<Password>"
        When User access the voice manager tab to configure campaign settings for power preview
        And User access data manager menu
        And User access dialer control menu from Real time tools
        And Preview filters on hopper table
        And Log in on the voice channel
        And Agent chooses campaigns and queues
        And Dial call in power preview
        Then Outcome is selected

        Examples:
            | Username           | Password    | 
            | admin@tests.surbhi | password123 | 

    Scenario Outline: Supervisor log in on Gocontact platform, configure database and apply new filters on dialer control menu
        Given User logs in with correct email "<Username>" and password "<Password>"
        When User access the voice manager tab to configure campaign settings for power preview
        And User access data manager menu for creating database
        And User access dialer control menu from Real time tools for configuring filters
        And Preview filters on hopper table
        And Log in on the voice channel
        And Agent chooses campaigns and queues
        And Dial call in power preview
        Then Outcome is selected

        Examples:
            | Username           | Password    | 
            | admin@tests.surbhi | password123 | 