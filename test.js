console.log("Bismilla");
let count = 0;
console.log(count);
let myAge = 21
console.log(myAge)
//1.it's my personal  things
let currentYear = 2021;
console.log(currentYear);
let myFatherAge = 52;
console.log(myFatherAge);
let count_false = 2+2;
console.log(count_false);

function sleep(name, time){
    console.log(name + " is sleeping from " + time);
}

sleep("Shawn","5.30AM.");
sleep("Husky","11PM.");

function opps(name, age){
    console.log(name + " is " + age + " years.");
}
opps("Shawn" ,"21");
opps("Zahin","21");
opps("Ashik", "24");

//start creating array
let cars = ["TOYOTA","BMW","AUDI","MARCEDES BENZ", "FORD"];
cars [0] ="Ferrari";   //changing element inside of array
cars.push("Lamborgini")
//IF I want to see the result I can do it here
console.log(cars);

//again creating function
function awake(name, time, reason){
   console.log(name + " always awake before " + time + " that's means " + reason);
}
 
awake("Shawn","1PM", "he always try to pray in time");
awake("Zahin", "3PM","he is unaware about prayer");
awake("Emon", "5.30PM in the afternoon","he is out of sense,and little bit mental")

function myFunction(a, b){
    return a * b;
}
let x = myFunction(4, 3);
//here, let x = 12; because it's the rules of function return 
//we can also stored function data by doing this
{
    const x = 10;
    console.log(typeof x); 
}

// Conversion Formula
// °Celsius =  	(5/9) 	 * (°Fahrenheit - 32)

function hello(){
    let beautifulCar = "Audi";
    console.log(beautifulCar);
}
hello();

function wonderful(name, place, time, age, height, weight, comment){

   console.log (name + " studying Computer Science & Technology " + place + 
    " He always awake at " + time + " He is " + age + " His height is " + height + " His weight is " + weight +
    " His BMI is " + comment);
}
wonderful("Shawn","at Southwest Forerstry University.","1 PM.","21 years old.","172cm,","60kg.","good");
wonderful("Zahin","at Southwest Forerstry University.","5.30 PM.","21 years old.","172.5cm,","60kg.","good");
wonderful("Babul","at Buet.","6 AM.","23 years old.","170cm,","65kg.","good");
wonderful("Shain","at Green University.","8 AM.","22 years old.","172cm,","67kg.","good");

//Here,I'm going to practice one example from w3schools.com,so let's start our journy,
function toCelsius(f){
    return (5/9) * (f-32);
}
toCelsius(77);

//let's create a js object variable
const car = {
    name: "Fiat",
    model: 500,
    weight: "2050kg",
    color:"white",
    start: function(){
        console.log("Car is going to start soon");
    },
    drive: function(){
        console.log("The owner of the car start driving the car at 10pm.")
    }

}
console.log(car.model);
car.start();
car.drive();
 car ['name'] ="BMW";
 console.log(car);
 console.log(car["color"]);
 console.log(typeof car);

 //creating another object variable

 const person = {
     firstName: "John",
     lastName: "Doe",
     fullName: "John Doe",
     age:50,
     eyeColor:"blue",
     UserId: function(){
         console.log("Id: Shawn58");
     },
     UserPassword: function() {
         console.log("Password: 221298");
         
     }
 };
 console.log(person.firstName);
 console.log(person.lastName);
 console.log(person.fullName);
 console.log(person.age);
 console.log(typeof person.age);
 person.UserId();
 person.UserPassword();
 console.log(typeof person);




/*console.log(beautifulCar); 

//it'll not print result ,because
inside of function block variable cannot access from outside,for getting result we can just 
call them by function name*/


let text ="abcdefgh";  //let's have a some practice about string
console.log(text.length);

//creating more string variables
let text1= "abc def gh";
console.log(text1.length);

{
    let answer1 = "It's alright";
    let answer2 = "He is called 'Johnny'";
    let answer3 = 'He is called "Johnny"';
    console.log(answer1);
    console.log(typeof answer1);
    console.log(answer1.length);
    console.log(answer2);
    console.log(typeof answer2);
    console.log(answer2.length);
    console.log(answer3);
    console.log(typeof answer3);
    console.log(answer3.length);
}

//Using escape character and and creating another variable
{
    //let textOf = " We are the so-called "Vikings" from the north";   
    //this will print error, because of double quotes inside of the text and also outside of the text.
    //There are two solution for this problem.1st one is,if you use double quotes outside then use single quotes inside.Another is using escape character.

    //Creating another similar variable like above,and using escape character to solve this problem
    let textOf = "We are the so-called \"Vikings\" from the north";
    console.log(textOf);
    console.log(typeof textOf);


    /*      All the Escape Character for solving this problem

    Code          Result            Description

    \'              '               for single quotes

    \"              "               for double quotes

    \\              \               Backslash         */


    let textOfText ='We are the so-called \'Vinkings\' from the north ';
    console.log(textOfText);
    console.log(textOfText.length);
}

