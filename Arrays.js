

// JavaScript Arrays

// JavaScript arrays are used to store multiple values in a single variable.

{
    let topCars = ["BMW","AUDI","MARCEDES BENZ"];

    topCars.push("FERARY"); // If you want to add something after the Array list created you can use ".push()"method

    topCars[3] = "Lamborgini"; // If you want to change any list item from Array,you can use this "name[Array item index position]"method

    topCars.pop(); // "In JS Arrays,'.pop()'method remove the last item from Array list."

    topCars.shift(); // "In JS Arrays,'.shift()'method remove the first item from Array list "

    console.log(topCars);
    console.log(topCars.length); //The "length" property iS always one more than the highest array index,and we know array index start from 0(zero).
    console.log(topCars[topCars.length -1]);
}


{
    //We can also create an array,and then provide the elements.
    const cars = [];
    cars[0] = "Saab";
    cars[1] = "Volvo";
    cars[2] = "BMW";
    console.log(cars);

}


{
    //Accessing array elements.
    const cars = ["Toyota","Marcedes Benz","Audi"];
    console.log(cars[0]);
    //Array indexes start with 09(zero).
}

{
    //Changing an Array element
    const cars = ["Toyota","Marcedes Benz","Audi"];
    cars[0] = "Bmw"; //It's similar to creating an empty array then providing elements
    console.log(cars);
}

{
    //Accesssing the full array elements,we need to provide the array name to access the full array
    const cars = ["Toyota","Marcedes Benz","Audi"];
    console.log(cars);
}

{

    /*Array Elements Can Be Objects:

    // JavaScript variables can be objects. Arrays are special kinds of objects.

    Because of this, you can have variables of different types in the same Array.
    You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:*/


    //Example:
    {
        const cars =[ "firstName: Md Niamul Hakim", "lastName: Shawn", myFunction()];
        function myFunction() {
            let topRanking = "Data Scientist";
            //console.log(topRanking);
            return "most valuable job in 2021,Data Scientist";      
        }
        console.log(cars);
        console.log(typeof cars);
    }
    /*Arrays are Objects:

    //Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
    But, JavaScript arrays are best described as arrays.
    
    //Arrays use numbers to access its "elements". In this example, person[0] returns John:
    const person = ["John", "Doe", 46];

    //Objects use names to access its "members". In this example, person.firstName returns John:
    const person = {firstName:"John", lastName:"Doe", age:46};*/

}








{
    //Accessing the Last Array Element

    //Already we know how to access the 1st array element.

    //But if we want to access the last element dynamically we have to use "arrayName[arrayName.length -1]"
    //Why '-1'?
    /*As we know array indexes start from '0(zero)',and the length is one more than the array index,if we 
    substract(-){
        total (array index - array length),
        it will return (-1) for the last array element

    }*/

    const fruits = ["Banana","Orange", "Apple", "Mango"];
    console.log(fruits[0]);
    console.log(fruits[fruits.length -1]);

    const cars = ["BMW", "AUDI", "MARCEDES BENZ"];
    cars[3] ="Lamborgini";
    console.log(cars);
    console.log(cars[0]);
    console.log(cars[cars.length -1]);
    console.log(cars.length);
}








{
    //Looping Array Elements
    //The Safest way to loop through an array,is using a "for" loop:
    const Cars = ["BMW", "MARCEDES BENZ", "AUDI", "LAMBORGINI", "ASTEN MARTIN"];
    //let carsLength = Cars.length;
    
    //Creating "for"loop
    for (i = 0; i < Cars.length; i++){
        console.log(i);
        console.log(Cars[i]);
    }
}
{
    //Creating another "for"loop
    const fruits = ["Mango", "Banana", "Jack Fruit", "Orange", "Apple", "Strawberry"];
    for(f = 0; f < fruits.length; f++){
        console.log(fruits[f]);
    }
}

