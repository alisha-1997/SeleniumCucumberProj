package Skeleton;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class SearchProduct {
	WebDriver driver;
	@Given("the url of TestMeApp {string}")
	public void the_url_of_TestMeApp(String string) {
		String path="C:\\Users\\a07208trng_b4a.04.26\\Desktop\\SeleniumWorkspace\\Jars\\chromedriver_win32\\chromedriver.exe";
		System.setProperty("webdriver.chrome.driver", path);
	    driver=new ChromeDriver();
	    driver.get(string);
		driver.manage().window().maximize();
	}

	@When("user enter {string} as username")
	public void user_enter_as_username(String string) {
		driver.findElement(By.name("userName")).sendKeys(string);
	}

	@When("user enter {string} as password")
	public void user_enter_as_password(String string) {
		driver.findElement(By.name("password")).sendKeys(string);
	}

	@When("user clicks on login button")
	public void user_clicks_on_login_button() {
		driver.findElement(By.name("Login")).click();
	}

	@When("user searches for {string} in search field")
	public void user_searches_for_in_search_field(String string) {
	    driver.findElement(By.name("products")).sendKeys(string);
	}
	
	@When("user clicks on findDetails")
	public void user_clicks_on_findDetails() {
	    driver.findElement(By.xpath("/html/body/div[1]/form/input")).click();
	}

	@Then("user clicks on addToCart")
	public void user_clicks_on_addToCart() {
	    driver.findElement(By.xpath("/html/body/section/div/div/div[2]/div/div/div/div[2]/center/a")).click();
	}
	@When("user clicks on cart")
	public void user_clicks_on_cart() {
	    driver.findElement(By.xpath("//*[@id=\"header\"]/div[1]/div/div/div[2]/div/a[2]")).click();
	}

	@When("user clicks on checkout")
	public void user_clicks_on_checkout() {
	    driver.findElement(By.xpath("//*[@id=\"cart\"]/tfoot/tr[2]/td[5]/a")).click();
	}

	@When("user clicks on PrceedToPay")
	public void user_clicks_on_PrceedToPay() {
	    driver.findElement(By.xpath("/html/body/b/div/div/div[1]/div/div[2]/div[3]/div/form[2]/input")).click();
	driver.manage().timeouts().implicitlyWait(1, TimeUnit.MINUTES);
	}

	@When("user selects bank")
	public void user_selects_bank() {
	    driver.findElement(By.xpath("//label[contains(text(),'HDFC Bank')]")).click();
	    
	}

	@When("user clicks on continue")
	public void user_clicks_on_continue() {
	    driver.findElement(By.xpath("//*[@id=\"btn\"]")).click();
	}

	@When("user gives {string} the userName")
	public void user_gives_the_userName(String string) {
	    driver.findElement(By.name("username")).sendKeys(string);
	}

	@When("user gives {string} as the Password")
	public void user_gives_as_the_Password(String string) {
	    driver.findElement(By.name("password")).sendKeys(string);
	}

	@When("user clicks on Login")
	public void user_clicks_on_Login() {
	    driver.findElement(By.xpath("//*[@id=\"horizontalTab\"]/div[2]/div/div/div/div/form/div/div[3]/input")).click();
	}
	@When("user enters {string} transactionPassword")
	public void user_enters_transactionPassword(String string) {
	    driver.findElement(By.name("transpwd")).click();
	}

	@Then("user clicks on PayNow")
	public void user_clicks_on_PayNow() {
	    driver.findElement(By.xpath("//*[@id=\"horizontalTab\"]/div[2]/div/div/div/div/form/div/div[2]/input")).click();
	}


}
