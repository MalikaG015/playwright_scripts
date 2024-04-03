Feature: Making a call using the voice manager

    Scenario Outline: Supervisor configures campaign to make call
        Given As a supervisor log in to the platform
        When Supervisor logs in with correct email "<Username>" and password "<Password>"
        And Access the voice manager tab to configure campaign settings
        Then Campaign is set sucessfully

        Examples:
            | Username           | Password    |
            | admin@tests.surbhi | password123 |

    Scenario Outline: Supervisor goes online to voice channel
        Given As a supervisor log in to the platform
        When Supervisor logs in with correct email "<Username>" and password "<Password>"
        And Log in on the voice channel
        And Agent chooses capmaigns and queues
        And Makes a call
        Then Outcome is selected

        Examples:
            | Username           | Password    |
            | admin@tests.surbhi | password123 |

    Scenario Outline: Supervisor checks call data on CRM
        Given As a supervisor log in to the platform
        When Supervisor logs in with correct email "<Username>" and password "<Password>"
        And Use CRM to verify call log
        Then Call and all its data is sucessfully registered

        Examples:
            | Username           | Password    |
            | admin@tests.surbhi | password123 |


    Scenario Outline: Supervisor goes online to voice channel
        Given As a supervisor log in to the platform
        When Supervisor logs in with correct email "<Username>" and password "<Password>"
        And Log in on the voice channel
        And Agent chooses campaigns and queues
        And Makes a call with desired number
        Then Outcome is selected

        Examples:
            | Username           | Password    |
            | admin@tests.surbhi | password123 |