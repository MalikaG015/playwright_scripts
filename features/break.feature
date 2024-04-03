Feature: Applying break on GoContact
    Agent taking a break after logging in to the voice channel

    Scenario Outline: Agent applies for break
        Given As an agent log in to the platform
        When Agent logs in with correct email "<Username>" and password "<Password>"
        And Log in on the voice channel
        And Agent chooses campaigns and queues
        And Agent apply for a break
        Then Agent should be on break 

        Examples:
            | Username             | Password    | 
            | Agent_1@tests.surbhi | password123 | 

    
    # Scenario Outline: Supervisor is creating breaks
    #     Given As a supervisor log in to the platform
    #     When Supervisor logs in with correct email and password
    #     And Break is configured by supervisor
    #     And Supervisor is added in the break group
    #     And Agent is added in the break group
    #     Then Break should be successfully created

    # Examples:
    #         | Username           | Password    | 
    #         | admin@tests.surbhi | password123 | 
    

    # Agent chooses campaigns "<Campaign>" and queues "<Queue>"


    # Scenario Outline: Supervisor is creating unauthorized break
    #     Given As a supervisor log in to the platform
    #     When Supervisor logs in with correct email "<Username>" and password "<Password>"
    #     And Unauthorized break is configured by supervisor
    #     And Agent is added in the break group
    #     Then Break should be successfully created

    #     Examples:
    #         | Username           | Password    |
    #         | admin@tests.surbhi | password123 |