{
    //Breaking a string
    let lineBreak =" Hello \
     Dolly";
     console.log(lineBreak);
    //Another thing, a safer way to break up a string,is to use string addition:
    let textOfText = "Hello " + 
    "Dolly"; // It'll be the best practice for every programmers to use string addition instead of using backslash
    console.log(textOfText);
    //Last practice for line break
    let line ="Hi there" +  //So we know that ,the best practice for line break is using string addition
    " I'm Shawn";
    console.log(line);

    /*We also know that if we use the "new" keyword in string
    it will be become a object type data */
    
    let x = "John"; //This one is string type variable
    let y = new String("John"); //This one is object type data,because here we can find the "new" keyword.
    console.log(typeof x);
    console.log(typeof y);
    console.log( x == y); //When using '==' operator, equal strings are equal(here only value equal).
    //Never create string as object. It slows down execution speed.
    //The "new" keyword complicates the code. 
    //This can produce some unexpected results
    console.log( x === y );//This will be "false",because one is string and another is object type data

    //Creating another two object type variable
    let X = new String("John");
    let Y = new String("John");
    console.log(typeof X); //Let's check what type of data it is!
    console.log(typeof Y); //Let's check what type of data it is!
    //See the output in terminal,both of this object type data.
    //Now see the comparison result

    console.log( X === Y );  //Expected result is "true",but it will print "false".
    //All the value is same,but this happened because "object can't be compared"

}

{  
    let x,y,z;
     x = "Hi there,";
     y = " I'm MD NIAMUL HAKIM SHAWN";
     z = x + y;
     console.log(z);
     console.log(typeof z);
     console.log(z.length);   
}

{
    //let text = "Welcome to my web page "hope" you will like my page"
    //For the above one it will print error,for solving this problem we need to use "escape character"

    let text = "Welcome to my web page \"hope\" you will like my page" //Now it will print expected result,because we used "Escape Character"
    console.log(text);
    console.log(text.length);
}

/*Extracting String Parts:

There are 3 methods for extracting a part of a String

1. slice(start, end)
2. substring(start, end)
3. substr(start, length)*/

{
    //slice() method practice
    //Already we know that slice() method can accept both positive and negative value
    let text ="Apple, Banana, Blackberry";
    //use positive value to declare Banana
    console.log(text.slice(7,13));
    //Now use negative value to declare Banana
    console.log(text.slice(-18,-12));


    //Create one more variable for practice slice() method
    let foods ="Beef, Chicken, Fish";
    console.log(foods); //check the full sting,then start working
    console.log(foods.slice(6,13)); //positive values for extract "chicken".
    console.log(foods.slice(-13,-6)); //Negative value for the same thing to cross check how it's work

    //now take extract "Fish" from this string using positive values
    console.log(foods.slice(15));// Here one value 15 is okay to extract fish.

    // It's like if you want to extract "Chicken and Fish" you can apply this method
    console.log(foods.slice(6)); 
    //Here you don't need to mention the 'ending' point just need to mention starting point.Because you want to take all after starting point.
     
    //You also can do this by using negative values
    console.log(foods.slice(-13)); // Same value like the above one,result also "Chicken, Fish"

}

{
    // NOw we're going to practice "substring()" method

    // Create one variable for practice this method

    // In substring() method we also need two value like slice() method,but we can use one value if we need to do that.

    //"substring()" is similar to 'slice()', but the only difference is that "substring()" can't accept negative indexes.
    let text ="Hello I'm Shawn, I'm studying CSE, at SWFU";
    console.log(text); // Checking the string
    console.log(text.substring(0,15)); // Taking the 1st part with positive index
    console.log(text.substring(17,33)); // Taking the 2nd part,using positive index.
    console.log(text.substring(35)); // Just one positive index because it's the last one, that's why it's similar to 'slice()'method,just can't use negative index.

    // Now extract 2nd and 3rd part
    console.log(text.substring(17));

    // Let's create another variable for more practice of "substring()" method.
    let foodValue= "Fish is good for health, Meat not good for body, Fish have no side affect but Meet have this.";
    console.log(foodValue); // Check the full string first.
    console.log(foodValue.substring(0,23)); // Taking the 1st part using positive index.
    console.log(foodValue.substring(25,47)); // Taking the 2nd part.
    console.log(foodValue.substring(49)); // Taking the 3rd part.
    console.log(foodValue.substring(25)); // Taking the 2nd and 3rd part by using one positive index.
}

{
    // Let's create another variable for practicing "substr()" method.
    // In "substr()" we need 2 value ,first value for start and second value for length.
    let foodCategory ="Fish for morning, Meat curry in the noon, both Fish and Meat in dinner";
    console.log(foodCategory.substr(0,16)); //Here first value is starting point,and 2nd value for length(how long I want it'll be).
    console.log(foodCategory.substr(18,22));// 1st value starting point,2nd value for length.
    console.log(foodCategory.substr(42,30)); // 1st value for starting point,2nd value for length.
    console.log(foodCategory.substr(18,52)); // Taking 1st value for starting from 2nd part,2nd value for the length of 2nd and 3rd part.

    /*Create another variable for "substr()" method 
    final practice*/

    let create = "string, array, object";
    console.log(create.substr(0,6)); // Here 1st value for the starting point, and 2nd value for the length for the extracting text.
    console.log(create.substr(8,5)); // Here also 1st value for the starting point and 2nd value for the length of the text.
    console.log(create.substr(15,6)); // Same as above,1st value for the starting point and 2nd value for the length of the text.

    //now extract the text from 2nd part to 3rd part
    console.log(create.substr(8,13));
}

