{
    //document.write("404" + "1");
    //window.alert("404 not found");
    console.log("Hello Js");
}
{
    //JS statement:
    //JavaScript statement composed of (values, operator, expression, keyword, comments)
    //Semicolons separate JavaScript statements.

   //Add a semicolon at the end of each executable statement:
  //Examples
let a, b, c;  // Declare 3 variables
a = 5;        // Assign the value 5 to a
b = 6;        // Assign the value 6 to b
c = a + b;    // Assign the sum of a and b to c
console.log(c);
}

{
    //JavaScript Expressions
    //An expression is a combination of values,operators,variables
    let x = 5 * 10;
    console.log(x);
}

{
    //JavaScript Identifiers

    //Identifiers are names.
    //In JavaScript, identifiers are used to name variables (and keywords, and functions, and labels).
    // Numbers are not allowed as the first character.This way JavaScript can easily distinguish identifiers from numbers.

    //JavaScript is Case Sensitive

    /*All JavaScript identifiers are case sensitive. 

The variables lastName and lastname, are two different variables:
let lastname, lastName;
lastName = "Doe";
lastname = "Peterson";*/

}



{
    // JavaScript Variables:

    /*There are 3 ways to declare a JavaScript variable:

    1. Using var
    2. Using let
    3. Using const
    */

    //Variables

    //Variables are containers for storing data (values).

}



{
      /*JavaScript Comparison Operators:

      Operator 	   Description

        == 	       equal to

        === 	   equal value and equal type

        != 	       not equal

        !== 	   not equal value or not equal type

        > 	       greater than

        < 	       less than

        >= 	       greater than or equal to

        <= 	       less than or equal to

        ? 	       ternary operator  */
}

{
    /*
    JavaScript Data Types

    Undefined:

    In JavaScript, a variable without a value, has the value 'undefined'. The type is also 'undefined'.
    Any variable can be emptied, by setting the value to undefined. The type will also be undefined
    */
}




{
    // JavaScript Functions

    // A JavaScript function is a block of code designed to perform a particular task.
    // A JavaScript function is executed when "something" invokes it (calls it).

    function myFunction(p1,p2){
        //console.log("Hello everyone");
        return p1 * p2;
    }
    console.log(myFunction(10,20));
    let x = myFunction(5,100);
    let y = x + 50;
    console.log(x);
    console.log(y);



   /* JavaScript Function Syntax

    A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

    Function parameters are listed inside the parentheses () in the function definition.

    Function arguments are the values received by the function when it is invoked.

    Inside the function, the arguments (the parameters) behave as local variables.
    */

}
{
    // Function Invocation:

    //The code inside the function will execute when "something" invokes (calls) the function:

    
    //1. When an event occurs (when a user clicks a button)
    //2. When it is invoked (called) from JavaScript code
    //3. Automatically (self invoked)
    


}



{
    //JavaScript Objects:

    //Creating Objects with the car properties
    const cars = {
        carName:" Fiat ",
        carModel: 500,
        carWeight:" 850kg ",
        carColor:" white ",
        carStart: function(h1,h2) {
            console.log("The car engine was started by it's owner at 10am"); 
            return h1 * h2;
        },
        carDrive: function (topSpeed,p1,p2){
            console.log("The car was driven by it's owner on the highway,at the top speed of");
            return topSpeed + p1 + p2;  
        }
    }
    console.log(cars.carName); // Accessing "Object" Properties we have to use ('objectName.propertyName').
    console.log(cars["carModel"]); //We can also access 'Object'properties using this way(objectName["propertyName"]).


    const carsAllValue = [cars.carName, cars.carModel, cars.carWeight, cars.carColor, cars.carStart(10,20), cars.carDrive("top speed per hour ",240,"km")]; //We can also create an 'Array' by using object properties,just we need to call them in proper way
    console.log(carsAllValue);
    console.log(typeof carsAllValue); //It'll return 'Object', because all 'Arrays' are special types of object.Below we have 2 solution for this problem 
    console.log(Array.isArray(carsAllValue)); // "Array.isArray()" method returns 'true' if the following statement belongs to Array property 
    console.log(Array.isArray(cars)); //It'll returns 'false' because 'cars' belongs to 'Object'type not an 'Array', that's why it returns 'false'
    console.log(carsAllValue instanceof Array); // "instanceof Array" property returns 'true' if the following variable belongs to Arrau type
}







