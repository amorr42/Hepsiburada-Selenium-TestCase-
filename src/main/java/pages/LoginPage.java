package pages;


import elements.LoginPageElements;


public class LoginPage extends LoginPageElements {
	
	
	public LoginPage(){
		super(driver);
	}
	
	public void enterUserAndPass() {		
		writeText(username,user);
		writeText(password,pass);
		clickWithFindElement(loginButton);		
	}
	

	
	
	

	
	

	
	
	
	
}
