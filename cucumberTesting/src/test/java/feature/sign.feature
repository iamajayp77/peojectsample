Feature: Test cases for login functionally

  Scenario Outline: Login into application
    Given user is on login page
    When user enter <username> and <password>
    And click on login button
    Then user should land on home page

    Examples: 
      | username      | password     |
      | standard_user | secret_sauce |
      | pannu         | ajju         |
      | abc           | xyz          |
