package step_definitions;

import cucumber.api.java.en.Then;
import pages.LoginPage;

public class LoginPageSteps {
	
	
	LoginPage loginPage = new LoginPage();
	
	@Then("^User, Login to the system with e-mail and password$")
	public void user_Login_to_the_system_with_e_mail_and_password() throws Throwable {
		loginPage.enterUserAndPass();
	}



}
