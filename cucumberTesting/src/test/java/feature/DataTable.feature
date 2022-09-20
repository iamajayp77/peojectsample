Feature: Test cases for login functionally using data table

Scenario: Login into application using data table
    Given user is on login page
    When user enter credentials using DataTable
    | standard_user | secret_sauce |
    And click on login button
    Then user should land on home page

  