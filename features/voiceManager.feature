Feature: Making a call using the voice manager

Background:
        Given As a user log in to the platform

    Scenario Outline: Supervisor configures campaign to make call
        Given User logs in with correct email "<Username>" and password "<Password>"
        When Access the voice manager tab to configure campaign settings
        Then Campaign is set sucessfully

        Examples:
            | Username           | Password    | 
            | admin@tests.surbhi | password123 | 

    Scenario Outline: Supervisor goes online to voice channel
        Given User logs in with correct email "<Username>" and password "<Password>"
        When Log in on the voice channel
        And Agent chooses capmaigns and queues
        And Makes a call
        Then Outcome is selected

        Examples:
            | Username           | Password    | 
            | admin@tests.surbhi | password123 |

    Scenario Outline: Supervisor checks call data on CRM
        Given User logs in with correct email "<Username>" and password "<Password>"
        When Use CRM to verify call log
        Then Call and all its data is sucessfully registered

        Examples:
            | Username           | Password    | 
            | admin@tests.surbhi | password123 | 


    Scenario Outline: Supervisor goes online to voice channel
        Given User logs in with correct email "<Username>" and password "<Password>"
        When Log in on the voice channel
        And Agent chooses campaigns and queues
        And Makes a call with desired number
        Then Outcome is selected

        Examples:
            | Username           | Password    | 
            | admin@tests.surbhi | password123 | 