{
    // Create some variable for practicing "replace()" method
    let text = "Zahin loves Sansan";
    let newText = text.replace("Sansan","Siri"); //1st parameter inside "replace()" indicating which one need to change, 2nd parameter is the replace value for that place. 
    let anotherText = newText.replace("Siri","Unknown");
    // 2nd variable also same, 1s parameter inside "replace()"method indicating that,this word need to change.And 2nd parameter is the value for replace that word.
    console.log(newText);
    console.log(anotherText);
   
   /* Note: "replace()" method does not change the string ,it is called on
    It returns a new String.*/
}

{
    //Creating another variable for practicing "replace()" method

    /*Note: "replace()"method does not change the original String,
    it's called on.
    It returns a new String.

    inside of "replace()"method,the 1st parameter indicate this word need to change,
    and the 2nd parameter is the value for replacing word.*/

    let configure = "Zahin is a good student";
    let figureOut = configure.replace("good student","bad boy");
    let conclusion = figureOut.replace("is a bad boy","have also some bad habit of drinking alchol and smoking weed.");
    console.log(figureOut);
    console.log(conclusion);
    console.log(configure == figureOut);
    console.log(typeof configure, typeof figureOut,typeof conclusion, figureOut == conclusion);

}
{ 
    //Creating variables for practicing "toUpperCase()"string method.
    let x ="Hi I'm Shawn";
    let y = x.toUpperCase();
    console.log(x);
    console.log(y);
}
{
    //Creating variable for practicing "toLowerCase()" string method.
    let x ="Shawn is my nickname";
    let y = x.toLowerCase();
    console.log(x);
    console.log(y);
}

//The concat() method
{
    //"concat()"method can be used instead of using plus(+) operator 
    let x = "What to say?";
    let y = " I don't know."
    let z = x.concat("",y); //let z = x +""+y; (we can use one of them to add two string together)
    console.log(z);
}
{
    //Creating more variable for practice "concat()"string method.
    let text1 = ": What to do now?";
    let text2 = "I don't know, if you have any plan, you can tell me.";
    let text3 = text1.concat("",text2); //We know that,we can do the same thing by using plus operator(+),there for, it'll be look like (let text3 = text1+""+text2;)like this.
    console.log(typeof text3, text3.length, text3); //We can check lots of thing in one 'console.log()' statement,we have to separete them by commas.
}

// Important Note:

/*Note: All string methods return a new string. They don't modify the original string.
 
Formally said: String are immutable: String cannot be changed,only replaced.*/

{
    //Last variable for practicing 'concat()'string method.
    let shawn = "Shawn have 10000rmb, ";
    let Zahin = "Zhain have 1000rmb,";
    let TotalRmb = "Both of them have "+ shawn.concat("",Zahin)+" so we can say 11000rmb total.";
    let both = shawn.concat("",Zahin);
    console.log(both);
    console.log(TotalRmb);
}

//"trim()"method in string
{
    //creating variable for practicing "string.trim()"method
    let x = "    I'm here   "
    //check this with console
    console.log(x);
    //JavaScript count white blank,so we need to solve this problem with .trim()method.
    //string.trim()method removes extra blank from string.
    console.log(x.trim());

    //Creating another variable for practicing "trim()"method
    let y ="        what's up guys?";
    //check the console result first
    console.log(y);
    //now solve the white blank space problem.
    console.log(y.trim());
}

//Again making another variable for practicing "trim()" method

{
   let how = "    Go to hell   ";
   console.log(how);
   console.log(how.trim()); 
}


//Extracting string characters

/*Note: There are 3 methods for extracting string characters,
1. charAt()
2.charCodeAt()
3.Property access []*/

{
    //creating variable for practicing "charAt()"string method 
    let x ="Hello World!"
    console.log(x.charAt(0));
    console.log(x.charAt(1));
    console.log(x.charAt(2));
    console.log(x.charAt(6));
}

{
    //creating another variable for practicing"charAt()"string method
    let y ="Hi,I'm Shawn";
    console.log(y.charAt(3));
    console.log(y.charAt(5));
    console.log(y.charAt(7));
    console.log(y.charAt(8));
    console.log(y.charAt(9));
    console.log(y.charAt(10));
    console.log(y.charAt(11));
}

{
    //Creating variable for practicing "charCodeAt()"string method
    let x = "Hello";
    console.log(x.charCodeAt(2));//I don't like to practice this too much because I don't like this,so I'm skiping this part
}

//Property Access
{
    //Creating variable for practicing "property access []"
    let s ="Shawn";
    console.log(s[0]);
    console.log(s[1]);
    let r ="Revu";
    console.log(r[0]);
    console.log(r[1]);
}






//JavaScript String Search