{
    {
        // JavaScript Strings 
    
        // JavaScript strings are used for storing and manipulating text.
    
        // String Length:
        // To find the length of a string, use the built-in length property:
        let x = "Hello everyone";
        y = x.length;
        console.log(x);
        console.log(y);
    }

    {
        // Escape Character

        //Because strings must be written within quotes, JavaScript will misunderstand this string:
        //The string will be chopped to "We are the so-called ".
        //he solution to avoid this problem, is to use the backslash escape character.
        //The backslash (\) escape character turns special characters into string characters:



        /*let text = "We are the so-called "Vikings" from the north.";
        console.log(text); //it'll return error  */

        let text = "We are the so-called \"Vikings\" from the north."; 
        console.log(text);
    }
}


{
    //JavaScript string methods

    //Extracting string parts
    //There are 3 ways for extracting JS string part

    // 1. "stringName.slice()"method.
    // 2. "stringName.substring()"method.
    // 3. "stringName.substr()"method.

    {
        //.slice()method
        //For this method we need two parameter,1st parameter for indicating the start point and 2nd parameter for ending point
        //Like this ".slice(start,end)"

        const definationOfGoodPeople = "Hello everyone,good people always helpful,they're not selfish";
        let badPeople = "Bad people always " + definationOfGoodPeople.slice(54); //we can also declare 1 parameter for indicating starting point
        console.log(badPeople);
       //console.log(definationOfGoodPeople.search("selfish"));

       console.log(definationOfGoodPeople.slice(15,41)); // And also we can use 2 parameter for indicating starting point and ending point
       //Here 1st parameter 15 indicating starting point,and 2nd parameter indicating the ending point 
    
    }

    {
        //".substring()"method
        //For this method we need two parameter,1st parameter for indicating the start point and 2nd parameter for ending point(but cannot use negative indexes)
        //Like this ".substring(start,end)"(It's similar to '.slice()'method but '.slice()'method can take negative indexes and ".substring()"cannot take negative indexes)

        const venilaJsForEveryone = "Hi guys,I'm Shawn,I'm studying CSE at SWFU";
        let myName = venilaJsForEveryone.substring(8,17);
        console.log(myName);
        console.log(venilaJsForEveryone.substring(18)); // Also we can use 1 parameter for indicating start point
        //If we use 1parameter then it'll return whole string after it's starting point
    }

    {
        //".substr()"method
        //For this method we need two parameter,1st parameter for indicating the start point and 2nd parameter for the 'length' we want to take.
        //Like this ".substr(start,length)"

        const ECMAScriptNowadays = "JavaScript trend,JS is one of the most famous programming language nowadays";
        let extractPart = ECMAScriptNowadays.substr(0,16);
        console.log(extractPart);
        console.log(ECMAScriptNowadays.substr(17,49));

    }



    //Replacing string content
    //".replace()"method
    //The replace() method replaces a specified value with another value in a string:
    {
        let helloMicrosoft = "Visit Microsoft.com";
        let wThreeSchool = helloMicrosoft.replace("Microsoft","w3school");
        console.log(wThreeSchool);    
    }

    //Converting to Upper and Lower Case
    //There is two method for converting a string to upper case and lower case
    {
        //".toUpperCase()"method
        let to_upperCase = "Welcome to JS tutorial";
        console.log(to_upperCase.toUpperCase()); //Converting to Upper Case
        // Converting to Lower Case
        console.log(to_upperCase.toLowerCase());
    }

    {
        //".trim()"method
        //".trim()"method remove the white speces from string,this method used for taking user input,if they give any extra space in their text
        const helloTrim = "  Hello everyone  ";
        console.log(helloTrim); // If we don't use ".trim()"method it will provide blank space after and before the text
        console.log(helloTrim.trim()); // Now extra blank space will be remove
    }

    {
        //The concat() method
        //".concat()"method join two or more string
        let hiJs = "JS is a programming language,";
        let welcomeJs = " Nowadays JS is one of the most famous language for programmers";
        let totalText = hiJs.concat("",welcomeJs);
        console.log(totalText);
    }

    {
        //Extracting String Characters
        //There are 3methods for extracting string characters

        // 1. ".charAt(position)"method
        // 2. ".charCodeAt(position)"method
        // 3. "Property access[]"

        {
            //".charAt()"method
            let helloJs = "Hello everyone";
            console.log(helloJs.charAt(8));
            console.log(helloJs.charAt(0));
        }
        {
            //charCodeAt() method
            let helloJs = "Hello everyone";
            console.log(helloJs.charCodeAt(8)); //The charCodeAt() method returns the unicode of the character at a specified index in a string:
        }

        {
            //property access[]
            let helloJs = "Hello everyone";
            console.log(helloJs[0]);
            console.log(helloJs[1]);
        }

        //What we learned in string method chapter?
        

        //1)"stringName.length"

        //2)"stringName.slice()" method for extracting string part

        //3)"stringName.substring()"method for extracting string part

        //4)"stringName.substr()"method for extracting string part

        //5)"stringName.replace()"method for replacing string part

        //6)"stringName.toUpperCase()"method for making the string to upper case letters

        //7)"stringName.toLowerCase()"method for making the string to lower case letters

        //8)"stringName.trim()" method for removing extra blank space from the string

        //9)"stringName.charAt()"method for extracting string letters

        //10)"stringName.charCodeAt()"method for findout the unicode of the letters

        //11)"stringName[position]"for accessing the specific letter

        //12)".concat()"method,,this method adds two or more string together

    }
}