{
    //I can also use "arrayName.forEach()"function
    const students =["Shawn", "Shain", "Bappy"];

    students.forEach(id);
    
    function id(value) {
        console.log(value);
    }

}

//Again creating 'for' loop
{
    const helloJs = ["Hi guys, I'm Shawn", "I'm studying CSE", "At 'SouthWest Forestry University'", "I hope,I'll be a successful programmer soon"];
    let hLength = helloJs.length;
    for(h = 0; h < hLength; h++){
        console.log(h);
        console.log(helloJs[h]);

    } 
}

//Creating "forEach" function
{
    const hiJs =["And now,I'm learning JavaScript", "As soon as possible I'll learn it", "Then I'll start 20 big project to check my skills", "And after that,I'll learn NodeJs for backend development"];
    
    hiJs.forEach(myFunction);

    function myFunction(value) {
        console.log(value);    
    }
}

{
    //again creating "forEach" function
    const popUp = ["Hello JS", "Welcome to JS lesson"];
    
    popUp.forEach(popUP);
    
    function popUP(value) {
        console.log(value);
        
    }
}


//'for' loop 
{
    const helloJS = ["What's up guys", "I'm feeling excited to know what'll your next step"];
    let hLength = helloJS.length;
    for(h = 0; h < hLength; h++){
        console.log(helloJS[h]);
    }
}
//'forEach' function
{
    const hiJS = ["And what you want to do in future", "Exectly what's your goal?"];
    hiJS.forEach(hiJs);
    function hiJs(value) {
        console.log(value);
        
    }
}

//Accessing the last array Element
{
    const helloYou = ["Hello", "JavaScript", 1];
    helloYou.push("not a good way to access the last array element");
    console.log(helloYou[helloYou.length -1]); // This's the dynamic way to access the last array element
    //you can also access the last array element by using the highest array index
    console.log(helloYou[2]); //but later, if anyone change the array element you can't access by this way,below giving you a example
    console.log(helloYou);
    console.log(helloYou.length);
}

//New element can also be added to an array using the length property:
//we can add as the last element of the array by using this property
{
    const wow = ["Hi there", "I'm Shawn", "I'm 21 years old"];
    wow[wow.length] = "I'm studying CSE at Southwest Forestry University";
    console.log(wow);
     

    {
    // Creating more array for practicing this property
    let helloMe = ["Nice to meet you", "Hope see you soon"];
    helloMe[helloMe.length] = "Have a good day";
    console.log(helloMe);
    }

}





{
    /* //Associative Arrays

    Many programming languages support arrays with named indexes.
    
    Arrays with named indexes are called associative arrays (or hashes).
    
    JavaScript does not support arrays with named indexes.
    
    In JavaScript, arrays always use numbered indexes. */  
    
   /* Example
    
    const person = [];
          person[0] = "John";
          person[1] = "Doe";
          person[2] = 46;
          person.length;    // Will return 3
          person[0];        // Will return "John" 
          */
}



{
    // The Difference Between Arrays and Objects:

    // 1. In JavaScript, arrays use numbered indexes.  
    // 2. In JavaScript, objects use named indexes.

    // Note: Arrays are a special kind of objects, with numbered indexes.

}

{
    /*When to Use Arrays. When to use Objects.

    a). JavaScript does not support associative arrays.
    b). You should use objects when you want the element names to be strings (text).
    c). You should use arrays when you want the element names to be numbers. */


}

{

    // How to Recognize an Array?



    //Solution 1:

    /// To solve this problem ECMAScript 5 defines a new method Array.isArray():

    const fruits = ["Mango", "Banana", "Straberry"];
    console.log(Array.isArray(fruits));

    let person = ["Shawn", "Shain", "Revu"]; //This one is array

    let information = {  //This one is object
        person1Age: 21,
        person2Age: 24,
        person3Profession: function(){
            console.log("Hi there");
         }
    };
    console.log(Array.isArray(person));
    console.log(Array.isArray(information));
    information.person3Profession(); 

}



