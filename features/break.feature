Feature: Applying break on GoContact
    Agent taking a break after logging in to the voice channel

Background:
    Given As a user log in to the platform
    
    Scenario Outline: Agent applies for break
        Given User logs in with correct email "<Username>" and password "<Password>"
        When Log in on the voice channel
        When Agent chooses campaigns and queues
        And Agent apply for a break
        Then Agent should be on break 

        Examples:
            | Username             | Password    | 
            | Agent_1@tests.surbhi | password123 | 

    
    Scenario Outline: Supervisor is creating breaks
        Given User logs in with correct email "<Username>" and password "<Password>"
        When Break is configured by supervisor
        And Supervisor is added in the break group
        And Agent is added in the break group
        Then Break should be successfully created

        Examples:
            | Username           | Password    | 
            | admin@tests.surbhi | password123 | 
    

    Scenario Outline: Supervisor is creating unauthorized break
        Given User logs in with correct email "<Username>" and password "<Password>"
        When Unauthorized break is configured by supervisor
        And Agent is added in the break group
        Then Break should be successfully created

        Examples:
            | Username           | Password    | 
            | admin@tests.surbhi | password123 | 





