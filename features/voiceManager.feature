Feature: Making a call using the voice manager

    Background:
        Given As a user log in to the platform

    Scenario: Supervisor configures campaign to make call
        Given Supervisor logs in with correct email and password
        When Access the voice manager tab to configure campaign settings
        Then Campaign is set sucessfully

    Scenario: Supervisor goes online to voice channel
        Given Supervisor logs in with correct email and password
        When Log in on the voice channel
        And Agent chooses capmaigns and queues
        And Makes a call
        Then Outcome is selected

    Scenario: Supervisor checks call data on CRM
        Given Supervisor logs in with correct email and password
        When Use CRM to verify call log
        Then Call and all its data is sucessfully registered

    Scenario: Supervisor goes online to voice channel
        Given Supervisor logs in with correct email and password
        When Log in on the voice channel
        And Agent chooses campaigns and queues
        And Makes a call with desired number
        Then Outcome is selected