{
  // Solution 2:

  //The instanceof operator returns true if an object is created by a given constructor:
  const fruits = ["Apple", "Banana", "Mango", "Pinapple"];
  console.log(fruits instanceof Array);
}













// JavaScript Array Methods
{
    //converting 'Arrays' to Strings
    //The JavaScript method "toString()" converts an array to a string of (comma separated) array values.
    const fruits = ["Banana", "Apple", "Mango", "Orange"];
    console.log(fruits.toString());

    //We learned this "toString()" method before in number methods lesson
    let helloString = ["function", "Arrays", "Events", "Strings"];
    let convertString = helloString.toString();
    console.log(convertString);
} 
 
{
    // The "join()" method
    // The "join()" method also joins all array elements into a string
    // It behaves just like "toString()",but in addition you can specify the separator
    const joinMethod = ["Apple", "Banana", "Orange"];
    console.log(joinMethod.join());


    //Creating more variables for practicing 
    let moreArrayConverting =["I'm 21 years old", "Just focusing on my goal", "I have no time to think about marriage"];
    let convertingtoString = moreArrayConverting.join();
    console.log(convertingtoString);
    //creating "for" loop
    for(m = 0; m < moreArrayConverting.length; m++){
       console.log(moreArrayConverting[m]);
    }

    //creating "forEach" function
    moreArrayConverting.forEach(converting);
    function converting(value) {
        console.log(value);
        
    }

    let helloJs = ["Hello Js", "Hello Python", "Hello Java", "Hello C", "Hello C++", "Hello Php"];
    console.log(helloJs.join("*")); // We can also use any operator sign or anything to separete,if we don't want to use comma.

    //One more example 
    let nowGoForFun = ["I'm Shawn ", " I don't follow any roles"];
    console.log(nowGoForFun.join()); //if we don't use anything,then JS autometically provide comma to separate the String elements
    console.log(nowGoForFun.join("/")); // Now I used division sign that's why it provide division sign

}


{
    /*// Poping and Pushing

    When you work with arrays, it is easy to remove elements and add new elements.

   This is what popping and pushing is:

   /// 'Popping' items out of an array, or 'pushing' items into an array.*/
}

{
    //Popping
     
    //The "pop()" method removes the last element from an array:

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.pop()); // It'll return the last array element 'Mango'
    //If we want to check the full array now,there will be "Mango" missing,because we "popped out" that.
    console.log(fruits);

    let person = ["Shawn", "Shain", "Unknown"];
    let personPop = person.pop(); // It'll return "Unknown", Because The pop() method returns the value that was "popped out":
    console.log(person);
    console.log(personPop);
}

{
    // Pushing 
    // The "push()" method adds a new element to an array (at the end):
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.push("Kiwi");
    console.log(fruits);
    console.log(fruits.push()); //The push() method returns the new array length:

    let person = ["Shawn", "Shain", "Unknown"];
    person.push("Revu");
    console.log(person);
    console.log(person.push()); //The push() method returns the new array length:
}
{
    let x = ["Hello everyone", "what's up"];
    console.log(x.pop()); //"Pop()"method remove the last element from array.
    console.log(x.shift()); //"shift()" method remove tha first element from array.


    // one more array creating for practice 'shift()' method
    const hiJs = ["20 years", "Shawn" , 21, "years old Shain"];
     hiJs.shift();
    console.log(hiJs);
    console.log(hiJs.shift()); // The shift() method returns the value that was "shifted out"
}


{
   /* Changing Elements

Array elements are accessed using their index number:

Array indexes start with 0:

[0] is the first array element
[1] is the second
[2] is the third ...*/

const fruits = ["Banana", "Orange", "Apple", "Mango"]; // Changes the first element of fruits to "Kiwi"
fruits[0] ="Kiwi";
console.log(fruits);

let person = ["Shawn", "Shain", "Unknown"]; //Change the last element of person to "Zahin"
person[2] = "Zahin";
console.log(person);
}

