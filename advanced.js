//Problem 1:
{
//In the below sentence, How many time we used this "sumit" word? and which position we found this word first?
const sentence = `Learn with Sumit is all about teaching web development skills and techniques in an efficient and practical manner.
If you are just getting started in web development, Learn with Sumit has all the tools you need to learn the newest most  popular 
technologies to convert you from a no stack to full stack developer. Learn with Sumit also deep dives into advanced topics using the latest best 
practices for you seasoned web developers.`;

//Firstly, we can create a new variable to find the all matches
//And need to find out how many times it has been used.
//and we can use "match()" method and "regular expression" to do it.
//Then, for how many times we used this word? we can simply call the "length" property to do it
//but for more efficient way use a ternary operator
const matches = sentence.match(/sumit/ig);
const occurances = matches ? matches.length : "fuck! no matches found :)";
console.log(occurances);
//Now we need to find the first occurance position of this word
//So we can use "indexOf() or search()" method to find the first occurance position
let firstOposition = sentence.search(/sumit/i);
firstOposition = firstOposition >= 0 ? firstOposition : "not found!";
console.log(firstOposition);
}


//Problem 2:
{
    //input: linearSearch(['a', 'b', 'c', 'd', 'c'], 'c')
    //output: 2 or 'not found!'
    //Problem: Apply the linearSearch function according to result
    let linearSearch = function(arr, val) {
        const $length = arr.length;
        for(let i = 0; i < $length; i++) {
            if(arr[i] === val) {
                return i;
            }
        }
        return 'not found!';
    }
    console.log(linearSearch(['a', 'b', 'c', 'd', 'c'], 'c'))
}




//Problem 3:
{
    //Find the "longest string" and the index number in an array
    let findLongest = function(array) {
        let longWord = "";
        for(long of array) {
            if(long.length > longWord.length) {
                longWord = long;
            }
        }
        return [longWord, array.indexOf(longWord)];
    }
    console.log(findLongest(["Shawn", "MD Niamul Hakim Shawn", "Shain", "Jony"]))
}

//Problem 4:
//১-১০০ পর্যন্ত কোন সংখ্যা গুলো ৩, ৫, এবং ৩ ও ৫ উভয় সংখ্যা দ্বারা বিভাজ্য তা বের করুন 
{
    let fizzBuzz = function(number) {
        for(let i = 0; i <= number; i++) {
            if(i % 15 === 0) {
                console.log(`${i} is fizzBuzz.`);
            }
            else if(i % 3 === 0) {
                console.log(`${i} is fizz.`);
            }
            else if(i % 5 === 0) {
                console.log(`${i} is Buzz`);
            }
            else {
                console.log(i);
            }
        }
    }
    fizzBuzz(50);
}




//Problem 5:
//Remove all the "falsy value" from the given array
{
    //More complex way to do it:
    let remFalsy = function(array) {
        let arr = array;
        let removeFalsy = arr.filter(function(element) {
            if(element) {
                return true;
            }
            else {
                return false;
            }
        })
        return removeFalsy;
    }
    console.log(remFalsy(["lws", undefined, "Shawn", false, "", "apple", 40, "k", "Thanks all"]));


    
    //Easier then first one:
    let RemFalsy = function(array) {
        let arr = array;
        let bolArr = arr.filter(Boolean);
        return bolArr;
    
    }
    console.log(RemFalsy(["lws", undefined, "Shawn", false, "", "apple", 40, "k"]));
}



//Problem 6:
//Remove "falsy value" from the given object
{
    const obj = {
        a: "lws",
        b: undefined,
        c: "Shawn",
        d: false,
        e: ""
    }

    const trueObject = function(obj) {
        for(let i in obj) {
            if(!obj[i]){
                delete obj[i];
            }
        }
        return obj;
    }
    console.log(trueObject(obj));
}







//Practice again
//creating object
const shawn = {
    fullName: "MD Niamul Hakim Shawn",
    age: 22,
    fuckedUp: function() {
        return `Don't like selfish people.`
    }
}
shawn.address = "Ali Akbur Dail, Chokoria, Cox's Bazar,Chittagong.";
console.log(shawn);
console.log(shawn.fuckedUp());
console.log(shawn["fullName"]);

//We know that, if we want to loop through an object we can do it using "for in" loop
for(let x in shawn) {
    console.log(shawn[x]);
}


//JavaScript Object Accessors !Important
{

    // JavaScript Getter (The get Keyword)
    // This example uses a lang property to get the value of the language property.
    const person = {
        firstName: "John",
        lastName: "Doe",
        language: "en",
        get lang() {
            return this.language;
        }
      };
      console.log(person.lang);
}

{
    // JavaScript Setter (The set Keyword)
    // This example uses a lang property to set the value of the language property.
    const person = {
        firstName: "John",
        lastName: "Doe",
        language: "",
        set lang(lang) {
           this.language = lang;
        }
      };
      person.lang = "bnm";
      console.log(person);
}




{
    //This one is most important
    //We don't need to write JavaScript object to many times for different people
    //We can create a "constructor" to make our work easy
    let Person = function(first, last, age) {
        this.firstName = first;
        this.lastName = last;
        this.age = age; 
        this.fullName = function() {
            return this.firstName + " " + this.lastName;
        } 
    }

    //Creating 3 different person object
    const shawn = new Person("MD Niamul Hakim", "Shawn", 22);
    console.log(shawn);
    console.log(shawn.fullName());
    const unknown = new Person("MD", "Risk", 25);
    console.log(unknown);
}




{
    //JavaScript Object Prototypes
    //All JavaScript objects inherit properties and methods from a prototype.
    //We also learned that you can not add a new property to an existing object constructor:
    //To add a new property to a constructor, you must add it to the constructor function:

    //Using the prototype Property:
    //The JavaScript prototype property allows you to add new properties to object constructors:
    let Person = function(first, last, age) {
        this.firstName = first;
        this.lastName = last;
        this.age = age; 
        this.fullName = function() {
            return this.firstName + " " + this.lastName;
        } 
    }
    Person.prototype.Nationality = "Bangladeshi";
    console.dir(Person);

}


{
    //JavaScript Closures
    //A closure is a function having access to the parent scope, even after the parent function has closed.
    let ClosuresFunction = function() {
        let counter = 0;
        return function () {
            counter += 1;
            return counter;
        }
    }
    let add = ClosuresFunction();
    add();
    add();
    // console.dir(add());
}





{
    //JavaScript Class Inheritance
    //To create a class inheritance, use the "extends" keyword.
    class car {
        constructor(brandName) {
            this.name = brandName;
        }
        runningCar() {
            return "I have a " + this.name;
        }
    }
    class myCar extends car {
        constructor(brandName, model) {
            super(brandName);
            this.model = model;
        }
        itsModel() {
            return this.runningCar() + ","+ this.model + " is the model name of my car.";
        }
    }
    const myDetailsCar = new myCar("Lamborgini", "Vencover");
    console.log(myDetailsCar.itsModel());
}

{
    //JavaScript "class" Static Methods
    class myCar {
        constructor(name) {
            this.name = name;
        }
        static some() {
            console.log("Hello");
            // return x.name + " is one of the most expensive car in this world.";
        }
    }
    const topCar = new myCar("Audi");
    myCar.some();
    {
        //If you want to use the myCar object inside the static method, you can send it as a parameter:
        class myCar {
            constructor(name) {
                this.name = name;
            }
            static some(x) {
                // console.log("Hello");
                return x.name + " is one of the most expensive car in this world.";
            }
        }
        const topCar = new myCar("Audi");
        console.log(myCar.some(topCar))
    }

}