/*JavaScript methods for searching strings:

1.String.indexOf()
2.String.lastIndexOf()
3.String.startsWith()
4.String.endsWith()
*/


{

    //string.indexOf() method
    //The 'indexOf()' method returns the index of (the position of) the 'first' occurrence of a specified text in a string.

    let x = "Welcome to w3school JavaScript beatiful journy,I hope your JavaScript journy with us will be beautiful";
    console.log(x.indexOf("Welcome"));
    console.log(x.indexOf("w3school"));
    console.log(x.indexOf("I"));

    //string.lastIndexOf() method
    // The 'lastIndexOf()' method returns the index of the 'last' occurrence of a specified text in a string

    console.log(x.lastIndexOf("journy"));
    console.log(x.lastIndexOf("JavaScript"));
    console.log(x.lastIndexOf("beautiful"));


    //Now have a look if the, If the text is not found.
    console.log(x.indexOf("Python")); // I know, it will return -1,because the text is not found.
   
    console.log(x.lastIndexOf("Whatever"));

    // So the conclusion for both ".indexOf()" and ".lastIndexOf()" methods,if the text not found it will returns -1. 

}


//Both of (".indexOf(),and .lastIndexOf()")accept 2nd parameter for where to search

{
    //creating another string for practicing 
    let easy ="programmers practice:It's for only practice, you know nothing is important except practice regularly, because practice is the first priority for programmers";
 
    //check ".indexOf()" method for searching strings

    console.log(easy.indexOf("practice",8)); //Here 8 means,I order to ignore the 1st practice and start searching after this word
    //But if I give the 2nd parameter 0(zero),then it will show the result 0(zero),because 'practice' is the first word of this string and also I'm looking for 'practice',
    
    console.log(easy.indexOf("practice",0)); //string search methods are case sensitive,so becareful,if the string word exist in UpperCase and you search it in lower case it will show -1
    //'-1' means the text is not found.

    console.log(easy.lastIndexOf("programmers",12)); //By using 12, I order to ignore the last 'programmers'word...for the ".lastIndexOf()"method it start searching from end of the string to start point for the indicating text.

    console.log(easy.lastIndexOf("practice"));
    //I told you,".lastIndexOf()"method start searcing the text from the end of the string ,so it takes the last 'practice'

   
    //And I told you before,if the text is not found both method it show "-1"

}


//Practicing "string.search()" method

{
    let x = "Hello world,this world is beautiful,and simple to say as Hello";
    console.log(x.search("Hello"));
    console.log(x.search("beautiful"));
}


/*For the methods:

1. string.indexOf()
2. string.search()

Both of this methods looks like same but they're not same because:
 a. The search() method cannot take a second starting position argument.
 b. The indexOf()method cannot take powerful search values(regular expressions)
*/

{
    //string.match()method

    const text = "The rain in SPAIN stays mainly in the plain"; 
    console.log(text.match(/ain/g))

    /*If the regular expression does not include the g modifier (to perform a global search),
    the match() method will return only the first match in the string.*/
    console.log(text.match(/in/g));

    //Returns: 	An Array, containing the matches, one item for each match, or null if no match is found.

    //Now check,if the match not found it will return 'null'.
    console.log(text.match(/zy/g)); //no 'zy' here ,so it will return "null"

    //making one more string for practicing "string.match()"method

    let y ="Hello there,I know him ,he is a good boy,he studying cse in our university,he always say to me hello there";
    console.log(y.match(/he/g));
    console.log(y.match(/there/g));
}

//Creating another string for practicing "string.includes()" method

{
   // For "string.includes()" method, If the text found it will return value 'true' 
   // but if the text is not found then it will return value 'false'

   let hello ="Nice to meet you";
   console.log(hello.includes("nice"));
   //It returns "false" because '.includes()'method case sensitive;
   //so you need to write same case as it exist in string if you want 'true'
   console.log(hello.includes("Nice"));


   //creating more string for practice '.includes()' method
   let x ="Hello JavaScript";
   console.log(x.includes("JavaScript")); //case sensitive and it match to the exist text so it will return 'true'
   console.log(x.includes("javascript")); //case sensitive and its not match to exist text so it will return 'false'
}



//Creating string for practicing "string.startsWith()" method
//'.startsWith()'method returns "true" if a string begins with a specified value,otherwise it'll returns "false"

{
    //Creating a string for practicing "string.startsWith()"method
    let x ="Hello world";
    console.log(x.startsWith("Hello")); //It'll returns "true"
    console.log(x.startsWith("Hello",5)); // It'll returns "false"

    
    //Let's look at the back,check again previous string method chapter.
    let y =" Welcome to JavaScript course ";
    let z = x + y;
    console.log(z);
    console.log(z.replace("Hello world","JavaScript string method,"))//string.replace()method

    console.log(z.slice(0,12));
    console.log(z.slice(-18,-1));

    console.log(z.substring(12,19));//both of .slice() and .substring() method similar,only the difference is .substring()method cannot accept negative value.

    console.log(z.substr(20,2)); //for .substr() method the 1st parameter(20) for indicating the starting point,and 2nd parameter(2) for length of the text you want.
    console.log(z.substr(0,11)) //for .substr() method the 1st parameter(0) for indicating the starting point,and 2nd parameter(11) for length of the text you want.

    console.log(z.toUpperCase());
    console.log(z.toLowerCase());

    let a ="  Destination is yours.     "
    console.log(a); //without string.trim() method
    console.log(a.trim()); // string trim method will remove all the blank white space
    //console.log(y.startsWith("Welcome"));
    //console.log(y.startsWith("Welcome",7));
}






