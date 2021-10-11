package step_definitions;


import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;
import pages.BasePage;


public class TestBaseHooks extends BasePage {
	
	public TestBaseHooks(){
		super();
	}
	
	@Before
	public void setUp() {
		new TestBaseHooks();
		WebDriverManager.chromedriver().setup();
		BasePage.initializeWebDriver();
	}
	
	@After
	public void tearDown(Scenario scenario) {
		if(scenario.isFailed()) {
			byte[] screenshot =  ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
			scenario.embed(screenshot, "image/png");
		}
		
		//driver.quit();
	}

}
