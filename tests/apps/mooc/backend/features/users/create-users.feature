Feature: Create a new users
  In order to have users in the platform
  As a user with admin permissions
  I want to create a new user

  Scenario: A valid non existing course
    Given I send a PUT request to "/users" with body:
      """
      {
        "id": "ef8ac118-8d7f-49cc-abec-78e0d05af80a",
        "first_name": "pepito",
        "last_name": "jose"
      }
      """
    Then the response status code should be 201
    And the response should be empty

  Scenario: A valid course body types 
    Given I send a PUT request to "/users" with body:
      """
      {
        "id": "ef8ac118-8d7f-49cc-abec-78e0d05af80a",
        "first_name": 5,
        "last_name": "jose"
      }
      """
    Then the response status code should be 422
