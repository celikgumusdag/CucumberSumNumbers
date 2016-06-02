package Controller;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

import java.util.List;

/**
 * Created by celik.gumusdag on 02.06.2016.
 */
public class SumController {

    private List<Integer> numbers;
    private int sum;


    @Given("^a list of numbers$")
    public void aListOfNumbers(List<Integer> numbers) throws Throwable {
        this.numbers = numbers;
    }

    @When("^I summarize them$")
    public void iSummarizeThem() throws Throwable {
        for (Integer number : numbers) {
            sum += number;
        }
    }

    @Then("^should I get (\\d+)$")
    public void shouldIGet(int expectedSum) throws Throwable {
        assertThat(sum, is(expectedSum));
    }
}