{
    //Creating a string for practicing string search method.
   /* {
      JavaScript methods for searching strings:
      1. String.indexOf()
      2. String.lastIndexOf()
      3. String.search()
      4. String.includes()
      5. String.startsWith()
      6. String.endsWith()  
    }*/

    let x ="Welcome to JavaScript w3school JavaScript lessons";
    let y ="I'm learning JS now,JS easy to learn,learning this,it'll help me to";

    // String.indexOf() method

    console.log(x.indexOf("Welcome"));
    //console.log(x.indexOf("w3school"));
    console.log(x.indexOf("JavaScript",21)); //In ".indexOf()" method we can use 2nd parameter for indicating starting point if we want to use that.

    //If the text is not exist then it will returns '-1'
    console.log(x.indexOf("hi"))// There is no "hi" text in 'x',so it'll return '-1'

    //".indexOf()" also case sensitive,the text in the string exist in 'UpperCase' but you write it in 'lowerCase',then it'll returns "-1" also
    console.log(x.indexOf("welcome")); 


    //string.lastIndexOf() method

    console.log(x.lastIndexOf("JavaScript",18));
    //.lastIndexOf()method,we can use 2nd parameter for indicating the start point of searching the text in the string
    //it's up to us,if we want then we can use 2nd parameter.If we don't use this ,there will no problem
    //.lastIndexOf()method start finding the text from the end of the string
    console.log(x.lastIndexOf("JavaScript"));
    //It'll returns the last 'JavaScript' text,because this method finding the text from the end of string.
    console.log(x.lastIndexOf("javascript"));
    //.lastIndexOf()method also same as 'indexOf()'method,if the text is not found it'll returns '-1',here the problem is case sensitive that's why the text is not found.

    
    //let x ="Welcome to JavaScript w3school JavaScript lessons";
    //let y ="I'm learning JS now,JS easy to learn,learning this,it'll help me to";

    //string.search() method
    console.log(x.search("w3school"));
    console.log(x.search("to"));



   // The two methods, indexOf() and search(), are equal?
   // The two methods are NOT equal. These are the differences:

   // The search() method cannot take a second start position argument.
   // The indexOf() method cannot take powerful search values (regular expressions).




   /*String.match()

   The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.
   */
  console.log(y.match(/learn/g)); // It'll return all the matches result
  console.log(y.match(/ea/gi));


  // .includes() method
  // The ".includes()"method returns true if a string contains a specified value

  console.log(x.includes("Welcome"));//It'll returns 'true' because the text exist in the string
  console.log(x.includes("welcome"));// It'll returns 'false' because the text exist in string upperCase but here I mentioned in lowerCase,".includes()"method is case sensitive
  //We also can declare the start position of the indicating text by using 2nd parameter.
  //".includes"method accept the 2nd parameter
  console.log(x.includes("JavaScript",21));




  //string.startsWith() method
  //The "startsWith()" method returns 'true' if a string begins with a specified value, otherwise'false'

  console.log(x.startsWith("Welcome")); // It'll returns 'true' because the string start with this text so the result will be true
  console.log(x.startsWith("hello")); // It'll returns "false" because there is no text like this in x string.
  console.log(typeof x,x.startsWith("welcome")); // It'll returns "false" also, because ".startWith()" method case sensitive
  //also we can use 2nd parameter if we want to indicate the start position.

  console.log(x.startsWith("to",8)); //It's returns 'true' because we mention the starting position,and the text'to'exist just after my indicating point,so returns "true"







  //string.endsWith() method
  //The "endsWith()" method returns "true" if a string ends with a specified value, otherwise "false"

  console.log(y.endsWith("learning",12));
  //Here I order by 2nd parameter,just find the specified  value in this length,and check in between this length the mention value is exist or not ,
  //Here it exist so it returns 'true'
  console.log(x.endsWith("lessons"));
  // If we don't want to use the length,it'll be also okay,because it's optional,it's up to you
  //If we don't use length, then it will take a look the whole string.And will check the string endsWith the specified value or not
 console.log(x.endsWith("Lesson"));
 //It'll returns 'false' because string.endsWith() method also case sensitive

}

{
    function noob() {
        let noob ="ki holo,baal flaow";
        console.log(noob);
        return "sov noob";  
    }
    noob();
}





//JS String Templates
{
    //Creating variable for practicing JS string templates
    //JS Template Literals

    /*Synonyms:
    1. Template Literals,
    2. Template String,
    3. String Templates,
    4. Back-Tics Syntax*/

    //Template Literals use back-ticks(``) rather than the quotes("") to difine a string.

    let firstName =`MD NIAMUL HAKIM`;
    let lastName =`SHAWN`;
    let FullName = `Full Name: ${firstName} ${lastName}`;
    console.log(FullName);
}




