package elements;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import util.TestUtility;


public class LoginPageElements extends TestUtility {

	public LoginPageElements(WebDriver driver) {
		super(driver);
	}
	
	public By username = By.name("username"); 
	public By password = By.name("password");
	protected String user = "berkaygamze95@gmail.com";
	protected String pass = "15161296";
	public By loginButton = By.xpath("//button[@id='btnLogin']"); 
	
	
	
	
}