//JavaScript String Search 
{
    // JavaScript methods for searching strings:


     
    //1)"stringName.indexOf()"method.

    //2)"stringName.lastIndexOf()"method.

    //3)"stringName.search()" method.

    //4)"stringName.match()"method.

    //5)"stringName.includes()"method.

    //6)"stringName.startsWith()"method.

    //7)"stringName.endsWith()"method.






    {

        //"stringName.indexOf()"method.

        //For this method we can use only the searching part of the string and also we can indicate the starting point,
        //If we don't use the starting point, it'll returns the index of (the position of) the first occurrence of a specified text in a string:
        let helloJs = "Hello everyone,I'm new in Programming,I hope everyone gona help me as a junior";
        console.log(helloJs.indexOf("everyone"));
        //It returns the first occurrence of a specified text in a string,because we didn't mention any starting point
        console.log(helloJs.indexOf("everyone",14));
        //Now this returns the 2nd "everyone"position in the string because we mention the strating point,and that's covered the first occurrence of a specified text,
        //That's why it's ignore the first one and returns the 2nd match position

    }


    {
        //"stringName.lastIndexOf()"method

        // he lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

        let hiJs = "Hello,I want to know everyone,I hope everyone will be good";
        console.log(hiJs.lastIndexOf("everyone")); // This will returns the last matching text of the string.
        console.log(hiJs.lastIndexOf("everyone",22));  //This will return the the 21 because it ignore the last match as we mention the string search starting point  

    }


    {
        //"stringName.search()"method
        let programmers = "Nowadays it's programming trend,programming is only real for programmers";
        console.log(programmers.search("programming"));
        console.log(programmers.search("note")); //It'll returns '-1'because text is not found
        //it returns the 1st match of specified text of the string
        /*
        It's not similar to".indexOf()"method,because".indexOf()"method can take the 2nd start position argument.
        But ".search()"method can not take the 2nd start position argument,but ".search()"method can take
        the powerful search value(regular expression),but ".indexOf()"method can take powerful regular expression 
        */

    }


    {
        //"stringName.match()"method
        //The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.
        let text = "The rain in SPAIN stays mainly in the plain";
        console.log(text.match(/ain/g)); //It'll returns all the possible matching values as an 'array'

        let textOf = "The rain in SPAIN stays mainly in the plain";
        console.log(textOf.match(/ain/gi)); //Perform a global, case-insensitive search for "ain"

    }



    {
        //"String.includes()"method

        //The includes() method returns true if a string contains a specified value.If the value not exist then it'll returns false.
        let text = "Hello world, welcome to the universe.";
        console.log(text.includes("world")); //It'll returns true.Because this string contains this 'world' value
        console.log(text.includes("JavaScript"));
        //It'll returns false,Because this value have no existing in this string
        //we can also use 2nd parameter for starting position argument
    }



    {
        //"stringName.startsWith()"method
        let text = "Hello world, welcome to the universe.";
        console.log(text.startsWith("Hello")); //This will returns'true',Because this string starts with this specified value
        console.log(text.startsWith("welcome",13));
        //We can also use 2nd parameter argument for starting point,we used'13'that's why it's ignore the first 13 letters,and returns true
        console.log(text.startsWith("world"));
        //it'll returns'false',because this string not started with this specified text.
    }


    {
        //"stringName.endsWith()"method
        let text ="Hello world, welcome to the universe";
        console.log(text.endsWith("universe")); //It'll returns'true',because this string ends with the specified value
        console.log(text.endsWith("world",11)); 
        //This one also returns'true',because we specified the 2nd argument,for".endsWith()"method 2nd argument declare the"length"of the string we want to work on
        console.log(text.endsWith("world"));
        //Now it'll return'false',because we didn't give the 2nd "length"argument,that's why it's not the last value of the string and returns 'false'.
    }

}





