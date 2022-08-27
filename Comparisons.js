
//JavaScript comparison and Logical Operators

{
    //Comparison and Logical operators are used to test for 'true' or 'false'.

    {
        //Comparison Operators
        //Comparison operators are used in logical statements to determine equality or difference between variables or values. 
        //Given that x = 5, the table below explains the comparison operators:

        {

            // '=='equal to (check the values only)
            let x = 5;
            let z = "5";
            console.log(x==z);//it'll returns 'true',because in z variable the value same inside the string same as x
            console.log(x==8); //it'll returns 'false' because the value of x is not 8
            let y = 5;
            console.log(x==y); //it'll returns 'true',because both value same 
            //console.log(x===y);
        }

        {
            //'===' equal value and equal type

            let x = 5;
            let y = "5";
            let z = 5;
            console.log(x===y); //It'll returns 'false'because the value of 'x' and 'y' same but type is not same
            //'x' containing number type value but 'y' containing string type value,that's why it returns 'false'
            console.log(x===z);
            //it'll returns 'true' because both value and type same
        }


        {
            // '!=' not equal
            let x = 5;
            let y = 8;
            let z = "5";
            console.log(x!=y); //It'll returns 'true' because both value is not equal
            console.log(x!=z); //It'll returns 'false' because both value is equal
        }

        {
            // '!==' not equal value or not equal type
            let x = 5;
            let y = 5;
            let z = "5";
            let a = 8;
            console.log(x!==y); //It'll returns 'false',because both value and type same.
            console.log(x!==z); //Now it'll returns 'true',beacuse both value same but type is not same
            console.log(x!==a); //It'll returns 'true'
        }

        {
            // '>'greater than
            let x = 5;
            let y = 8;
            let z = 3;
            console.log(x>y); //returns 'false',because x is not greater than y
            console.log(x>z); //returns 'true',because x value is larger than z
        }


        {
             // '<' less than
             let x = 5;
             let y = 8;
             let z = 2;
             console.log(x<y); //returns 'true',
             console.log(x<z); //returns 'false'
        }


        {
            // '>=' greater than or equal to
            let x = 5;
            let y = 8;
            let z = 1;
            console.log(x>=y); //returns 'false'
            console.log(x>=z); //returns 'true'
        }

        {
            // '<=' less than or equal to
            let x = 5;
            let y = 8;
            let z = 3;
            console.log(x<=y); //returns 'true'
            console.log(x<=z); //returns 'false'
        }
    }

}