@foo
Feature: Search Product Page

  Background: Navigation
    Given I am at Dashboard page

  Scenario Outline: As an admin, I can collapse/expand for Search form
    Given I am at Search Product page
    When I click collapse button
    Then I can not see the Search form
    When I click expand button
    Then I can see the Search form

  Scenario Outline: As an admin, I can search for Product by Product Name
    Given I am at Search Product page
    When I input "Build your own computer" into product name field
    When I click search button
    Then I can see "Build your own computer" in search result

  Scenario Outline: As an admin, I can search for Product by Category with Search subcategories option
    Given I am at Search Product page
    When I check search subcategories checkbox
    When I select "Computers" in category option
    When I click search button
    Then I can see "Computers" in category field of edit mode

  Scenario Outline: As an admin, I can search for Product by Go directly to product SKU
    Given I am at Search Product page
    When I input "COMP_CUST" into sku field
    When I click go button
    Then I can see "COMP_CUST" in sku field of edit mode

  Scenario Outline: As an admin, I can't see the search result when input incorrect Product Name
    Given I am at Search Product page
    When I input "product name" into product name field
    When I click search button
    Then I see no data in search result