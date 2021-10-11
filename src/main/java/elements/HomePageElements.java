package elements;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import util.TestUtility;

public class HomePageElements extends TestUtility {
	
	public HomePageElements(WebDriver driver) {
		super(driver);
	}
	
	
	public By homeLoginButtonList  = By.xpath("//span[@title='Giriş Yap']");
	public By homeLoginButton  = By.id("login");
	public By checkLoginUsername  = By.xpath("//span[@class='sf-OldMyAccount-1k66b']");		
	public By searchBox = By.xpath("//input[@placeholder='Ürün, kategori veya marka ara']");
	public By searchButton = By.xpath("//div[@class='SearchBoxOld-buttonContainer']");
	
	
	
	
	
}
