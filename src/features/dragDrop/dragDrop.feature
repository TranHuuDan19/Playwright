@foo
Feature: Drag And Drop
  Scenario Outline: As an user, I can move image into trash by click delete button
    Given I am at Drag Drop page
    When I can click delete button of image 1
    Then I can restore image

  Scenario Outline: As an user, I can move image into trash by click delete button
    Given I am at Drag Drop page
    When I can drag image 1 and drop into trash
    Then I can restore image
