Feature: Hepsiburada Feature

  Scenario: Hepsiburada website login and add product to basket
    Given User, Navigate Hepsiburada Homepage
    Then User, Check Homepage title
    When User, Click Homepage login button
    Then User, Login to the system with e-mail and password
    Then User, Verify logged into the system
    When User, Search the product in the search box
    Then User, Check the product pages url
    Then User, Checks product images
    Then User, Go to product details
    When User, Add products to basket from two different seller
    Then User, Go to basket page
    Then User, Verify products to basket
    Then User, Delete all products in basket

