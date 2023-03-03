@foo
Feature: Delete Product Page

  Background: Navigation
    Given I am at Dashboard page
  Scenario Outline:  As an admin, I can delete the specific product by clicking the checkbox before this Product
    Given I am at Search Product page
    When I input "Lenovo IdeaCentre 600 All-in-One PC" into product name field
    When I click search button
    When I click check box on first record
    When I click delete button
    When I click yes button on a popup "Are you sure"
    When I input "Lenovo IdeaCentre 600 All-in-One PC" into product name field
    When I click search button
    Then I see no data in search result

  Scenario Outline: As an admin, I can delete all product by clicking the All checkbox
    Given I am at Search Product page
    When I click check box All on header of table
    When I click the delete button
    When I click yes button on a popup "Are you sure"
    Then I see no data in search result

  Scenario Outline: As an admin, I can't delete any Product if I have not chosen Product
    Given I am at Search Product page
    When I not select any record and click delete button
    When I click yes button on a popup "Are you sure"
    Then I see the message error display

