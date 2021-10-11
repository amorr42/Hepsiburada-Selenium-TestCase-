package pages;



import elements.HomePageElements;
import org.junit.Assert;


public class HomePage extends HomePageElements {
	
	public HomePage() {
		super(driver);		
	}
	
	public void getTitle() {
		String title = "Türkiye'nin En Büyük Online Alışveriş Sitesi Hepsiburada.com";
		String homePageTitle = getPageTitle();
		try {
			Assert.assertEquals(homePageTitle,title);
			log.info("Homepage Title:" +homePageTitle);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void clickHomeLogin() {
		clickWithFindElement(homeLoginButtonList);
		clickWithFindElement(homeLoginButton);		
	}

	public void verifyUserIsLogin() {
		String verifyUsername = "Berkay Dinç";
		String myAccount = getElementText(checkLoginUsername);
		try {
			Assert.assertEquals(myAccount,verifyUsername);
			log.info("My account name: " +myAccount);
		} catch (Exception e) {
			e.printStackTrace();
		}
	
	}
	
	public void clickSearchBox() {
		writeText(searchBox, "araba");
		clickWithFindElement(searchButton);
	}
	
}
