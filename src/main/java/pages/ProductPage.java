package pages;


import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;
import java.util.List;
import java.util.Random;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import elements.ProductPageElements;


public class ProductPage extends ProductPageElements{
	
	public ProductPage() {
		super(driver);
	}
	
	public void verifySearchPage(){
		String searchTitle = getCurrentUrl();
		if(searchTitle.contains("q=araba")) {
			try {
				log.info("Verify search page url:" +getCurrentUrl());
			} catch (Throwable e) {
				log.error("Wrong Page Fix it code" +e.getMessage());
			}			
		}			
		
	}
	
	
	public void controlImg() throws Exception {
		
		List<WebElement> image_list = driver.findElements(By.tagName("img"));
        log.info("The page under test has " + image_list.size() + " images");
        
        for (WebElement img : image_list) {
        	String imageSrc = img.getAttribute("src");
        	
        	try {
				URL url = new URL(imageSrc);
				URLConnection urlConnection = url.openConnection();
				HttpURLConnection httpURLConnection = (HttpURLConnection) urlConnection;
				httpURLConnection.setConnectTimeout(5000); 
				httpURLConnection.connect();
				
				if(httpURLConnection.getResponseCode() == 200) 
				{
				
					log.info(imageSrc + " >> " + httpURLConnection.getResponseCode() + ">>" + httpURLConnection.getResponseMessage());
				}
				else 
				{
					
					log.info(imageSrc + " >> " + httpURLConnection.getResponseCode() + ">>" + httpURLConnection.getResponseMessage());
					httpURLConnection.disconnect();
				}
			
			} catch (Throwable e) {
					log.error(imageSrc);
			}
        	
        }
		
	}
	

	public void clickRandomProduct() {
		
		List<WebElement> product_list = driver.findElements(By.xpath("//div[@class='contain-lg-3 contain-md-3 contain-sm-3 fluid with-bottom-border']"));
		
	    Random rand = new Random();
		int rndIndex = rand.nextInt(product_list.size());
		
	        if(product_list.size() > 0){
	        	product_list.get(rndIndex).click();
	            try {	            	
	                Thread.sleep(1000);
	            } 
	            catch (InterruptedException e) {
	                e.printStackTrace();
	            }  
	        } 
	        else {
	            log.error("Failed to click element in list");
	        }
	        
	}

	public void clickAddBasket() {
		List<WebElement> button_list = driver.findElements(By.xpath("//button[@class='add-to-basket button small']"));
		for(int i=0; i<button_list.size(); i++) {
			button_list.get(i).click();	
            clickWithFindElement(closePopup);
			 try {				 	
	                Thread.sleep(2000);
	            } catch (Exception e) {
	                e.printStackTrace();
	            }  			
		}
	}
	
	public void goBasket(){
		clickWithFindElement(buttonBasket);
	}
	
	
}
