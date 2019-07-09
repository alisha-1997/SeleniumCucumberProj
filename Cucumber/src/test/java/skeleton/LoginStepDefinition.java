package skeleton;

import java.sql.Driver;
import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;



public class LoginStepDefinition {
	WebDriver driver;
	
	
	@Given("url of demowebshop {string}")
	public void url_of_demowebshop(String string) {
		String path="C:\\Users\\a07208trng_b4a.04.26\\Desktop\\SeleniumWorkspace\\Jars\\chromedriver_win32\\chromedriver.exe";
		System.setProperty("webdriver.chrome.driver", path);
	    driver=new ChromeDriver();
	    driver.get(string);
		driver.manage().window().maximize();
		Assert.assertTrue(driver.getCurrentUrl().contains("login"));

	}

	@When("user enters {string} as username")
	public void user_enters_as_username(String string) {
	    // Write code here that turns the phrase above into concrete action
		driver.findElement(By.name("Email")).sendKeys(string);

	}

	@When("user enters {string} as password")
	public void user_enters_as_password(String string) {
	    
		driver.findElement(By.name("Password")).sendKeys(string);

	}

	@Then("user is in webshop as {word}")
	public void user_is_in_webshop(String type) {
	   driver.findElement(By.cssSelector("input[value='Log in']")).click();
	   Assert.assertTrue(driver.findElement(By.linkText("Log Out")).isDisplayed());
	}
	
	@Given("Admin of the test me app enters")
    public void admin_of_the_test_me_app_enters(io.cucumber.datatable.DataTable dataTable) {
		List<List<String>> list=dataTable.asLists();
		for(List<String> strings:list)
		{
			for(String s:strings) {
				System.out.print(s+"\t");
			}
			System.out.println("");
		}
	}

}
