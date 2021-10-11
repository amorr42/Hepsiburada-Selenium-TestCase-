package step_definitions;

import cucumber.api.java.en.Then;
import pages.BasketPage;

public class BasketPageSteps {
	
	BasketPage basketPage = new BasketPage();
	
	@Then("^User, Verify products to basket$")
	public void user_Verify_products_to_basket_from() throws Throwable {
		basketPage.checkBasket();
	}
	
	@Then("^User, Delete all products in basket$")
	public void user_Delete_all_products_in_basket_from() throws Throwable {
		basketPage.deleteAllProductBasket();
	}
	
	
}
