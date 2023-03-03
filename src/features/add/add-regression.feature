@foo
Feature: Add Product Page

  Background: Navigation
    Given I am at Dashboard page

  Scenario Outline: As an admin, I can go to Create Product see this page
    When I click on Product to Product Page
    Then I click on Add new button
    When I verify that Setting button is visible
    Then I verify that Save button is visible
    When I verify that Save and Continue Edit button is visible
    Then I verify that Toggle is visible

  Scenario Outline: As an admin I can change togle mode from Basic to Advance
    When I click on Product to Product Page
    Then I click on Add new button
    When I click on the Advance button

  Scenario Outline: As an admin I can create new Product
    When I click on Product to Product Page
    Then I click on Add new button
    When I input all values on Create Page
    Then I verify that green notification visible

