//javaScript Booleans

{
    let x = 0;
    let z = "Shawn";
   let y = Boolean(x);
    console.log(y);
    console.log(Boolean(z));
}




{
    //There are 7 things in JS Booleans that return false(and it's known as falsy value)

    ///1)The Boolean value of 0 (zero) is false:
    ///2)The Boolean value of -0 (minus zero) is false:
    ///3)The Boolean value of "" (empty string) is false:
    ///4)The Boolean value of undefined is false:
    ///5)The Boolean value of null is false:
    ///6)The Boolean value of 'false'(you guessed it) false:
    ///7)The Boolean value of 'NaN' is false:
}









{
    //Everything With a "Value" is True
    {
        let x = true;
        console.log(x);
    }

    {
        let x = 100;
        console.log(Boolean(x));
    }

    {
        let y = 3.14;
        console.log(Boolean(y));
    }

    {
        let z = "false";
        console.log(Boolean(z));
    }


    {
        const math_calculation = 7+1+3.14;
        console.log(Boolean(math_calculation));
    }

}




{
    //Everything Without a "Value" is False
    {
        let x = "";
        console.log(Boolean(x));
    }

    {
        const b = NaN;
        //or
        const d = 10/"Apple";
        console.log(Boolean(b));
        console.log(Boolean(d));
    }

    {
        let a;
        console.log(Boolean(a));
    }

    {
        let c = false;
        console.log(Boolean(c));
    }

    {
         const nul = null;
         console.log(Boolean(nul));
    }

    {
        const zero = 0;
        console.log(Boolean(zero));
    }

    {
        let e = -0;
        console.log(Boolean(e));
    }
}