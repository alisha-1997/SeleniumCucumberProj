package Skeleton;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import java.sql.Driver;

public class RegisterStepDefinition {

	WebDriver driver;
	
	@Given("URL of TestMeApp {string}")
	public void url_of_TestMeApp(String string) {
		String path="C:\\Users\\a07208trng_b4a.04.26\\Desktop\\SeleniumWorkspace\\Jars\\chromedriver_win32\\chromedriver.exe";
		System.setProperty("webdriver.chrome.driver", path);
	    driver=new ChromeDriver();
	    driver.get(string);
		driver.manage().window().maximize();
		Assert.assertTrue(driver.getCurrentUrl().contains("Register"));
	}


	@When("user enters {string} as userName")
	public void user_enters_as_userName(String string) {
		driver.findElement(By.name("userName")).sendKeys(string);
	}

	@When("user enters {string} as FirstName")
	public void user_enters_as_FirstName(String string) {
		driver.findElement(By.name("firstName")).sendKeys(string);
	}

	@When("user enter {string} as LastName")
	public void user_enter_as_LastName(String string) {
		driver.findElement(By.name("lastName")).sendKeys(string);
	}
	@When("user enters {string} as password")
	public void user_enters_as_password(String string) {
	    driver.findElement(By.name("password")).sendKeys(string);
	}

	@When("user enters {string} as confirmPassword")
	public void user_enters_as_confirmPassword(String string) {
		driver.findElement(By.name("confirmPassword")).sendKeys(string);
	}

	@When("user click {string} as gender")
	public void user_click_as_gender(String string) {
	    driver.findElement(By.cssSelector("input[value='Female']")).click();
	}

	@When("user enters {string} as email")
	public void user_enters_as_email(String string) {
		driver.findElement(By.name("emailAddress")).sendKeys(string);
	}

	@When("user enters {string} as mobileNumber")
	public void user_enters_as_mobileNumber(String string) {
		driver.findElement(By.name("mobileNumber")).sendKeys(string);
	}
	

	@When("user enters {string} as dob")
	public void user_enters_as_dob(String string) {
	    driver.findElement(By.name("dob")).sendKeys(string);
	}
	@When("user enters {string} as address")
	public void user_enters_as_address(String string) {
	     driver.findElement(By.name("address")).sendKeys(string);
	}

	@When("user selects {string} as securityQuestion")
	public void user_selects_as_securityQuestion(String string) {
		Select sel=new Select(driver.findElement(By.name("securityQuestion")));
	}

	@When("user enters {string} as nickName")
	public void user_enters_as_nickName(String string) {
	    driver.findElement(By.name("answer")).sendKeys(string);
	}
	
	@Then("user clicks on register button")
	public void user_clicks_on_register_button() {
	    driver.findElement(By.name("Submit")).click();
	}




	
}
