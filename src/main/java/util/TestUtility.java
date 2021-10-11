package util;


import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import pages.BasePage;

public class TestUtility extends BasePage{
	
	public TestUtility(WebDriver driver) {
		super(driver);
	}
	
	protected void waitVisibility(By element) {
		wait = new WebDriverWait(driver, 15, 1500);
        wait.until(ExpectedConditions.visibilityOfElementLocated(element));
    }
 
	protected void waitClickable(By element) {    	
		wait = new WebDriverWait(driver, 15, 1000);
	 	wait.until(ExpectedConditions.elementToBeClickable(element));
 	}
	    
	protected void clickWithFindElement(By element) {	 
        waitVisibility(element);
        waitClickable(element);
        driver.findElement(element).click(); 
    }
	
	protected String getElementText(By element) {
        waitVisibility(element);
        return driver.findElement(element).getText();
    }
	
	protected void writeText(By element, String text) {
        waitVisibility(element);
        driver.findElement(element).sendKeys(text);
    }
			
	protected void scrollByVisibleElement(By element) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		driver.findElement(element);
		js.executeScript("arguments[0].scrollIntoView();", element);
	}
	
	protected void clickByJsElement(By element) {		
		JavascriptExecutor js = (JavascriptExecutor) driver;
		driver.findElement(element);
		js.executeScript("arguments[0].click();", element);
	}
	
	protected void tryClick(By element) {
        try {
            Thread.sleep(1000);
        } 
        catch (Exception e) {
        	e.printStackTrace();
        }
    }
	
	public String getPageTitle() {
		return driver.getTitle();
	}
	public String getCurrentUrl() {	
		return driver.getCurrentUrl();
	}
	
}	