Feature: Applying break on GoContact
    Agent taking a break after logging in to the voice channel

Background:
    Given As a user log in to the platform
    
    # Scenario: Agent applies for break and supervisor authorizes it
    #     Given Agent logs in with correct email and password
    #     When Log in on the voice channel
    #     When Agent chooses campaigns and queues
    #     And Agent apply for a break
    #     # And Supervisor authorize the break request
    #     Then Agent should be on break
        
    # Scenario: Agent applies for break
    #     Given Agent logs in with correct email and password
    #     When Log in on the voice channel
    #     When Agent chooses campaigns and queues
    #     And Agent apply for a break
    #     Then Agent should be on break

    Scenario: Agent applies for break and supervisor authorizes it
    Given Agent logs in with correct email and password
    And Supervisor logs in with correct email and password
    When Log in on the voice channel
    And Agent chooses campaigns and queues
    And Agent apply for a break
    And Supervisor authorize the break request
    Then Agent should be on break

    
     
    
    # Scenario: Supervisor is creating breaks
    #     Given Supervisor logs in with correct email and password 
    #     When Break is configured by supervisor
    #     And Supervisor is added in the break group
    #     And Agent is added in the break group
    #     Then Break should be successfully created

#     Scenario: Supervisor is creating unauthorized break
#         Given Supervisor logs in with correct email and password
#         When Unauthorized break is configured by supervisor
#         And Agent is added in the break group
#         Then Break should be successfully created