//JavaScript String Templates

{
   //JavaScript Template Literals.
   
/*
Synonyms:

1.)Template Literals
2.)Template Strings
3.)String Templates
4.)Back-Tics Syntax(``)
*/


// Interpolation
//'Template literals' provide an easy way to interpolate variables and expressions into strings.
//The method is called string interpolation.
//The syntax is: ${....}

{
    //Variable Substitutions
    //'Template literals allow variables in strings

    let firstName = "John";
    let lastName = "Doe";
    let fullName = `Welcome ${firstName} ${lastName}`; //We can concat two string like this
    console.log(fullName);

}


}









//JavaScript Numbers
{
    //JavaScript has only one type of number,Numbers can be written with or without decimals.

    //Precision:
    //Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
    //The maximum number of decimals is 17, but floating point arithmetic is not always 100% accurate:


    //NaN - Not a Number:
    //NaN is a JavaScript reserved word indicating that a number is not a legal number.


    //Infinity:
    //Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.
    //Division by 0 (zero) also generates Infinity:
    //Infinity is a number: typeof Infinity returns number.
}








//JavaScript Number Methods

{
    //The toString() Method:
    //The toString() method returns a number as a string.
    let x = 123;
    console.log(x.toString()); //It'll convert the number as string because of ".toString()"method,returns 123 from variable x.
    console.log((123).toString()); // returns 123 from literal 123
    console.log((100+23).toString()); //// returns 123 from expression 100 + 23 .


    //The toExponential() method
    //toExponential() returns a string, with a number rounded and written using exponential notation.
    let y = 9.656;
    console.log(y.toExponential(2));//We used 2 as parameter so it'll take 2numbers after the decimal point
    //A parameter defines the number of characters behind the decimal point:
    console.log(y.toExponential(6));
    console.log(y.toExponential()); //It'll returns full decimal number because we didn't mention anything
    //If we not use any parameter then it'll returns the full decimals number



    //The toFixed() method:
    //toFixed() returns a string, with the number written with a specified number of decimals:
    let z = 9.656;
    console.log(z.toFixed(0));           // returns 10
    console.log(z.toFixed(2));           // returns 9.66
    console.log(z.toFixed(4));           // returns 9.6560
    console.log(z.toFixed(6));           // returns 9.656000 
    //toFixed(2) is perfect for working with money.



    //The toPrecision()method:
    //toPrecision() returns a string, with a number written with a specified length:
    let a = 9.656;
    console.log(a.toPrecision());        // returns 9.656
    console.log(a.toPrecision(2));       // returns 9.7
    console.log(a.toPrecision(4));       // returns 9.656
    console.log(a.toPrecision(6));       // returns 9.65600 





    //The valueOf() method:
    //".valueOf()"method returns a number as a number.
    let b = 123;
    console.log(b.valueOf());            // returns 123 from variable x
    console.log((123).valueOf());        // returns 123 from literal 123
    console.log((100 + 23).valueOf());   // returns 123 from expression 100 + 23 

    //All JavaScript data types have a valueOf() and a toString() method.




    {
        //Converting variables to Numbers

        //There are 3 JavaScript methods that can be used to convert variables to numbers:

        //1.)The "Number()"method

        //2.)The "parseInt()"method

        //3.)The "parseFloat()"method


        {
         //"Number()"method can be used to converting JavaScript variables to numbers:
         let x = Number(true);
         let y = Number(false);
         let a = Number("10");
         let b = Number(" 99");
         let c = Number("10 20");
         let d = Number("10.33");
         console.log(x); //It'll returns 1.
         console.log(y); //It'll returns 0.
         console.log(a); //It'll returns 10.
         console.log(b); //It'll returns 99, The blank space doesn't matter here,"Number()"methods ignore blank space
         console.log(c); // It'll returns 'NaN'(Not a Number),because "Number()"method cann't identify the 2nd value that's why it returns 'NaN'
         console.log(d); //It'll returns '10.33',
         //decimals number allowed in "Number()"method but after the 1st value we can not use blank space or comma to give the 2nd value

        }

        {
            //"parseInt()"method
            //parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
            let z = parseInt("-10");
            let y = parseInt("19.33");
            let x = parseInt("10 20 30");
            let a = parseInt("20 years");
            let b = parseInt("years 30");
            console.log(z); //z will returns -10
            console.log(y); //y will returns 19.33
            console.log(x);//x will returns 10,because in "parseInt()"method just the 1st value is allowed and others will be ignored.
            console.log(a); // a will returns 20 and others will be ignored
            console.log(b); //It'll returns 'NaN',because the 1st value not a number,and this method never check the 2nd value always returns the 1st value

        }

        {
            //"parseFloat()"method
            //parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:
            let z = parseFloat("-10.24");
            let y = parseFloat("49.33");
            let x = parseFloat("35 20 30");
            let a = parseFloat("50 years");
            let b = parseFloat("years 30");
            console.log(z); //z will returns -10.24
            console.log(y); //y will returns 49.33
            console.log(x);//x will returns 35,because in "parseFlozt()"method just the 1st value is allowed and others will be ignored.
            console.log(a); // a will returns 50 and others will be ignored
            console.log(b); //It'll returns 'NaN',because the 1st value not a number,and this method never check the 2nd value always returns the 1st value
        }
    }


    //JavaScript MIN_VALUE and MAX_VALUE
    {
        //MAX_VALUE returns the largest possible number in JavaScript.
        let x = Number.MAX_VALUE;
        console.log(x); //It'll returns the largest possible number in JS,(1.7976931348623157e+308)

        //MIN_VALUE returns the lowest possible number in JavaScript.
        let y = Number.MIN_VALUE;
        console.log(y); ////It'll returns the lowest possible number in JS,(5e-324)

    }

    {
        //JavaScript POSITIVE_INFINITY
        //POSITIVE_INFINITY is returned on overflow:
        let x =Number.POSITIVE_INFINITY;
        console.log(x);


        //JavaScript NEGATIVE_INFINITY
        //NEGATIVE_INFINITY is returned on overflow:
        let y = Number.NEGATIVE_INFINITY;
        console.log(y);
    }

    {
        //JavaScript NaN - Not a Number
        let x = Number.NaN;
        console.log(x); //It'll returns 'NaN' also
    }



    //Number Properties Cannot be Used on Variables
    //Number properties belongs to the JavaScript's number object wrapper called Number.
}

