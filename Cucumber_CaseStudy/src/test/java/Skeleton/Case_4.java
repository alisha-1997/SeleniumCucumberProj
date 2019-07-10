package Skeleton;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Case_4 {
	WebDriver driver;
	@Given("url for for TestMeApp {string}")
	public void url_for_for_TestMeApp(String string) {
		String path="C:\\Users\\a07208trng_b4a.04.26\\Desktop\\SeleniumWorkspace\\Jars\\chromedriver_win32\\chromedriver.exe";
		System.setProperty("webdriver.chrome.driver", path);
		driver=new ChromeDriver();
	    driver.get(string);
		driver.manage().window().maximize();
	}

	@When("user enters username field {string}")
	public void user_enters_username_field(String string) {
	   driver.findElement(By.name("userName")).sendKeys(string);;
	}

	@When("user enters password field {string}")
	public void user_enters_password_field(String string) {
	    driver.findElement(By.name("password")).sendKeys(string);
	}

	@When("user clicks login button")
	public void user_clicks_login_button() {
		driver.findElement(By.name("Login")).click();
	}
	
	@When("user clicks serach field to search {string}")
	public void user_clicks_serach_field_to_search(String string) {
		 driver.findElement(By.name("products")).sendKeys(string);
	}

	@When("user clicks Find Details")
	public void user_clicks_Find_Details() {
		driver.findElement(By.xpath("/html/body/div[1]/form/input")).click();
	}

	@Then("TestMeApp doesnt display the cart icon")
	public void testmeapp_doesnt_display_the_cart_icon() {
	    
	    Assert.assertFalse((driver.findElement(By.xpath("a[contains(text(),'cart')]")).isDisplayed()));
	}

}
