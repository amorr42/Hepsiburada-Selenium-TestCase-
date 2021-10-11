package elements;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;


import util.TestUtility;

public class ProductPageElements extends TestUtility {
	
	public ProductPageElements(WebDriver driver) {
		super(driver);
	}
	
	public By closePopup = By.cssSelector(".checkoutui-Modal-2iZXl");
	public By buttonBasket = By.xpath("//span[@id='shoppingCart']");
	 
	
	
}
