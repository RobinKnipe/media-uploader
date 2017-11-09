Feature: Basic server test

  A simple test to check the server runs as expected,
  and show Gherkin/Cucumber/Chimp BDD tests in action.

  As a developer
  I want to test my code
  So that I know it works correctly

  Scenario: Connecting to the server
    Given the server is running
    When I connect to the server
    Then I see the message "Hello World!"