//JavaScript numbers
//JS number is our fresh and important lesson
{
    //JavaScript has only one type of number.Numbers can be written with of without decimals
    {
        let x =3.14;
        let y =3;
        let z =x+y;
        console.log(z);
    }

    //Extra large or extra small number can be written with scientific(exponent)notation:
    {
        let x = 10e5
        let y = 15e-5
        let z = x + y;
        console.log(x);
        console.log(y);
        console.log(z);
    }


    //JavaScript numbers are always stored as double precision floating point numbers,following international IEEE 754 standard.

    //Precision
    {
        //Integers (numbers without a period or exponent notation) are accurate up to 15 digits.

        let x = 999999999999999;  // x will be 999999999999999,because Integers number are accurate up to 15 digits
        let y = 9999999999999999;  // y will be 10000000000000000,because Integers number are accurate up to 15 digits,after that JS cannot read it properly. 
        console.log(x);
        console.log(y);
    }



    //The maximum number of decimals is 17,but floating point arithmetic is not alway 100% accurate:
    {
        let x = 0.2 + 0.1;
        console.log(x); // x will be 0.30000000000000004 
        //But we know the result.It is simple answer o.3


        //for solving this problem we can use multiply and divide
        let y = (0.2*10 + 0.1*10)/10;
        console.log(y);  // x will be 0.3 
    }

    {
        //Create one more variable to practice The maximum number of decimals is 17, but floating point arithmetic is not always 100% accurate:

        let x = (0.2*10 + 0.1*10)/10;
        let y = (0.2*10 + 0.1*10)/10;
        let z = x + y;
        console.log(z);
    }


    
    //Adding Numbers and Strings
    {
        //JavaScript uses th  + operator for both addition and concatenation.

        //Numbers are added and strings are concatenated.
           

        // If you add two numbers, the result will be a number
        {
            let x = 10;
            let y = 20;
            let z = x + y; // The result will be a number.
            console.log(z); //Result will be 30, because two numbers added
        }
        // If you add two Strings, the result will be a String concatenation:
        {
            let x ="10";
            let y ="20";
            let z =x + y; //The result will be a String. 
            console.log(z); // The result will be 1020,because two Strings Concatenation.
        }

        // If you add  a number and a String,the result will be a String concatenation
        {
            let x = 10;
            let y = "10";
            let z = x + y;
            console.log(z); // z will be 1010(a string)
            console.log(x == y);
            console.log(x === y);
        }


        // The JavaScript interpreter works from 'left to right'
        {
            let x = 10;
            let y = 20;
            let z = "30";
            let result = x + y + z; // The result will be 3030,because JS interpreter from left to right.
            // First it will add x and y,then the result of x,y will concatenate with z,because z is a string and we know the rules for string and(+)oparetor.
            console.log(result);

        }

        //For the same example we will change the position of z,then see what happened
        {
            let z = "30";
            let x = 10;
            let y = 20;
            let result = z+x+y; // Here the result will be 301020,
            //Because we know JS interpreter works from left to right.
            //Here z is a String and after that x and y are numbers,
            //But JS will give the priority to String we know that .
            console.log(result);

        }


        // Numeric Strings
        {
            // JavaScript strings can have numeric content

            let x = 100; //x is a String
            let y = "100"; // y is a String
            let z = x + y;
            console.log(z);
            console.log(x == y);
            console.log(x === y);
        }




        // If there are two number in two different String if we use JS operator except (+),it will try to convert strings to numbers in all numeric operations:
        //And we know if we use (+) operator,it will concatenate both.
        {
            //let's try one example from w3school
            let x = "100";
            let y ="10";
            let z = x/y;
            console.log(z); // The result will be 10

            // One more example
            let a = "100";
            let b = "10";
            let c = a*b;
            console.log(c); // The result will be 1000

            // Another example for practice
            let A = "100";
            let B ="10";
            let C = A-B;
            console.log(C);

            // Last example for (+) operator,it cannot convert JS string number,it will concatenate them
            let X = "100";
            let Y = "10";
            let Z = X+Y;
            console.log(Z); // The result will be 10010,because it concatenating both String,not converting

        }




        // NaN - Not a Number
        {
            // "Nan" is a JavaScript reseved word indicating that a is not a legal number.
            // Trying to  do arithmetic with a non-numeric string will result in "NaN"(Not a Number)
            {
                let x = 100 / "Apple";
                console.log(x); //result will be "NaN"(Not a Number)
                 
                let y = 100;
                let z = "Apple";
                let nan = y/z; //result will be "Nan"
                console.log(nan);

                let A = 10;
                let B = "Banana";
                let C = A*B; //The multiflication result of A and B will be "NaN"(Not a Number)
                // Because A is number and B is a string text,If B was a string number then it will show legal value.
                console.log(C);
            }
        }




        {
        // "isNaN()" JS function

        //You can use the global JavaScirpt function "isNaN()" to find out if a value is a not a number.
        {
            let x = 10;
            let y = "Apple";
            let z = x/y;
            console.log(z); //This will show "NaN"
            console.log(isNaN(x));
            console.log(isNaN(y));
            console.log(isNaN(z));
        }
        let a = 100;
        let b = "Apple";
        let c = a * b; //The result will be "NaN"
        console.log(c);
        console.log(isNaN(a));
        console.log(isNaN(b));
        console.log(isNaN(c));
        console.log(typeof c);
        }



        // Infinity (or "-infinity")is the value JavaScript will return if you calculate a number outside the largest possible number
        {
            // Division by 0(zero) also generates "Infinity"
            let x = 2 / 0;
            let y = -2 / 0;
            console.log(x,typeof x);
            console.log(y);
            let z = x+y;
            console.log(typeof z, z);
            console.log(typeof Infinity); // "typeof Infinity" returns "number"

            // "Infinity" is a number; "typeof infinity" returns "number".
        }
    }

    
    // JS Number Methods
    {
        //The "toString()"method returns a number as a string
        let x = 100;
        let y = x.toString();
        console.log(x);
        console.log(y);
        console.log(x,typeof x);
        console.log(y,typeof y);

        //more variable creating for practicing "toString()"method
        // "toString()"method returns number as string
        let a = 300;
        let b = a.toString();
        console.log(a, typeof a);//this will return 300,and type is "number".
        console.log(b,typeof b); // this will return "300",and type is string.
    }
    

    //The "toExponential()"method 
    //"toExponential()" returns a string, with a number rounded and written using exponential notation
    {
        let a = 3.1416
        let b = a.toExponential(2);
        console.log(b);
        console.log(a,typeof a); // this will return 3.1416,and type is number
        console.log(b,typeof b); // this will return 3.14e+0,and the type is "string"



        //"toExponential()"returns number as string ,and written with exponential notation
        let x = 1000;
        let y = x.toExponential();
        let z = x.toExponential(5);
        console.log(y);
        console.log(z,typeof z);
    }



    //"toFixed()"method
    //"toFixed()" returns a string, with the number written written with a specified number of decimals
    {
        let a = 3.1416;
        let b = a.toFixed(2);
        let c = a.toFixed(3);
        console.log(b,typeof b);
        console.log(c, typeof c);



        //"toFixed()"returns number as string, written the number as string with the specified number of decimals.
        let x = 9.656;
        let y = x.toFixed(0);
        let z = x.toFixed(2);
        let newString = x.toFixed(5);
        console.log(y,typeof y);
        console.log(z,typeof z);
        console.log(newString,typeof newString);

        //Note: "toFixed()" method is perfect for working with money.
    }




    //"toPrecision()"method
    //"toPrecision()"method returns a string, with a number written
    {
        let x = 3.1416;
        let y = x.toPrecision(2);
        let z = x.toPrecision(1);
        let d = x.toPrecision(5);
        console.log(y,typeof y);
        console.log(z,typeof z);
        console.log(d);



        //"toPrecision()"method 
        //"toPrecision()"method returns string,with a number written with a specified length
        let a = 9.939;
        let b = a.toPrecision(3);
        let c = a.toPrecision();
        console.log(b,typeof b);
        console.log(c,typeof c);
    }




    //"valueOf()"method
    //"value()"method returns a number as a number.
    {
        let a = 123;
        let b = a.valueOf();
        console.log(b);
        console.log(b.valueOf(123));
        console.log(b.valueOf(100+23));

       /* In JavaScript, a number can be a primitive value (typeof = number) or an object (typeof = object).

        The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.

        There is no reason to use it in your code.


        //Note: All JavaScript data types have a valueOf() and a toString() method.*/
    }







    //Global JavaScript Methods

    //There are 3 JavaScript methods that can be used to convert variables to numbers:

    // 1. The Number() method
    // 2. The parseInt() method
    // 3. The parseFloat() method

    //These methods are not number methods, but global JavaScript methods.
    {
        //"Number()"method
        //Returns a number,converted from its argument
        let x =Number(true);
        console.log(x);
        let y = Number(false);
        console.log(y);
        let X = Number("10");
        console.log(X);
        let Y = Number("20.44");
        console.log(Y);
        //If the number cannot be converted ,"NaN"(Not a Number)is returned.
        let a = Number("10 20");
        console.log(a);

    }

    //"toString()"method return number as string
    //"toExponential()"method return numbers as string with scientific(exponential)notation(A parameter defines the number of characters behind the decimal point)
    //"toFixed()"method return numbers as string.with the number written with a specified number of decimals
    //"toPrecision()"method return number as string,with a number written with a specified length
    //"valueOf()"method return a number as a number

   /* converting variables to Number */

   //There are 3 JS methods that can be used to convert variables to number
   // 1. Number() method
   // 2. ParseFloat() method
   // 3. ParseInt() method 

   {
       //again "Number()" method
       let X= Number(true);
       console.log(X);
       let x =Number(false);
       console.log(x);
       let Y = Number("20.33");
       console.log(Y);
       let y = Number("30");
       console.log(y);
       let Z = Number("10 20"); // It'll retuen "NaN",because the "Number()"method cannot access the 2nd number that's why it returns "NaN";
       console.log(Z);
       let c = Number(new Date("2021-09-19"));
       console.log(c);
   }



   //The "parseInt()" method

   //"parseInt()" parses a string and returns a whole number. Spaces are allowed. Only the first number is returned
   {
       let x = parseInt("10.33"); //It will return 10,because this method return only the 1st number
       console.log(x);
       let y = parseInt("20 40 10") //This will convert the string as number,and will be return 20, because "parseInt()" method return only the 1st number and others will be ignored
       console.log(y);
       let z =parseInt("10 years"); // It will return 10,same rules as above
       console.log(z);
       

       let a =parseInt("years 10"); // It'll return "NaN"(Not a Number),because "parseInt()"method only allowed the first string number but here the 1st value is not a number,that's why it can't be converted
       console.log(a);
        
   }


   //"parseFloat()"method

   //"parseFloat()"method,parse a string and returns a number.Spaces are allowed.Only the first number is returned
   {
       let a = parseFloat("10");
       console.log(a);
       let A = parseFloat("10.33");
       console.log(A); // It will returns 10.33 ,because decimals are allowed and the whole string belongs to same value
       let b = parseFloat("10 20 30");
       console.log(b); // It'll returns 10
       let B = parseFloat("10 years");
       console.log(B);
       let c = parseFloat("years 10");
       console.log(c);  // It'll returns "NaN"(Not a Number),same rule as above,"years"cannot be converted to number that's why it return "NaN"
   }



   /*Similarity and difference between "parseInt()"method and "parseFloat()"method

   1."parseInt()" returns Integer type number,spaces are allowed, only the first number is returned
   2."parseFloat()" returns Float(decimal)type of number,spaces are allowed,only the first number is returned */









   {

    //Number properties in JavaScript

    // 1. MAX_VALUE : Returns the largest number possible in JavaScript

    // 2. MIN_VALUE : Returns the smallest number possible in JavaScript

    // 3. POSITIVE_INFINITY : Represents infinity (returned on overflow)

    // 4. NEGATIVE_INFINITY : Represents negative infinity (returned on overflow)

    // 5. NaN : Represents a "Not-a-Number" value

   }


   //MAX_VALUE propertie
   {
       let a = Number.MAX_VALUE;
       console.log(a); //JavaScript can access this value after this value JS will not work properly

       let x = Number.MAX_VALUE;
       console.log(x);
   }


   // MIN_VALUE property
   {
       let b = Number.MIN_VALUE;
       console.log(b); // This is the minimum value of JavaScript,after this value JS cann't access the value properly

       let y = Number.MIN_VALUE;
       console.log(y);
   }



   // POSITIVE_INFINITY property
   {
       let z = Number.POSITIVE_INFINITY;
       console.log(z); // 'POSITIVE_INFINITY' is returned on overflow
       
       let d = Number.POSITIVE_INFINITY;
       console.log(d);
   }

   /*Note: Number properties cannot be used on Variables

   if you used 'Number'properties on 'Variables',
   it'll returns "undefined" */

   {
       const topCars = ["BMW","MARCEDES BENZ","LAMBORGINI"];
       topCars.push("ASTEN MARTIN");
       console.log(topCars);
       document.getElementById("arrays").innerHTML = "Here is the list of top cars in 2021: " + topCars +'<br>'+  "but all this are too expensive.If you want to buy one of that car you have to pay more than 150K usd.";
   }





   //Creating 'for'loop
   {
       const fruitsForEat = ["Shawn don't like to eat fruits regularly", "Fahad like to eat fruits everyday", "Unknown never eat fruits"];
       let fLengthOf = fruitsForEat.length;
       let text = "<ul>";
       for(f = 0; f < fLengthOf; f++){
           text += "<li>" + fruitsForEat[f] + "</li>";
           console.log(fruitsForEat[f]);
       };
       text += "</ul>";
       document.getElementById("fruitsForNothing").innerHTML = text;  
           
   }
   //forEach()
   {
    const fruitsForEat = ["Unknown_1 body weight is 60kg", "Unkown_2 body weight is 65kg", "Unknown_3 body weight is 75kg"];
    let x = "<ul>";
    fruitsForEat.forEach(amrMatha);
    x += "</ul>";
    function amrMatha(value){
        x += "<li>" +value+ "</li>";
    };
    document.getElementById("bodyWeight").innerHTML = x;
   }


}


{
    {
        const pointers = [95,90,88,85,91];
        let txt = "";
        pointers.forEach(pointersPass);
        //txt += "</ul>";
        function pointersPass(value){
            txt +=  value + "<br>";
        }
        document.getElementById("notDepend").innerHTML = txt;
    };
    {
        const namesOftop = ["Shawn", "Shain", "Yeasin", "Mohit"];
        let person = "";
        namesOftop.forEach(TopToBottom);
        function TopToBottom(value){
            person += value + "<br>";
        };
        document.getElementById("awesomeGuys").innerHTML = person;
    }

}




