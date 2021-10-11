Feature: Hepsiburada without login feature

 Scenario: Hepsiburada without login website and add product to basket
    Given User, Navigate Hepsiburada Homepage
    Then User, Check Homepage title
    When User, Search the product in the search box
    Then User, Check the product pages url
    Then User, Checks product images
    Then User, Go to product details
    When User, Add products to basket from two different seller
    Then User, Go to basket page
    Then User, Verify products to basket
    Then User, Delete all products in basket
