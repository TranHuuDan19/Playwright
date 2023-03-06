@foo
Feature: Dialog Boxes Page

  Scenario Outline: As an user, I can create new user
    Given I am at Dialog Boxes page
    When I click on Create new user button
    Then I can input "User Name" in Name field
    When I can verify value "User testing" of Name field
    Then I can input "userName@gmail.com" in Email field
    When I can verify value "userName@gmail.com" of Email field
    Then I can input "P@ssw0rd" in Password field
    When I can verify value "P@ssw0rd" of Password field
    Then I can click Create an account button
    When I can verify user "User Name" , "userName@gmail.com" and "P@ssw0rd" of table