{
    // Deleting Elements
    //Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete:
    // Using delete may leave undefined holes in the array. Use pop() or shift() instead.
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    delete fruits[0];
    console.log(fruits);
    console.log(fruits[0]); //So we should avoid "delete"operator,because it creates empty holes in array

}






{

    //Splicing an Array

    //The "splice()" method can be used  to add new items to an array
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(2, 0, "Strawberry","Kiwi");
    console.log(fruits);

    // The first parameter (2) defines the position 'where' new elements should be "added"(spliced in)
    // The second parameter (0) defines 'how many' elements should be removed
}

{
    // The "splice()" method returns an array with the deleted items
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    //fruits.splice(2, 2, "Pinapple", "Strawberry");
    //console.log(fruits);
    console.log(fruits.splice(2, 2, "Pinapple", "Strawberry"));
}

{
    //Using splice() to Remove Elements
    //With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array: 
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(0, 1);
    console.log(fruits);
}







// Merging (Concatenating) Arrays
{
   //The concat() method creates a new array by merging (concatenating) existing arrays:
   const myGirls = ["Cecilie", "Lone"];
   const myBoys = ["Emil", "Tobias", "Linus"];
   console.log(myGirls.concat(myBoys));
   //The "concat()"method work like addition operator in JS
   

   //we can also do this by using (+)operator
   //console.log(myGirls + " " + myBoys); 
   // But this will returns string, not an array, thats the problem




   const arr1 = ["Cecilie", "Lone"];
   const arr2 = ["Emil", "Tobias", "Linus"];
   const arr3 = ["Robin", "Morgan"];
   console.log(arr1.concat(arr2, arr3));

}


//"slice()"method
{
 //Slicing an Array
 // The slice() method slices out a piece of an array into a new array.
 //The slice() method creates a new array. It does not remove any elements from the source array.
 const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
 const sliceFruits = fruits.slice(1);
 const halfFruits = fruits.slice(1,4); //we can use two parameter to indicating start and ending point,but if we use one parameter it'll be okay,that's mean it will returns whole part after starting point
 console.log(sliceFruits);
 console.log(halfFruits);
}














//JavaScript Array Sort

