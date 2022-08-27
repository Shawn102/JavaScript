//A callback is a function passed as an argument to another function


{
    //Sequence Control
    //Sometimes you would like to have better control over when to execute a function.


    // 1st way to control sequence of function
    let displayResult = function(result) {
        console.log(result);
    };
    let calculation = function(sum1, sum2) {
        let sum = sum1 * sum2;
        return sum;
    };
    let resultOfCalculation = calculation(5, 5);
    displayResult(resultOfCalculation);



    // 2nd way to control sequence of function call
    //you could call a calculator function (calculator), 
    //and let the calculator function call the display function (display):
    let display = function(res) {
        console.log(res);
    }
    let calculator = function(sum1, sum2) {
        let sum = sum1 + sum2;
        display(sum);
    }
    let result = calculator(5, 5);

    {
        //In this two example above, we found problems
        //the first example above, is that you have to call two functions to display the result.
        //The problem with the second example, is that you cannot prevent the calculator function from displaying the result.
    }
}




{
    //That's why, we need to know about "callback function"
    //A callback is a function passed as an argument to another function.
    let display = function(res) {
        console.log(res);
    }
    let calculator = function(num1, num2, callback) {
        let total = num1 * num2;
        callback(total);
    }
    calculator(10, 100, display);
    //In the example above, "display" is the name of a function.
    //It is passed to "calculator()"" as an argument.
    ///**When you pass a function as an argument, remember not to use parenthesis.**/
}