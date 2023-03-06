@foo
Feature: Date Picker Page

  Scenario Outline: As an user, I can select last year from date picker
    Given I am at Date Picker page
    When I click on Date field
    When I select "7" and "February" and "2022" on date picker
    Then I can verify value "02/07/2022" of Date field

  Scenario Outline: As an user, I can select current year from date picker
    Given I am at Date Picker page
    When I click on Date field
    When I select "7" and "March" and "2023" on date picker
    Then I can verify value "03/07/2023" of Date field

  Scenario Outline: As an user, I can select next year from date picker
    Given I am at Date Picker page
    When I click on Date field
    When I select "7" and "February" and "2024" on date picker
    Then I can verify value "02/07/2024" of Date field