{
    //JavaScript Sorting Arrays
    {
        //Sorting an Array
        //The ".sort()" method sorts an array alphabetically
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        console.log(fruits.sort()); //It'll returns(alphabetically) [ 'Apple', 'Banana', 'Mango', 'Orange' ]
        //Reversing an Array
        //The reverse() method reverses the elements in an array.
        //You can use it to sort an array in descending order:

        console.log(fruits.reverse());  //It'll returns descending order[ 'Orange', 'Mango', 'Banana', 'Apple' ]
    }



    //Numeric Sort

    //By default, the sort() function sorts values as strings.
    //However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
    //Because of this, the sort() method will produce incorrect result when sorting numbers.
    //We can fix this by providing a compare function:
    {
        const points = [40, 100, 20, 60,80];
        let x = points.sort(function(a,b) {
            return a - b;   
        });
        console.log(x); //This one will returns the ascending order

        //Now have a look the descending order
        let y = points.sort(function(c,d) {
            return d - c;
            
        });
        console.log(y);
    }




    //The Compare Function:
    {
        //The purpose of the compare function is to define an alternative sort order.

        //The compare function should return a negative, zero, or positive value, depending on the arguments:
        //function(a, b){return a - b}
        //When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

        /*
        If the result is negative a is sorted before b.
        If the result is positive b is sorted before a.
        If the result is 0 no changes are done with the sort order of the two values.
        */

       /*
        Example:
        The compare function compares all the values in the array, two values at a time (a, b).
        When comparing 40 and 100, the sort() method calls the compare function(40, 100).
        The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.
        */
    }









    //Sorting an Array in Random Order:
    {
        const points = [40, 100, 1, 5, 25, 10];
        let x = points.sort(function(a,b) {
            return 0.5 - Math.random();
            
        });
        console.log(x); //This order is not accurate,it will favor some numbers over the others
        //The most popular correct method, is called the Fisher Yates shuffle, and was introduced in data science as early as 1938!
        //We will learn it later,because it'll be so hard for us now.
    }
    //Again,sorting an Array in randoe order
    {
        let subjectMarks = [90, 70, 80, 75, 95];
        let x = subjectMarks.sort(function(a,b) {
            return 0.5 - Math.random();
            
        });
        console.log(x); //So after 2 example it's clear to all,this format is not correct,
    }





    //Find the Highest (or Lowest) Array Value:
    {
       //There are no built-in functions for finding the max or min value in an array.
       //However, after you have sorted an array, you can use the index to obtain the highest and lowest values.
       {
           //Sorting ascending:
           const points = [40, 100, 1, 5, 25, 10];
           let x = points.sort(function(a, b) {
               return a - b;   
           });
           console.log(x);
           console.log(x[0]); //It'll returns the lowest values
           //console.log(x[5]); //This one not a proper way to get the last element from an Array,we have to do it dynamically
           console.log(x[x.length -1]);//This one is the dynamic way to access the last element from an Array.
           //Because if anyone change the array list later,there will be no problem,always we'll get the last element by this way




           //Shorting descending order:
           let y = points.sort(function(a, b) {
               return b - a;               
           });
           console.log(y);
           console.log(y[0]); //Getting the Highest value in descending order
           console.log(y[y.length -1]); //Getting the lowest value in descending order.
       }






       //Sorting Object Arrays:
       //JavaScipt arrays often contain objects
       {
        const cars = [
            {type:"Volvo", year:2016},
            {type:"Saab", year:2001},
            {type:"BMW", year:2010}
          ]; 
          console.log(cars.sort(function(a, b) {
              return a.year - b.year;
              
          }));

       }
       //sorting object alphabitically
       {
        const cars = [
            {type:"Volvo", year:2016},
            {type:"Saab", year:2001},
            {type:"BMW", year:2010}
          ]; 
          console.log(cars.sort(function(a,b) {
              let x = a.type.toLowerCase();
              let y = b.type.toLowerCase();
              if (x < y){return -1};
              if (x>y){return 1};
              return 0;
              
          }));
       }

       {
        const cars = [
            {type:"Lamborgini", year:2016},
            {type:"Audi", year:2010},
            {type:"BMW", year:2001}
          ]; 
          console.log(cars.sort(function(a,b){
              return a.year - b.year;
          })); 
       }

       {
        const cars = [
            {type:"Lamborgini", year:2016},
            {type:"Audi", year:2010},
            {type:"BMW", year:2001}
          ];
          console.log(cars.sort(function(a,b){
              let x = a.type.toLowerCase();
              let y = b.type.toLowerCase();
              if (x < y){return -1};
              if (x > y){return 1};
              return 0;
          })); 


       }

       {
        const resultsOf = [
            {name:"Zahin got in this semester ", marks: 82, conslusinon:" numbers in Math."},
            {name:"Shawn got in this semester ", marks: 96, conslusinon:" numbers in Math."},
            {name:"Ashik got in this semester ", marks: 91, conslusinon:" numbers in Web Math."}
          ];
          console.log(resultsOf.sort(function(a,b){
              return a.marks - b.marks;
          }));
          console.log(resultsOf.sort(function(a,b){
              let x = a.name.toLowerCase();
              let y = b.name.toLowerCase();
              if (x < y){return -1};
              if (x > y){return 1};
              return 0;
          }));
       }
    }
    // {
        //forEach()method,just trying to remember not for any purpose

    //     const fruitsForEat = ["Unknown_1 body weight is 60kg", "Unkown_2 body weight is 65kg", "Unknown_3 body weight is 75kg"];
    //     fruitsForEat.forEach(amrMatha);
    //     function amrMatha(value){
    //         console.log(value);
    //     }
    // }

    


    {
        //Arrays sorting
        {
            //using "sort()"method
            const fruits = ["Banana", "Apple", "Orange", "Kiwi", "Strawberry"];
            let fruitSort = fruits.sort();
            console.log(fruits);
        }
        {
            //Reverse sorting
            const fruits = ["Banana", "Apple", "Orange", "Kiwi", "Strawberry"];
            let fruitSort = fruits.sort();
            let fruitSortReverse = fruits.reverse();
            console.log(fruits);
        }

        //'.sort()'method works for letters correctly,
        //but it doesn't work for numbers
        //so we have to provide compare function inside sort function
        {
            //sorting array numbers in Ascending order:
            const numbers = [100,10,80,50,30];
            let ascendingNumbers = numbers.sort(function(a,b){
                return a - b;
            });
            console.log(numbers);
        }
        {
            //sorting array numbers in descending order
            const numbers = [100,10,80,50,30];
            let descendingNumbers = numbers.sort(function(a,b){
                return b - a;
            });
            console.log(numbers);
        }

        //Sorting  an Array in Random Order:
        {
            const numbers = [100,10,80,50,30];
            let xRandomOrder =numbers.sort(function(a,b){
                return 0.5 - Math.random();
            });
            console.log(numbers); //This will produce incorrect order,that's why sorting in random order not popular in js,most of people ignore this formet


            //Again Random order sorting
            const number = [200,1000,8,500,30];
            let y = number.sort(function(a,b){
                return 0.5 -Math.random();
            });
            console.log(number);
        }

        {
            //Find the Highest (or Lowest) Array Value
            //There are no built-in functions for finding the max or min value in an array.
            //However, after you have sorted an array, you can use the index to obtain the highest and lowest values.
            const points = [140, 100, 10, 5, 25, 110];
            let x = points.sort(function(a,b){
                return a - b;
            });
            console.log(points); // sorting in ascending order
            console.log(points[0]); //getting the lowest value in this array
            console.log(points[points.length -1]); // getting the highest value in this array using array index access property
        }


        {
            //Sorting Object Arrays according to number
            const cars = [
                {type:"Volvo", year:2016},
                {type:"Saab", year:2001},
                {type:"BMW", year:2010}
              ];
             let carSorting = cars.sort(function(a,b){
                 return a.year - b.year;
             });
             console.log(cars);
             console.log(Array.isArray(cars)); //This will returns'true' because this is an array, but if we try to figure out this by using 'typeof'operator,it'll return object
             console.log(cars instanceof Array); //This also return 'true',same as above comment
             console.log(typeof cars); //This will return the result as 'object',but actually we know this one is an array and in JS every Array is special type of object
        }
        {
            //Sorting Object Arrays according to word
            const cars = [
                {type:"Volvo", year:2016},
                {type:"Saab", year:2001},
                {type:"BMW", year:2010}
              ];
              let xOfNumber = cars.sort(function(a,b){
                  let x = a.type.toLowerCase();
                  let y = b.type.toLowerCase();
                  if (x < y){return -1};
                  if (x > y){return 1};
              });
              console.log(cars);

        }

    }

}