{
    //What we learned in 'JavaScript Number Methods'chapter?
    
    //Let's have a quick look.

    //Number methods for converting number to String

    //1)".toString()"method,converting number to string
    //2)".toExponential()"method,converting number to string
    //3)".toFixed()"method,converting number to string
    //4)".toPrecision()"method,converting number to string

    //5)"valueOf()"methods returns number as a number

    //Converting variables to Numbers,there are 3 methods in JS for this:
    //6)"Number()"method,
    //7)"parseInt()"method,
    //8)"parseFloat()"method. 

    //JavaScript MIN_VALUE and MAX_VALUE properties
    //9)MAX_VALUE,we can't use this property with variables,we have to use this like this"Number.MAX_VALUE"
    //10)MIN_VALUE,we can't use this property with variables,we have to use this like this"Number.MIN_VALUE"

    //JavaScript POSITIVE_INFINITY and NEGATIVE_INFINITY
    //11)POSITIVE_INFINITY,we can't use this property with variables,we have to use this like this"Number.POSITIVE_INFINITY".
    //12)NEGATIVE_INFINITY,we can't use this property with variables,we have to use this like this"Number.NEGATIVE_INFINITY".


}








//JavaScript Arrays
{
    //JavaScript arrays are used to store multiple values in a single variable.
    //Example
    const cars = ["Saab", "Volvo", "BMW"];
    console.log(cars); //accessing the full array properties

    //

   /* Note: Array indexes start with 0.
   [0] is the first element. [1] is the second element.*/


   {
       //Arrays are Objects
       //Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
       //But JavaScript arrays are best described as arrays
       //Arrays use numbers to access its "elements". In this example, person[0] returns John:
       const person = ["John", "Doe", 46];
       console.log(person[0]); //Array can contain different type of data at the same time
   }

   {
      //Array Elements Can Be Objects
      //Example:
      //You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:
      //myArray[0] = Date.now;
      //myArray[1] = myFunction;
      //myArray[2] = myCars;
   }

   {
       //Array Properties and Methods

       //The 'length'property
       //The 'length' property of an array returns the length of an array (the number of array elements).
       let x = ["Shawn", "Software Engineer", "Shawn is 21 years old and his position in the class:", 1];
       console.log(x.length);

       //Note: The'length'property is always one more than the highest array index.

       //Accessing the 1st array element
       console.log(x[0]);

       //Accessing the last array element dynamically:
       console.log(x[x.length -1]);
   }

   {
       //Looping Array Elements

       //The safest way to loop through an array,is using a'for'loop
       const personInTop =["Shawn is the 1st boy in his class", "Shain is the 2nd boy in his class", "Unknown is the 3rd boy in their class"];
       let pLength = personInTop.length;
       for(p = 0; p < pLength; p++){
           console.log(personInTop[p]);
       }

       /*The same loop,if we want to transfer this in html file we have to do like below
       const personInTop =["Shawn is the 1st boy in his class", "Shain is the 2nd boy in his class", "Unknown is the 3rd boy in their class"];
       let pLength = personInTop.length;
       let text = "<ul>";
       for(p = 0; p < pLength; p++){
           text += "<li>" + personInTop[p] + "</li>";
       }
       text += "</ul>";
       document.getElementById("...").innerHTML = text;*/
   }
   {
       //You can also use the Array.forEach() function:
       const topGuy = ["Shawn is smart enough for doing anything", "Shain also smart enough for solving any problem", "Unknown person expert in giving fake news to people"];
       topGuy.forEach(fakeAndTop);
       function fakeAndTop(value) {
           console.log(value);  
       }

       /*If we want to transfer this in html file we have to do like below
       const topGuy = ["Shawn is smart enough for doing anything", "Shain also smart enough for solving any problem", "Unknown person expert in giving fake news to people"];
       let text = "<ul>";
       topGuy.forEach(fakeAndTop);
       text += "</ul>";
       function fakeAndTop(value){
           text += "<li>" + value + "</li>";
       }
       document.getElementById("...").innerHTML = text;  */

   }



   {
       //The Difference Between Arrays and Objects

       //In JavaScript, arrays use 'numbered indexes'.
       //In JavaScript, objects use 'named indexes'.

       //Arrays are a special kind of objects, with 'numbered indexes'.


       //When to Use Arrays. When to use Objects.
       
       //JavaScript does not support associative arrays.
       //You should use objects when you want the element names to be strings (text).
       //You should use arrays when you want the element names to be numbers.
   }


   {
       //How to recognize an Array?
       //There is 2 solution for this problem
       //1)Array.isArray(),method returns 'true',if the following content become an Array
       //2)stringName 'instanceof Array', operator returns'true'if an object is created by a given constructor


       //Note: 'typeof' operator returns 'object' both for "Array" an "Object"
       {
           const person =["Jhon", "Dou", "Rock"]; //This one is an Array
           const fruits = {March:"Mango", wholeYear:"Strawberry"}; //This one is real Object
           console.log(typeof person); //It'll returns'object',but we know this is an"Array",and all the"Arrays are special typeof object"
           //Instead of 'typeof',if we use "Array.isArray()"method it'll returns 'true',becuase it's an Array
           console.log(Array.isArray(person));
           console.log(Array.isArray(fruits)); //This one is object data type,that's why it returns 'false'
        
           console.log(person instanceof Array);
           console.log(fruits instanceof Array);

       }
   }







   

   //JavaScript Array Methods


   {
       //Converting Arrays to Strings

       //We have two methods for doing this
       //1)".toString()"method
       //2)".join()"method
       {
           //The"toString()"method converts an array to a string of (comma separated)array values
           const fruits =["Banana", "Mango", "Apple", "Orange"];
           console.log(fruits.toString());


           /* 
           The"join()"method also work like "toString()"method,but we can use different sign to separate them except comma(,),if we don't use anything then it'll 
           converts an array to a string of (comma separated)array values.
           */
          console.log(fruits.join("*")); //we can use any operator or sign to separate array values
          console.log(fruits.join("+"));
       }
   }



   {
       //Poping and Pushing 
       //Popping items out of an array, or pushing items into an array.
       {
           //".pop()"method,removes the last element from an array: 
           const fruits =["Banana", "Mango", "Apple", "Orange"];
           let onefruit = fruits.pop(); //The pop() method returns the value that was "popped out":
           console.log(fruits);
           console.log(onefruit); //The pop() method returns the value that was "popped out".


           //Shifting Elements
           //The shift() method removes the first array element and "shifts" all other elements to a lower index.
           let orginalFruits = fruits.shift();
           console.log(fruits);
           console.log(orginalFruits); //The shift() method returns the value that was "shifted out":it returns "Banana".






           //Pushing
           //".push()"method adds new element to an array(at the end):
           let fruitsofPush = fruits.push("Kiwi");
           console.log(fruits);
           console.log(fruitsofPush); //The push() method returns the new array length:that's why it returns 
           


           //The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
           let forWhile = fruits.unshift("Blackberry");
           console.log(fruits);
           console.log(forWhile); //The unshift() method returns the new array length.

       }


       //Changing Elements
       {
         //Array elements are accessed using their index number:  
         const fruits = ["Banana", "Orange", "Apple", "Mango"];
         let opps = (fruits[0] ="Kiwi");
         console.log(fruits);



         //Deleting Elements
         let deleteFruits = delete fruits[1];
         console.log(fruits);
         //Using delete may leave undefined holes in the array. Use pop() or shift() instead.
       }





       
       //Splicing an Array
       //The".splice()"method can be used to add new items to an array.

       //Using splice() to Remove Elements:
       //With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:
       {
           const fruits = ["Banana", "Orange", "Apple", "Mango"];
           let addFruits = fruits.splice(2,0,"Lemon","Kiwi");
           console.log(fruits);

           //let's remove Banana from this array using ".splice()"method
           let removeFruits =fruits.splice(0,1);
           console.log(fruits);
       }





       //Merging (Concatenating) Arrays:
       //The concat() method creates a new array by merging (concatenating) existing arrays:
       {
        const myGirls = ["Cecilie", "Lone"];
        const myBoys = ["Emil", "Tobias", "Linus"];
        const myChildren = myGirls.concat(myBoys);
        console.log(myChildren);


        let helloJs =["function", "object"];
        let helloJsMain = ["loop", "Array"];
        let totalJs = helloJs.concat(helloJsMain);
        console.log(totalJs);

       }








       //Slicing an Array
       //The 'slice()' method slices out a piece of an array into a new array.
       //The 'slice()' method creates a new array. It does not remove any elements from the source array.
       {
        const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
        //slice from Orange to Lemon
        const someFruits = fruits.slice(1,3);
        console.log(someFruits);
       }
   }





   //What we learned in JavaScript Array method chapter?

   //1)".toString()"method,this method convert an array to a string
   //2)".join()"method,this method also convert array to a string,but in this method we can use different operator or sign to separate them instead of using comma.
   //3)".pop()"method,this method remove the last element from array
   //4)".shift()"method,this method remove the first element from an array
   //5)".unshift()"method,this method adds an element to the array property at the first position
   //6)".push()"method,this method adds an element to the array property,and add the element in the end of the array
   //7)".splice()"method,this method adds element to the array and also removes element from the array,we can use it for both things to do
   //8)".concat()"method,this method works for joining two or more array together
   //9)".slice()"method,
   //10)"delete"operator.

}