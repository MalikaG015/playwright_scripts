Feature: Login on GoContact

    Background:
        Given As a user log in to the platform

    Scenario Outline: Supervisor logins on the gocontact platform
        Given User logs in with correct email "<Username>" and password "<Password>"
        Then User login should be successful

        Examples:
            | Username           | Password    |                               |
            | admin@tests.surbhi | password123 | 

    Scenario Outline: Agent logins on the gocontact platform
        Given User logs in with correct email "<Username>" and password "<Password>"
        Then User login should be successful

        Examples:
            | Username             | Password    | 
            | Agent_1@tests.surbhi | password123 | 