Feature: Making a call using the voice manager

    # Scenario: Supervisor configures campaign to make call
    #     Given As a supervisor log in to the platform
    #     When Supervisor logs in with correct email and password
    #     And Access the voice manager tab to configure campaign settings
    #     Then Campaign is set sucessfully

    # Scenario: Supervisor goes online to voice channel
    #     Given As a supervisor log in to the platform
    #     When Supervisor logs in with correct email and password
    #     And Log in on the voice channel
    #     And Agent chooses capmaigns and queues
    #     And Makes a call
    #     Then Outcome is selected

    Scenario: Supervisor checks call data on CRM
        Given As a supervisor log in to the platform
        When Supervisor logs in with correct email and password
        And Use CRM to verify call log
        Then Call and all its data is sucessfully registered