@foo
Feature: Auto Complete Page

  Scenario Outline: As an user, I can auto complete
    Given I am at Auto Complete page
    When I click on search field
    Then I can auto complete "andreas andersson" with input value "a"
    When I can verify value "andreas andersson" of Search field
