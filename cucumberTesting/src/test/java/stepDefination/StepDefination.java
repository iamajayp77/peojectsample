package stepDefination;

import java.util.List;

import org.openqa.selenium.By;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class StepDefination {
	
	public WebDriver driver;
	@Given("user is on login page")
	public void user_is_on_login_page() {
		WebDriverManager.chromedriver().setup();
		driver= new ChromeDriver();
		driver.get("https://www.saucedemo.com/");
		driver.manage().window().maximize();
	}

	@When("^user enter (.*) and (.*)$")
	public void user_enter_username_and_password(String uname, String pass) {
		driver.findElement(By.id("user-name")).sendKeys(uname);
		driver.findElement(By.id("password")).sendKeys(pass);
	}
	
	@When("user enter credentials using DataTable")
	public void user_enter_credentials_using_DataTable(DataTable dataTable) {
		List<List<String>> data = dataTable.cells();
		driver.findElement(By.id("user-name")).sendKeys(data.get(0).get(0));
		driver.findElement(By.id("password")).sendKeys(data.get(0).get(1));
	}
	
	@And("click on login button")
	public void click_on_login_button() {
		driver.findElement(By.id("login-button")).click();
	}

	@Then("user should land on home page")
	public void user_should_land_on_home_page() {
		System.out.println("Login is sucessful");
		driver.close();
	}

}