//JavaScript Array Iteration
//Array iteration methods operate on every array item.


{
    //Array.forEach()
    //The "forEach()"method calls a function (a callback function)once for each array element
    const numbers = [45, 4, 9, 16, 25];
    numbers.forEach(myFan);
    function myFan(value,index,array){
        console.log(value);
        console.log(index);
        console.log(array);
    }
    
    const points = [100,10,40,70];
    points.forEach(pointPass);
    function pointPass(value,index,array){
        console.log(value);
        console.log(index);
        console.log(array);
    };
    



    //Array.map() method
    //The map() method creates a new array by performing a function on each array element.
    {
        //The map() method does not change the original array.
        const ageofStudents = [21, 23, 24];
        let doubleAge = ageofStudents.map(whatEver);
        function whatEver(value,index,array){
            return value * 2;
        }
        console.log(doubleAge);
    }

    {
        const halfAgeFromCurrentAge = [10.5, 11.5, 13];
       let currentAge = halfAgeFromCurrentAge.map(realAge);
        function realAge(value,index,array){
            return value * 2;
        };
        console.log(currentAge);
    }






    //Array.filter()
    {
        //The filter() method creates a new array with array elements that passes a test.
        {
            const numbers = [45, 4, 9, 16, 25];
            let newNumbers = numbers.filter(nanOfAll);
            function nanOfAll(value,index,array){
                return value > 18;
            };
            console.log(newNumbers);
        }
        {
            const points = [60,100,50,10,5];
            let filPoints = points.filter(fillingPo);
            function fillingPo(value,index,array){
                return value > 10;
            };
            console.log(filPoints);


        }
    }




    //Array.reduce() method
    {
        //The reduce() method runs a function on each array element to produce (reduce it to) a single value.
        //The reduce() method works from left-to-right in the array. See also reduceRight().

        //The 'reduce()' method does not reduce the original array.

        const numbers = [45, 4, 9, 16, 25];
        let nBrs = numbers.reduce(nTdots);
        function nTdots(total,value,index,array){
            return total + value;
        };
        console.log(numbers); ////The 'reduce()' method does not reduce the original array.
        console.log(nBrs);



        /*
        Note that the function takes 4 arguments:

       1.)The total (the initial value / previously returned value)
       2.)The item value
       3.)The item index
       4.)The array itself

       The example above does not use the index and array parameters. It can be rewritten to:
       */
       /*
       const numbers = [45, 4, 9, 16, 25];
       let sum = numbers.reduce(myFunction);
       
       function myFunction(total, value) {
         return total + value;
       }
       */ 
    }

    {
        const numbers = [200, 100 , 50, 25];
        let N_B = numbers.reduce(n_b);
        function n_b(total,value,index,array){
            return total + value;
        };
        console.log(numbers);
        console.log(N_B);
    }


    {
        //The ".reduce()"method can accept an initial value:
        const Ivalue = [20, 50, 80, 110, 130];
        let tValue = Ivalue.reduce(notRequired, 100);
        function notRequired(total,value){
            return total + value;
        };
        console.log(Ivalue);
        console.log(tValue);
    }


    {
        //Array.reduceRight() method
        ///for This method rules is the same as "Array.reduce()"method
        ////But only the difference is The 'reduceRight()' works from right-to-left in the array. See also 'reduce()'method works from left to right.
        ////This is the only difference between "reduceRight()"method and "reduce()" method
        const numbers = [400, 200, 100, 50, 25];
        let RtoLeft = numbers.reduceRight(r_t_l,225);
        function r_t_l(total,value){
            return total + value;
        }
        console.log(numbers);
        console.log(RtoLeft);

    }






    //Array.every() method
    ///The ".every()"method check if all array values pass a test
    {
        const eve = [45, 4, 9, 16, 25];
        let nEve = eve.every(fEvery);
        function fEvery(value,index,array){
            return value > 18; //This example check if all array values are larger than 18:
            // if all the values are not larger then it'll return 'false',
            //and if all values larger than this condition then it'll returns 'true' 
        };
        console.log(eve);
        console.log(nEve);
    }

    {
        const ever = [45, 4, 9, 16, 25];
        let e_v = ever.every(mFnN);
        function mFnN(value){
            return value > 18;
        };
        console.log(e_v);
    }






    //Array.some() method
    {
        //The some() method check if some array values pass a test.
        const numbers = [45, 4, 9, 16, 25];
        let s_n = numbers.some(sNumbersP);
        function sNumbersP(value,index,array){
            return value > 18; //This example check if some array values are larger than 18:
            //If some values are larger than the array values then it'll returns 'true'
            //If none of values are larger than the array values then it'll returns 'false'
        };
        console.log(numbers);
        console.log(s_n);
    }
    {
        const nB = [500,200,100,50, 25];
        let nS = nB.some(tS);
        function tS(value){
            return value > 200;
        };
        console.log(nB);
        console.log(nS);
    }






    //Array.indexOf() method
    {
       //The indexOf() method searches an array for an element value and returns its position.
       const fruits = ["Apple", "Orange", "Apple", "Mango"];
       let fru = fruits.indexOf("Apple"); //It'll return 0(zero),because JS rules is: The first item has position 0, the second item has position 1, and so on
       console.log(fru);
    }
    {
        const person = ["Shawn", "Shain", "Unknown_1", "Unknown_2"];
        let per = person.indexOf("Shain");//It'll returns 1
        let pers = person.indexOf("shawn"); //It'll returns -1,because this method is case sensitive,and that's why result is not found and returns -1
        console.log(per);
        console.log(pers);
    }





    //Array.lastIndexOf() method
    {
        const fruits = ["Apple", "Orange", "Apple", "Mango"];
        let lasFru = fruits.lastIndexOf("Apple");
        console.log(lasFru); //It'll returns 2,because ".lastIndexOf()"start searching from backward to forward,it returns the last "Apple" index
    }
    {
        const fruits = ["Apple", "Orange", "Apple", "Mango", "Orange"];
        let lsFru = fruits.lastIndexOf("Orange");
        console.log(lsFru);
    }
    {
        const leNumber = ["Shawn", "Zahin", "Ashik", "Shawn"];
        let firstBoy = leNumber.lastIndexOf("Shawn");
        console.log(firstBoy);
    }







    //Array.includes() method
    {
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        let fTorNot = fruits.includes("Orange"); //It'll returns 'true'
        let forNot = fruits.includes("Kiwi"); //It'll returns 'false'
        console.log(fTorNot);
        console.log(forNot);

    }
    {
        const topperOfClass = ["Shawn", "Ashik", "Zahin"];
        let ifTopperReturnTrue = topperOfClass.includes("Shawn");
        console.log(ifTopperReturnTrue);
    }









    //Array.find() method
    {
        //The find() method returns the value of the first array element that passes a test function.
        const numbers = [4, 9, 16, 25, 29];
        let finNumber = numbers.find(fiNbR);
        function fiNbR(value,index,array){
            return value > 18; //This example finds (returns the value of) the first element that is larger than 18:
            //that's means it will returns 25;
        };
        console.log(finNumber);

    }

    {
        const numberFind = [10, 20, 4, 9, 11, 25];
        let minOneNumber = numberFind.find(minN);
        function minN(value){
            return value > 9;
        };
        console.log(minOneNumber);
    }






    //Array.findIndex() method
    {
        //The findIndex() method returns the index of the first array element that passes a test function.
        const numbers = [4, 9, 16, 25, 29];
        let firstNu = numbers.findIndex(fIt);
        function fIt(value,index,array){
            return value > 18;
        };
        console.log(firstNu);
    }
    {
        const noBody = [20,5,50,100,200];
        let everyBody = noBody.findIndex(noBBEv);
        function noBBEv(value){
            return value > 100;
        };
        console.log(everyBody);
    }







    //Array.from() method
    {
        //The Array.from() method returns an Array object from any object with a length property or any iterable object.
        const allIndex = Array.from("Shawn");
        //let lowerIndex = allIndex.from()
        console.log(allIndex);
    }
    {
        const secondIndex = Array.from("Zahin");
        console.log(secondIndex);
    }



}
