Feature: test login fun

Scenario: test login

	Given user shoud be on login page
	When user enter "standard_user" and "secret_sauce"
	And click on login button
	Then user get loged in application