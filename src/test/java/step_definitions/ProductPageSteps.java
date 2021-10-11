package step_definitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.ProductPage;

public class ProductPageSteps {
	
	ProductPage productPage = new ProductPage();
	
	@Then("^User, Check the product pages url$")
	public void user_Check_the_product_pages_url() throws Throwable {
	    productPage.verifySearchPage();
	}
	
	@Then("^User, Checks product images$")
	public void user_Checks_product_images() throws Throwable {
	    
	}

	@Then("^User, Go to product details$")
	public void user_Go_to_product_details() throws Throwable {
		Thread.sleep(2000);
		productPage.clickRandomProduct();
	}

	@When("^User, Add products to basket from two different seller$")
	public void user_Add_products_to_basket_from_two_different_seller() throws Throwable {
	   productPage.clickAddBasket();
	}
	
	@Then("^User, Go to basket page$")
	public void user_Go_to_basket_page() throws Throwable {
		productPage.goBasket();
	}
	
}
