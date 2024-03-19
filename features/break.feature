Feature: Applying break on GoContact 
    Agent taking a break after logging in to the voice channel
   
    # Scenario: Agent applies for break
    #     Given As an agent log in to the platform
    #     When Agent logs in with correct email and password
    #     And Agent log in on the voice channel
    #     And Agent chooses capmaigns and queues
    #     And Agent apply for a break
    #     And Supervisor receives authorization request for break and is clicked on Authorize button
    #     Then Agent should be on break

    Scenario: Supervisor is creating breaks
        Given As a supervisor log in to the platform
        When Supervisor logs in with correct email and password
        And Break is configured by supervisor
        And Supervisor is added in the break group
        And Agent is added in the break group
        Then Break should be successfully created


    # Scenario: Supervisor is accessing breakManager on gocontact platform
    #     Given As a supervisor log in to the platform
    #     When Supervisor logs in with correct email and password
    #     And Supervisor is on break manager page
    #     And Agent apply for a break
    #     Then Agent should be on break


