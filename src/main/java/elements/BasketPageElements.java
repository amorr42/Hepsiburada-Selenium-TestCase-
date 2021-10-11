package elements;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import util.TestUtility;

public class BasketPageElements extends TestUtility {

	public BasketPageElements(WebDriver driver) {
		super(driver);
	}
	
	protected List<WebElement> productNameList = 
			driver.findElements(By.cssSelector("div[class='product_name_3Lh3t'] a"));
	
	protected List<WebElement> productName = 
			driver.findElements(By.cssSelector("#product-name"));		
	
	protected List<WebElement> sellerNameList = 
			driver.findElements(By.xpath("//div[@class='merchant_name_1NA4w']"));
	
	protected List<WebElement> sellerName = 
			driver.findElements(By.className("merchantStore small"));
	
	protected List<WebElement> deleteButton = 
			driver.findElements(By.cssSelector("a[aria-label='Ürünü Kaldır']"));
	
	public By closeDeletePopup = By.cssSelector(".sc-AxjAm.iDSyON.sflButton_2fKbY");
	
	
	
}
