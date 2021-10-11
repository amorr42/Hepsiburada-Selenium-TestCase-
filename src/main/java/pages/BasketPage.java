package pages;

import static org.junit.Assert.assertThat;

import java.util.ArrayList;
import java.util.List;
import org.junit.Assert;
import org.openqa.selenium.WebElement;

import elements.BasketPageElements;

public class BasketPage extends BasketPageElements {
	
	public BasketPage() {
		super(driver);
	}
		
	
	public void checkBasket() throws InterruptedException {
				
		List<String> productList = new ArrayList<String>();
		for (WebElement P : productNameList ) {
			productList.add(P.getText());
		}
		
		List<String> productNm = new ArrayList<String>();
		for (WebElement P : productName ) {
			productList.add(P.getText());
		}
		
		List<String> sellerList = new ArrayList<String>();
		for (WebElement S : sellerNameList ) {
			sellerList.add(S.getText());
		}
		
		List<String> sellerNm = new ArrayList<String>();
		for (WebElement S : sellerName ) {
			sellerNm.add(S.getText());
		}
		
		try{
			Assert.assertEquals(productList, productNm);
		    log.info("Equal lists" +productList +productNm);
		}catch(Throwable e){
		    log.error("Lists are not equal. "+e.getMessage());
		}
		
		try{
		    Assert.assertEquals(sellerList, sellerNm);
		    log.info("Equal lists" +sellerList +sellerNm);
		}catch(Throwable e){
		    log.error("Lists are not equal. "+e.getMessage());
		}
		
	}
	
	public void deleteAllProductBasket() {
		
		
		for(int count=0; count<deleteButton.size(); count++) {	
			deleteButton.get(count).click();
			clickWithFindElement(closeDeletePopup);	
			 try {					 					 	
	                Thread.sleep(2000);
	            } catch (Throwable e) {
	                e.getMessage();
	            }  	
		}
	}
	
}
