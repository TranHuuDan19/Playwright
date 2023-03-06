@foo
Feature: Progress Bar Page

  Scenario Outline: As an user, I can download dialog progressbar successfully
    Given I am at Progress Bar page
    When I click on Start Download button
    Then I can see Cancel Download button is available
    When I see Complete! on pop up
    Then I can click Close button.

