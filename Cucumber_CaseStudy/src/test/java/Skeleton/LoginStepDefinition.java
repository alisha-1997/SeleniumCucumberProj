package Skeleton;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginStepDefinition {
	
	WebDriver driver;
	
	@Given("url of TestMeApp {string}")
	public void url_of_TestMeApp(String string) {
		String path="C:\\Users\\a07208trng_b4a.04.26\\Desktop\\SeleniumWorkspace\\Jars\\chromedriver_win32\\chromedriver.exe";
		System.setProperty("webdriver.chrome.driver", path);
	    driver=new ChromeDriver();
	    driver.get(string);
		driver.manage().window().maximize();
	}

	@When("user gives {string} as username")
	public void user_gives_as_username(String string) {
		driver.findElement(By.name("userName")).sendKeys(string);
	    
	}

	@When("user gives {string} as password")
	public void user_gives_as_password(String string) {
	    driver.findElement(By.name("password")).sendKeys(string);
	}

	@Then("user clicks on logIn button")
	public void user_clicks_on_logIn_button() {
	   driver.findElement(By.name("Login")).click();
	}

}
