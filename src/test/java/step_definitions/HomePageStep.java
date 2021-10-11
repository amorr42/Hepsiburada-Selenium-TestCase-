package step_definitions;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.HomePage;
import pages.LoginPage;

public class HomePageStep {
	
	HomePage homePage;
	LoginPage loginPage;
	

	@Given("^User, Navigate Hepsiburada Homepage$")
	public void user_Navigate_Hepsiburada_Homepage() throws Throwable {
		homePage = new HomePage();
	}

	@Then("^User, Check Homepage title$")
	public void user_Check_Homepage_title() throws Throwable {
		homePage.getTitle();
	}
		
	@When("^User, Click Homepage login button$")
	public void user_Click_Homepage_login_button() throws Throwable {
		homePage.clickHomeLogin();
	}
	
	@Then("^User, Verify logged into the system$")
	public void user_Verify_logged_into_the_system() throws Throwable {
		homePage.verifyUserIsLogin();
	}

	@When("^User, Search the product in the search box$")
	public void user_Search_the_product_in_the_search_box() throws Throwable {
		homePage.clickSearchBox();
	}

	



}
