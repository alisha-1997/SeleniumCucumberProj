package skeleton;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;



@RunWith(Cucumber.class)
@CucumberOptions(plugin= {"pretty","html:src/Cucumber-reports"},features= {"src/test/resources/skeleton/demo.feature","src/test/resources/skeleton/Login.feature"}
)
//tags= {"not @tag1","@tag2"}
public class RunCucumber {
}
