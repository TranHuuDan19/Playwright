@foo
Feature: Edit Product Page

  Scenario Outline: As an admin, I can click on Edit button to edit Product details of any products
    Given I am at Dashboard page
    When I am at Edit Product page
    Then I can click Edit button to edit Product details.
    When I can verify Setting button is visible
    When I can verify Save button is visible
    When I can verify Save and Continue Edit button is visible
    When I can verify Copy product button is visible

  Scenario Outline: As an admin,on Edit Product Details, I can edit Product  Info of product
    Given I am at Dashboard page
    When I am at Edit Product page
    Then I can click Edit button to edit Product details.
    When I can enter "Test for Product Name" in Product Name field
    Then I can verify value of "Test for Product Name" in Product Name field
    When I can enter "Test for Short Description" in Short Description field
    Then I can verify value of "Test for Short Description" in Short Description field
    When I can enter "Test for SKU" in SKU field
    Then I can verify value of "Test for SKU" in SKU field

  Scenario Outline: As an admin, on Edit Product Details page, I can edit Prices of product
    Given I am at Dashboard page
    When I am at Edit Product page
    Then I can click Edit button to edit Product details.
    When I can enter "2400" in Prices field
    Then I can verify value of "2400" in Prices field
    When I can enter "Books" in Tax Category field
    Then I can verify value of "Books" in Tax Category field

  Scenario Outline: As an admin, on Edit Product Details page, I can edit Shipping of product
    Given I am at Dashboard page
    When I am at Edit Product page
    Then I can click Edit button to edit Product details.
    When I can enter "6" in Weight field
    Then I can verify value of "6" in Weight field
    When I can enter "2" in Length field
    Then I can verify value of "2" in Length field
    When I can enter "3" in Width field
    Then I can verify value of "3" in Width field
    When I can enter "5" in Height field
    Then I can verify value of "5" in Height field

  Scenario Outline: As an admin I can edit Product Details
    Given I am at Dashboard page
    When I am at Edit Product page
    Then I can click Edit button to edit Product details.
    When I can change the values of fields or upload the picture on Multimedia
    When I can change value of Quantity
    Then I can see value of fields or upload the picture on Multimedia

  Scenario Outline: As an admin I can edit Product Details
    Given I am at Dashboard page
    When I am at Edit Product page
    Then I can click Edit button to edit Product details.
    Then I can click edit value on Multimedia
    When I can change "1" of DisplayOrder
    When I can see "1" in DisplayOrder
    Then I input "a" into DisplayAlt
    When I can change "Title" of Title
    Then I can see "Title" in the Title
    Then I can update all change of DisplayOrder , DisplayAlt , Title

  Scenario Outline: As an admin I can edit Product Details
    Given I am at Dashboard page
    When I am at Edit Product page
    Then I can click Edit button to edit Product details.
    When I can change "abc" of Product Name
    Then I can see "abc" in Product Name Title
    Then I can click Save
    When I can click Search Product

