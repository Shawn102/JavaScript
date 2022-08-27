{
  //Stack Data Structure

  class firstStack {
    constructor() {
      this.storage = [];
      this.count = 0;
    }
    //this method will adds element to the end of the stack
    push(element) {
      this.storage[this.count] = element;
      this.count++;
    }
    //this method will check the stack is empty or not!
    isEmpty() {
      return this.count === 0;
    }
    //this method will removes element from the top of the stack
    pop() {
      if (this.isEmpty() === false) {
        this.count = this.count - 1;
        return this.storage.pop();
      }
    }
    //this method will peek an element from the top of the stack
    peek() {
      return this.storage[this.count - 1];
    }
    //this method will returns the size of the stack
    size() {
      return this.count;
    }
  }

  const firststack = new firstStack();
  const secondstack = new firstStack();

  firststack.push("Shawn");
  firststack.push("Revu");
  secondstack.push("Gias Uddin");
  secondstack.push("Johora Akter");
  console.log(firststack);
  console.log(firststack.size());
  console.log(firststack.pop());
  console.log(firststack);
  firststack.push("Torikul Islam");
  firststack.push("Niamul Hakim");
  console.log(firststack);
  console.log(secondstack);
  console.log(secondstack.size());
  console.log(secondstack.pop());
  console.log(secondstack.peek());
  console.log(secondstack);
}

//creating one more stack data structure with function
{
  //in a stack we need 4 things to make it such as "push, pop, peek, length"
  let myStack = function () {
    this.count = 0;
    this.storage = {};
    //Adds a value onto the end of the stack
    this.push = function (value) {
      this.storage[this.count] = value;
      this.count++;
    };
    //Removes an element from the top of the stack
    this.pop = function () {
      if (this.count === 0) {
        return undefined;
      } else {
        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
      }
    };
    //Peek an element from the top of the stack
    this.peek = function () {
      return this.storage[this.count - 1];
    };
    //Returns the size of the stack
    this.size = function () {
      return this.count;
    };
  };
  const myS = new myStack();
  myS.push("Apple");
  myS.push("Orange");
  myS.push("Banana");
  //console.log(myS);
  console.log(myS.pop());
  //console.log(myS);
  console.log(myS.peek());
  console.log(myS.size());
}

{
  //creating palindrome cheaker
  const palindrome = function () {
    let stack = [];
    let word = "Bob";
    let emptyWord = "";
    let lengthOfWord = word.length;
    for (let i = 0; i < lengthOfWord; i++) {
      stack.push(word[i]);
    }
    for (let j = 0; j < lengthOfWord; j++) {
      emptyWord += stack.pop();
    }
    if (word.toLowerCase() === emptyWord.toLowerCase()) {
      console.log(word + " is a palindrome.");
    } else {
      console.log(`${word} is not a palindrome.`);
    }
  };
  palindrome();
}

{
  //Creating one more palindrome crecker
  let palindrome = function (word) {
    let stack = [];
    let wordOfStack = word;
    let emptyWord = "";
    let lOfWord = wordOfStack.length;
    for (let i = 0; i < lOfWord; i++) {
      stack.push(wordOfStack[i]);
    }
    for (let j = 0; j < lOfWord; j++) {
      emptyWord += stack.pop();
    }
    //Checking the condition for palindrome
    if (wordOfStack === emptyWord) {
      console.log(`${wordOfStack} is a palindrome.`);
    } else {
      console.log(`${wordOfStack} is not a palindrome`);
    }
  };
  //Calling the 'palindrome' function and passing a value for checking is it palindrome or not!
  palindrome("Racecar");
}

{
  //Creating one more palindrome checker
  let palindromeChecker = (val) => {
    let empStack = [];
    let word = val;
    let empWord = "";
    let lenWord = word.length;
    for (let a = 0; a < lenWord; a++) {
      empStack.push(word[a]);
    }
    for (let b = 0; b < lenWord; b++) {
      empWord += empStack.pop();
    }
    if (word !== empWord) {
      console.log(`${word} is not a palindrome.`);
    } else {
      console.log(`${word} is a palindrome`);
    }
  };
  palindromeChecker("racecar");
}

//Creating the last palindrome checker
{
  let myPalindrome = function (value) {
    let emptyArray = [];
    let word = value;
    let emptyWord = "";
    let lengthOfWord = word.length;
    for (let i = 0; i < lengthOfWord; i++) {
      emptyArray.push(word[i]);
    }
    for (let j = 0; j < lengthOfWord; j++) {
      emptyWord += emptyArray.pop();
    }
    if (word === emptyWord) {
      console.log(`${word} is a palindrome.`);
    } else {
      console.log(`${word} is not a palindrome.`);
    }
  };
  myPalindrome("racecar");
}

//Creating stack data structure
{
  //using function to create my first stack
  let creatingStack = function () {
    this.store = {};
    this.count = 0;
    //Adds a value at the end of the stack
    this.push = function (element) {
      this.store[this.count] = element;
      this.count++;
    };
    //Removing an element from the top of the stack
    this.pop = function () {
      if (this.count === 0) {
        return undefined;
      } else {
        this.count--;
        let result = this.store[this.count];
        delete this.store[this.count];
        return result;
      }
    };
    //Peeking an element from the top of the stack
    this.peek = function () {
      return this.store[this.count - 1];
    };
    //Checking the length of the stack
    this.size = function () {
      return this.count;
    };
  };

  const mySTAck = new creatingStack();
  mySTAck.push("Apple");
  mySTAck.push("Banana");
  mySTAck.push("Jack Fruits");
  console.log(mySTAck);
  console.log(mySTAck.size());
  console.log(mySTAck.pop());
  console.log(mySTAck.peek());
  console.log(mySTAck);
}

//Creating one more stack using class
{
  class mySt {
    constructor() {
      this.storage = [];
      this.count = 0;
    }
    //adding an element of the end of the stack
    push(value) {
      this.storage[this.count] = value;
      this.count++;
    }
    //checking the stack is empty or not!
    isEmpty() {
      return this.count === 0;
    }
    //Removing an element from the top of the stack
    pop() {
      if (this.isEmpty() === false) {
        this.count = this.count - 1;
        return this.storage.pop();
      }
    }
    //Peeking an element from the top of the stack
    peek() {
      return this.storage[this.count - 1];
    }
    //Checking the length of the of the stack
    size() {
      return this.count;
    }
  }

  //creating two variables
  let mSTa = new mySt();
  let MstA = new mySt();

  //adding value to the first variable
  mSTa.push("Shawn");
  mSTa.push("Revu");
  mSTa.push("Ziko");
  console.log(mSTa);
  console.log(mSTa.peek());
  console.log(mSTa.size());
  //adding value to the second stack
  MstA.push("MD Niamul Hakim");
  MstA.push("MD Tarikul Islam");
  MstA.push("MD Zahidul Hassan");
  console.log(MstA);
  console.log(MstA.peek());
  console.log(MstA.size());
}

//Creating one more 'stack data structure' using 'class data type'
{
  class Mstack {
    constructor() {
      this.store = [];
      this.count = 0;
    }
    //Adding an element at the end of the stack
    push(element) {
      this.store[this.count] = element;
      this.count++;
    }
    //Checking the stack is empty or not!
    isEmpt() {
      return this.count === 0;
    }
    //Removing the top element from the stack
    pop() {
      if (this.isEmpt() === false) {
        this.count = this.count - 1;
        return this.store.pop();
      }
    }
    //Peeking the top element from the stack
    peek() {
      return this.store[this.count - 1];
    }
    //Checking the size of the stack
    size() {
      return this.count;
    }
  }
  //Creating one variable for checking the stack
  let firstStack = new Mstack();
  //Adding some values
  firstStack.push("Marcedes Benz");
  firstStack.push("Audi");
  firstStack.push("Lamborgini");
  console.log(firstStack);
  console.log(firstStack.peek());
  console.log(firstStack.size());
  console.log(firstStack.pop());
  console.log(firstStack);
}

{
  //Creating palindrome checker
  let palindrome = function (value) {
    let emptyStack = [];
    let word = value;
    let empWord = "";
    let len = word.length;
    for (let i = 0; i < len; i++) {
      emptyStack.push(word[i]);
    }
    for (let j = 0; j < len; j++) {
      empWord += emptyStack.pop();
    }
    if (word === empWord) {
      console.log(`${word} is a palindrome.`);
    } else {
      console.log(`${word} is not a palindrome.`);
    }
  };
  palindrome("lol");

  //Creating a stack data structure using "class data type"
  //we know that we need "push, pop, peek, size" method for creating a stack
  class st {
    constructor() {
      this.storage = [];
      this.count = 0;
    }
    //this method will adds an element at the end of the stack
    push(element) {
      this.storage[this.count] = element;
      this.count++;
    }
    //this method will check for the stack is empty or not!
    isEmpty() {
      return this.count === 0;
    }
    //this method will removes an element from the top of the stack
    pop() {
      if (this.isEmpty() === false) {
        this.count = this.count - 1;
        return this.storage.pop();
      }
    }
    //this method will peek an element from the top of the stack
    peek() {
      return this.storage[this.count - 1];
    }
    //this method will returns the size of the stack
    size() {
      return this.count;
    }
  }
  let firstSt = new st();
  //pushing element to the stack
  firstSt.push("shawn");
  firstSt.push("unknown");
  //poping the top element
  console.log(firstSt.pop());
  //peeking the top element from the stack
  console.log(firstSt.peek());
  //checking the length
  console.log(firstSt.size());
  console.log(firstSt);

  //creating stack data structure using "function data type"
  let ST = function () {
    this.store = {};
    this.count = 0;
    //Adding an element to the end of the stack
    this.push = function (element) {
      this.store[this.count] = element;
      this.count++;
    };
    //Removing an element from the top of the stack
    this.pop = function () {
      if (this.count === 0) {
        return undefined;
      } else {
        this.count--;
        let result = this.store[this.count];
        delete this.store[this.count];
        return result;
      }
    };
    //peeking the top element from the stack
    this.peek = function () {
      return this.store[this.count - 1];
    };
    //this method will returns the length of the stack
    this.size = function () {
      return this.count;
    };
  };
  //creating variables for stack
  let secondStack = new ST();
  //adding elements to the stack
  secondStack.push("MD");
  secondStack.push("Niamul");
  secondStack.push("Hakim");
  //poping the top element from the stack
  console.log(secondStack.pop());
  //peeking the top element from the stack
  console.log(secondStack.peek());
  //checking the size of the stack
  console.log(secondStack.size());
  //checking the full stack
  console.log(secondStack);

  //Creating "set" data structure
  let mYSET = function () {
    //the "let collection" will hold the set
    let collection = [];
    //this method will check for the presence of an element and returns 'true' or 'false'
    this.has = function (element) {
      return collection.indexOf(element) !== -1;
    };
    //this method will returns all the values of the set
    this.values = function () {
      return collection;
    };
    //this method will add element to the set
    this.add = function (element) {
      if (!this.has(element)) {
        collection.push(element);
        return true;
      } else {
        return false;
      }
    };
    //this method will remove element from the set
    this.remove = function (element) {
      if (this.has(element)) {
        let index = collection.indexOf(element);
        collection.splice(index, 1);
        return true;
      } else {
        return false;
      }
    };
    //this method will returns the size of the set
    this.size = function () {
      return collection.length;
    };
    //this method will returns the uninon of two set as a new set
    this.union = function (otherSet) {
      let unionSet = new mYSET();
      let firstSet = this.values();
      let secondSet = otherSet.values();
      firstSet.forEach(function (e) {
        unionSet.add(e);
      });
      secondSet.forEach(function (e) {
        unionSet.add(e);
      });
      return unionSet;
    };
    //this method will returns the intersection of two set as a new set
    this.intersection = function (otherSet) {
      let intersectionSet = new mYSET();
      let firstSet = this.values();
      firstSet.forEach(function (e) {
        if (otherSet.has(e)) {
          intersectionSet.add(e);
        }
      });
      return intersectionSet;
    };
    //this method will return the difference of two set as a new set
    this.difference = function (otherSet) {
      let differenceSet = new mYSET();
      let firstSet = this.values();
      firstSet.forEach(function (e) {
        if (!otherSet.has(e)) {
          differenceSet.add(e);
        }
      });
      return differenceSet;
    };
    //this method will test if a set is subset of otherset then it will return 'true' or 'false'
    this.subset = function (otherSet) {
      let firstSet = this.values();
      return firstSet.every(function (value) {
        return otherSet.has(value);
      });
    };
  };
  //Creating two set
  let setA = new mYSET();
  let setB = new mYSET();
  //adding element to setA
  setA.add("a");
  setA.add("b");
  setA.add("c");
  setA.add("d");
  console.log(setA.values());
  //adding element to setB
  setB.add("a");
  console.log(setB.values());
  console.log(setB.has("b"));
  console.log(setB.has("a"));
  //deleting a element from setA
  console.log(setA.remove("d"));
  console.log(setA.values());
  //checking the subset
  console.log(setB.subset(setA));
  //checking the "intersection" of two set
  console.log(setB.intersection(setA).values());
  console.log(setA.intersection(setB).values());
  //checking the "difference" of two set
  console.log(setA.difference(setB).values()); //This will returns ['b','c']
  console.log(setB.difference(setA).values()); //this will returns [] "empty set"
  //checking the "union" of two set
  console.log(setA.union(setB).values());
}

//Queue data structure
{
  let myFirstQueue = function () {
    //this "let collection" will hold all the queues value
    let collection = [];
    //this method will returns all the queues value
    this.print = function () {
      console.log(collection);
    };
    //this method will adds an element at the top of the queue
    this.enqueue = function (element) {
      return collection.push(element);
    };
    //this method will removes an element from the top of queue
    this.dequeue = function () {
      return collection.shift();
    };
    //this method will returns the top element but not gonna remove
    this.front = function () {
      return collection[0];
    };
    //this method will returns the length of the queue
    this.size = function () {
      return collection.length;
    };
    //this method will check if the queue is empty or not and returns true or false
    this.isEmpty = function () {
      return collection.length === 0;
    };
  };

  //creating variable for queue set
  let newQueue = new myFirstQueue();
  newQueue.enqueue("Shawn");
  newQueue.enqueue("Revu");
  newQueue.enqueue("Shain");
  newQueue.enqueue("Shakil");
  newQueue.print();
  newQueue.dequeue();
  newQueue.print();
  console.log(newQueue.size());
  console.log(newQueue.isEmpty());
}

//creating one more 'queue data structure'
let queue = function () {
  //The "let collection" will hold all the queue values
  let collection = [];
  //this method will returns full queue values
  this.print = function () {
    console.log(collection);
  };
  //this method will add an elements at top of the queue
  this.enqueue = function (element) {
    return collection.push(element);
  };
  //this method will removes an element from the top of the queue
  this.dequeue = function () {
    return collection.shift();
  };
  //this method will peek the top element from the queue
  this.front = function () {
    return collection[0];
  };
  //this method will returns the length of the queue
  this.size = function () {
    return collection.length;
  };
  //this method will check if the queue is empty or not and returns "true" or "false"
  this.isEmpty = function () {
    return collection.length === 0;
  };
};
//Creating a variable for this queue
let newQue = new queue();
//adding values to the queue
newQue.enqueue("BMW");
newQue.enqueue("Audi");
newQue.enqueue("Ferari");
newQue.print();
newQue.dequeue();
newQue.print();
console.log(newQue.front());
console.log(newQue.size());
console.log(newQue.isEmpty());
newQue.print();

//Creating "priority queue"
let priorityQueue = function () {
  "use strict";
  //This will hold the priority queue values
  let collection = [];
  //this method will returns the full queue
  this.printPriority = function () {
    console.log(collection);
  };
  //this method will adds element to the queue according to the priority of the element
  this.enqueue = function (element) {
    //check the collection is empty or not, if empty then push the element
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      //set a flag to check if element added
      //this is to determine is the for loop found a match
      let added = false;
      for (let i = 0; i < collection.length; i++) {
        //if the element at the index 'i' in the collection has
        //higher priority you need the splice the array at that
        //index and insert the element there
        if (element[1] < collection[i][1]) {
          //checking priorities
          //splice the array at that index and insert the element
          collection.splice(i, 0, element);
          //satisfy the added condition
          added = true;
          //break the for loop
          break;
        }
      }
      //if not added in the loop
      if (!added) {
        //push to the end on the collection
        collection.push(element);
      }
    }
  };
  //this method will removes element from the queue
  this.dequeue = function () {
    let value = collection.shift();
    return value[0];
  };
  //this method will peeek the top element from the queue
  this.front = function () {
    return collection[0];
  };
  //this method will returns the size of the queue
  this.size = function () {
    return collection.length;
  };
  //this method will check if the queue is empty or not and returns "true" or "false"
  this.isEmpty = function () {
    return collection.length === 0;
  };
};
//creating one variable for queue
let nQueue = new priorityQueue();
nQueue.enqueue(["Hello", 1]);
nQueue.enqueue(["I'm fine", 3]);
nQueue.enqueue(["How are you?", 2]);
nQueue.printPriority();

{
  //creating a queue
  let secondQueue = function () {
    //this array will hold all the queues value
    let arrayCollection = [];
    //this method will returns the full queue elements
    this.print = function () {
      console.log(arrayCollection);
    };
    //this method will adds an element to the queue arrayCollection
    this.enqueue = function (element) {
      return arrayCollection.push(element);
    };
    //this method will removes element from the queue arrayCollection
    this.dequeue = function () {
      return arrayCollection.shift();
    };
    //this method will returns the size of the arrayCollection
    this.size = function () {
      return arrayCollection.length;
    };
    //this method will check if the arrayCollection is empty or not and returns "true" or "false"
    this.isEmpty = function () {
      return arrayCollection.length === 0;
    };
  };
  //creating variable for the "queue"
  let neWQ = new secondQueue();
  //adding elements to the queue
  neWQ.enqueue("Shawn");
  neWQ.enqueue("Hao Jia");
  neWQ.enqueue("Sword of peace");
  neWQ.print();
  console.log(neWQ.dequeue());
  console.log(neWQ.size());
  neWQ.print();

  //Creating "Priority Queue" using "function data type"
  let PriorityQueue = function () {
    //this array will hold the queue values
    let collection = [];
    //this method will returns the full array values
    this.print = function () {
      console.log(collection);
    };
    //Here is the main part for "Priority queue" data structure
    //In 'priority queue' you can add values to the collection array according to its priority
    this.enqueue = function (element) {
      //In this proccess, first of all we need to check if the collection is empty or not!
      //If empty then push element to it
      if (this.isEmpty()) {
        collection.push(element);
      } else {
        //Set a flag to check if element is added
        let added = false;
        //this is to determine is the for loop found a match
        for (let i = 0; i < collection.length; i++) {
          //If the element at the index "i" in the collection has
          //higher priority you need to splice the array at that
          //index and insert the element there
          if (element[1] < collection[i][1]) {
            //Spliceing the array at that index and inserting the element
            collection.splice(i, 0, element);
            //Satisfy the added condition
            added = true;
            //breaking the for loop
            break;
          }
        }
        //if element not added in for loop
        if (!added) {
          collection.push(element);
        }
      }
    };
    //this method will removes element from the collection array
    this.dequeue = function () {
      let value = collection.shift();
      return value[0];
    };
    //this method will peek the top element from the collection array
    this.front = function () {
      return collection[0];
    };
    //this method will returns the size of the array
    this.size = function () {
      return collection.length;
    };
    //this method will check if the collection array is empty or not!
    this.isEmpty = function () {
      return collection.length === 0;
    };
  };
  //creating a queue
  let neQueue = new PriorityQueue();
  neQueue.enqueue(["Shawn", 2]);
  neQueue.enqueue(["Hi", 1]);
  neQueue.enqueue(["How are you?", 3]);
  neQueue.print();
  console.log(neQueue.dequeue());
  console.log(neQueue.size());
  console.log(neQueue.isEmpty());
}

{
  //Creating a palindrome checker
  let PALINDROME = function (value) {
    let emptyStack = [];
    let word = value;
    let emptyREVword = "";
    let lenOFword = word.length;
    for (let i = 0; i < lenOFword; i++) {
      emptyStack.push(word[i]);
    }
    for (let j = 0; j < lenOFword; j++) {
      emptyREVword += emptyStack.pop();
    }
    if (word === emptyREVword) {
      console.log(`${word} is a palindrome.`);
    } else {
      console.log(`${word} is not a palindrome`);
    }
  };
  //Checking one word for palindrome
  PALINDROME("BOB");
}

{
  //Creating a "stack data structure" using "class data type"
  //We need 4 things to create stack data structure such as "push, pop, peek, size"
  class precticeStack {
    constructor() {
      this.storage = [];
      this.count = 0;
    }
    //This method will check if the stack is empty or not!
    ISempty() {
      return this.count === 0;
    }
    //this method will adds an element to the end of the stack
    push(element) {
      this.storage[this.count] = element;
      this.count++;
    }
    //this method will removes element from the top of the stack
    pop() {
      if (this.ISempty() === false) {
        this.count = this.count - 1;
        return this.storage.pop();
      }
    }
    //this method will peek the top  element from the stack
    peek() {
      return this.storage[this.count - 1];
    }
    //this method will returns the length of the stack
    size() {
      return this.count;
    }
    //this method will returns the full array
    print() {
      console.log(this.storage);
    }
  }
  //Creating a variable to check this stack
  let sOFStack = new precticeStack();
  sOFStack.push("Shawn");
  sOFStack.push("Revu");
  sOFStack.push("Ziko");
  sOFStack.print();
  console.log(sOFStack);
  console.log(sOFStack.pop());
  console.log(sOFStack.peek());
  console.log(sOFStack.size());
  sOFStack.print();
}

{
  //Creating one more stack using "function data type"
  let stackofpra = function () {
    this.store = [];
    this.count = 0;
    //this method will adds an element at the end of the stack
    this.push = function (element) {
      this.store[this.count] = element;
      this.count++;
    };
    //this method will removes an element from the top of the stack
    this.pop = function () {
      if (this.count === 0) {
        return undefined;
      } else {
        this.count--;
        let result = this.store[this.count];
        delete this.store[this.count];
        return result;
      }
    };
    //this method will peek the top element from the stack
    this.peek = function () {
      return this.store[this.count - 1];
    };
    //this method will returns the size of the stack
    this.size = function () {
      return this.count;
    };
    //this method will return the full array
    this.print = function () {
      return this.store;
    };
  };
  //Creating variable to check this stack
  let check = new stackofpra();
  //checking other stack methods
  check.push("Apple");
  check.push("Banana");
  check.push("Orange");
  console.log(check.print());
  //    console.log(check);
  console.log(check.pop());
  console.log(check.size());
  console.log(check);
  console.log(check.peek());
}

{
  //Creating "set data structure" using "function data type"
  let SET = function () {
    //this array will hold all the values
    let collection = [];
    //this method will check the presence of the element in the collection
    //If found match then returns "true" otherwise returns "false"
    this.has = function (element) {
      return collection.indexOf(element) !== -1;
    };
    //this method will returns the full collection array
    this.values = function () {
      return collection;
    };
    //this method will adds an element to the set
    this.add = function (element) {
      if (!this.has(element)) {
        collection.push(element);
        return true;
      } else {
        return false;
      }
    };
    //this method will removes elements from the set
    this.remove = function (element) {
      if (this.has(element)) {
        let index = collection.indexOf(element);
        collection.splice(index, 1);
        return true;
      } else {
        return false;
      }
    };
    //this method will check the length of the set
    this.size = function () {
      return collection.length;
    };
    //this method will check the union of two set and returns a new set
    this.union = function (otherSet) {
      let unionSet = new SET();
      let firstSet = this.values();
      let secondSet = otherSet.values();
      firstSet.forEach(function (e) {
        unionSet.add(e);
      });
      secondSet.forEach(function (e) {
        unionSet.add(e);
      });
      return unionSet;
    };
    //this method will returns the intersection of two set as a new set
    this.intersection = function (otherSet) {
      let intersectionSet = new SET();
      let firstSet = this.values();
      firstSet.forEach(function (e) {
        if (otherSet.has(e)) {
          intersectionSet.add(e);
        }
      });
      return intersectionSet;
    };
    //this method will returns the difference of two set as a new set
    this.difference = function (otherSet) {
      let differenceSet = new SET();
      let firstSet = this.values();
      firstSet.forEach(function (e) {
        if (!otherSet.has(e)) {
          differenceSet.add(e);
        }
      });
      return differenceSet;
    };
    //this method will check if one set is the subset of otherset
    //if the condition found match then returns "true" otherwise "false"
    this.subset = function (otherSet) {
      let firstSet = this.values();
      return firstSet.every(function (value) {
        return otherSet.has(value);
      });
    };
  };
  //Creating 2 set for checking all the method
  let SETA = new SET();
  let SETB = new SET();
  //adding values to both set
  SETA.add("a");
  SETA.add("b");
  SETB.add("a");
  SETB.add("b");
  SETB.add("c");
  SETB.add("d");
  console.log(SETA.values());
  //    console.log(SETB.values());
  console.log(SETA.union(SETB).values());
  console.log(SETB.intersection(SETA).values()); //Returns ['a', 'b'], only the common match of two set
  console.log(SETA.difference(SETB).values()); //Empty array will returns because no difference found
  console.log(SETA.subset(SETB)); //Returns "true" because SETA is the subset of SETB.
}
{
  //Creating "queue data structure" using "function data type"
  let praQueue = function () {
    //this collection array will hold all the values
    let collection = [];
    //this method will returns all the values of collection array
    this.print = function () {
      console.log(collection);
    };
    //this method will adds elements to the top of the queue
    this.enqueue = function (element) {
      return collection.push(element);
    };
    //this method will removes element from the queue
    this.dequeue = function () {
      return collection.shift();
    };
    //this method will peek the top element from the queue
    this.front = function () {
      return collection[0];
    };
    //this method will returns the size of the queue
    this.size = function () {
      return collection.length;
    };
    //this method will check if the collection array is empty or not!
    this.isEmpty = function () {
      return collection.length === 0;
    };
  };
}

{
  //Creating "priority queue data structure"
  let prioQueue = function () {
    //this collection will hold all the values of this queue
    let collection = [];
    //this method will check if the collection is empty or not
    this.isEmpty = function () {
      return collection.length === 0;
    };
    //this method will returns the collection array values
    this.print = function () {
      console.log(collection);
    };
    //Here is the main part of the "priority queue"
    //We can add elements to the priority queue according to its priortiy index
    this.enqueue = function (element) {
      //In this process, first of all, we need to check the if the collection array is empty or not!
      //if emepty then push element to it
      if (this.isEmpty()) {
        collection.push(element);
      } else {
        //Set a flag to check if element added
        let added = false;
        //this is to determine is the for loop found a match
        for (let i = 0; i < collection.length; i++) {
          //if the element at the index "i" in the collection has
          //higher priority you need to splice the array at that
          //index and insert the element there
          if (element[1] < collection[i][1]) {
            //Splice the array at that index and insert the element there
            collection.splice(i, 0, element);
            //satisfy the added condition
            added = true;
            //breaking the for loop here
            break;
          }
        }
        //if element not added in for loop
        if (!added) {
          collection.push(element);
        }
      }
    };
    //this method will removes element from the collection array
    this.dequeue = function () {
      let value = collection.shift();
      return value[0];
    };
    //this method will returns the size of the array
    this.size = function () {
      return collection.length;
    };
    //this method will peek the top element from the collection array
    this.peek = function () {
      return collection[0];
    };
  };
}

{
  //Creating Palindrome checker
  let palindromeCHECKER = function (value) {
    let emptyStack = [];
    let word = value;
    let emptyWord = "";
    let lengthOfWord = word.length;
    for (let a = 0; a < lengthOfWord; a++) {
      emptyStack.push(word[a]);
    }
    for (let b = 0; b < lengthOfWord; b++) {
      emptyWord += emptyStack.pop();
    }
    if (word !== emptyWord) {
      console.log(`${word} is not a palindrome.`);
    } else {
      console.log(`${word} is a palindrome`);
    }
  };
  //check the palindrome by passing a value
  palindromeCHECKER("Shawn");
  palindromeCHECKER("bob");
}

{
  //Creating a stack data structure using "class data type"
  class sTACK {
    constructor() {
      this.storage = [];
      this.count = 0;
    }
    //We know for creating a stack, we need 4 things such as push, pop, peek, size
    //Push method will adds an element at the end of the stack
    push(element) {
      this.storage[this.count] = element;
      this.count++;
    }
    //this method will check if the stack is empty or not!
    isEmpty() {
      return this.count === 0;
    }
    //Pop method will removes element from the top of the stack
    pop() {
      if (this.isEmpty() === false) {
        this.count = this.count - 1;
        return this.storage.pop();
      }
    }
    //Peek method will peek the top element from the stack
    peek() {
      return this.storage[this.count - 1];
    }
    //this method will returns the size of the stack
    size() {
      return this.count;
    }
  }
}
{
  //Creating one more stack using "function data type"
  let functionStack = function () {
    this.store = {};
    this.count = 0;
    //this method will push an element to stack at the end of the stack
    this.push = function (element) {
      this.store[this.count] = element;
      this.count++;
    };
    //this method will removes element from the top of the stack
    this.pop = function () {
      if (this.count === 0) {
        return undefined;
      } else {
        this.count--;
        let result = this.store[this.count];
        delete this.store[this.count];
        return result;
      }
    };
    //this method will peek the top element from the stack
    this.peek = function () {
      return this.store[this.count - 1];
    };
    //this method will returns the size of the stack
    this.size = function () {
      return this.count;
    };
  };
}
{
  //Creating a "set data structure" using "function data type"
  let seT = function () {
    //this empty array will hold the set data
    let collection = [];
    //this method will check for the presence of the element in the collection array
    //and returns "true" or "false"
    this.has = function (element) {
      return collection.indexOf(element) !== -1;
    };
    //this method will returns the collection value
    this.values = function () {
      return collection;
    };
    //this method will adds an element to set
    this.add = function (element) {
      if (!collection.has(element)) {
        collection.push(element);
        return true;
      } else {
        return false;
      }
    };
    //this method will removes element from the set
    this.remove = function (element) {
      if (collection.has(element)) {
        let index = collection.indexOf(element);
        collection.splice(index, 1);
        return true;
      } else {
        return false;
      }
    };
    //this method will returns the length of the set
    this.size = function () {
      return collection.length;
    };
    //this method will returns the union of two set and returns as a new set
    this.union = function (otherSet) {
      let unionSet = new seT();
      let firstSet = this.values();
      let secondSet = otherSet.values();
      firstSet.forEach(function (e) {
        unionSet.add(e);
      });
      secondSet.forEach(function (e) {
        unionSet.add(e);
      });
      return unionSet;
    };
    //this method will returns the intersection of two set and returns as a new set
    this.intersection = function (otherSet) {
      let intersectionSet = new seT();
      let firstSet = this.values();
      firstSet.forEach(function (e) {
        if (otherSet.has(element)) {
          intersectionSet.add(e);
        }
      });
      return intersectionSet;
    };
    //this method will returns the difference of two set as a new set
    this.difference = function (otherSet) {
      let differenceSet = new seT();
      let firstSet = this.values();
      firstSet.forEach(function (e) {
        if (!otherSet.has(element)) {
          differenceSet.add(e);
        }
      });
      return differenceSet;
    };
    //this method will check if a set is subset of otherset and returns "true" or "false"
    this.subset = function (otherSet) {
      let firstSet = this.values();
      return firstSet.every(function (value) {
        return otherSet.has(value);
      });
    };
  };
}

//Creating a "queue data structure"
{
  let q = function () {
    //this collection array will hold the queue values
    let collection = [];
    //this method will returns the full collection array
    this.print = function () {
      console.log(collection);
    };
    //this method will adds an element to the collection array at the top
    this.enqueue = function (element) {
      return collection.push(element);
    };
    //this method will removes element from the queue
    this.dequeue = function () {
      return collection.shift();
    };
    //this method will returns the size of the queue
    this.size = function () {
      return collection.length;
    };
    //this method will check if the queue is empty or not
    this.isEmpty = function () {
      return collection.length === 0;
    };
  };

  //Creating priority queue
  let priQ = function () {
    let collection = [];
    //this method will returns the queue values
    this.print = function () {
      console.log(collection);
    };
    //this method will check the queue collection is empty or not!
    this.isEmpty = function () {
      return collection.length === 0;
    };
    //here is main part of priority queue
    //we can adds element to the priority queue according to its priority
    this.enqueue = function (element) {
      //checking the queue is empty or not
      //if empty then push the element
      if (this.isEmpt()) {
        collection.push(element);
      } else {
        //Set a flag to check if element is added
        let added = false;
        //this is to determine is the for loop found a match
        for (let i = 0; i < collection.length; i++) {
          //if the element at the index "i" in the collection has
          //higher priority you need to splice the array at that
          //index and insert the element
          if (element[1] < collection[i][1]) {
            //splice the array at that index and insert the element
            collection.splice(i, 0, element);
            //Satisfy the added condition
            added = true;
            //breaking the for loop here
            break;
          }
        }
        //if not added in for loop
        if (!added) {
          collection.push(element);
        }
      }
    };
    //this method will removes the element from the queue
    this.dequeue = function () {
      let value = collection.shift();
      return value[0];
    };
    //this method will returns the size of the queue
    this.size = function () {
      return collection.length;
    };
    //this will peek the top element from the queue
    this.peek = function () {
      return collection[0];
    };
  };
}

{
  {
    //Creating palindrome checker
    let palCHECKER = function (value) {
      let emSTACK = [];
      let word = value;
      let empREVword = "";
      let wLen = word.length;
      for (let c = 0; c < wLen; c++) {
        emSTACK.push(word[c]);
      }
      for (let d = 0; d < wLen; d++) {
        empREVword += emSTACK.pop();
      }
      if (word === empREVword) {
        console.log(`${word} is a palindrome.`);
      } else {
        console.log(`${word} is not a palindrome`);
      }
    };
    //Passing value to palindrome
    palCHECKER("racecar");
    palCHECKER("SWFU");
  }
  {
    //Creating a 'stack' data structure using 'class' data type
    //We know that, for creating a stack we need 4 methods
    //such as 'push', 'pop', 'peek', 'length'
    class stAck {
      constructor() {
        this.store = [];
        this.count = 0;
      }
      //Push methods will adds an element to the end of the stack
      push(element) {
        this.storage[this.count] = element;
        this.count++;
      }
      //This method will check if the stack is empty or not!
      isEmpty() {
        return this.count === 0;
      }
      //pop method will removes element from the top of the stack
      pop() {
        if (this.isEmpty() === 0) {
          this.count = this.count - 1;
          return this.storage.pop();
        }
      }
      //This method will peek the top element from the stack
      peek() {
        return this.storage[this.count - 1];
      }
      //This method will returns the size of the stack
      size() {
        return this.count;
      }
    }
    //Creating variable to check all the stack method
    let s = new stAck();
    console.log(s.isEmpty());
  }
  {
    //Creating a "stack" data structure using "function" data type
    let funSt = function () {
      this.store = {};
      this.count = 0;
      //this method will adds an element to the end of the stack
      this.push = function (element) {
        this.store[this.count] = element;
        this.count++;
      };
      //this method will removes element from the top of the stack
      this.pop = function () {
        if (this.count === 0) {
          return undefined;
        } else {
          this.count--;
          let result = this.store[this.count];
          delete this.store[this.count];
          return result;
        }
      };
      //this method will peek the top element from the stack
      this.peek = function () {
        return this.store[this.count - 1];
      };
      //this method will returns the size of the stack
      this.size = function () {
        return this.count;
      };
    };
    //Creating variable to check the stack methods
    let sta = new funSt();
    console.log(sta.pop());
  }

  //Creating "set" data structure using "function" data type
  let SETdata = function () {
    //this collection array will hold all the set data
    let collection = [];
    //this method will check for the presence of the element and returns "true" or "false"
    this.has = function (element) {
      return collection.indexOf(element) !== -1;
    };
    //this method will returns the all the set value
    this.values = function () {
      return collection;
    };
    //this method will adds an element to the set
    this.add = function (element) {
      if (!collection.has(element)) {
        collection.push(element);
        return true;
      } else {
        return false;
      }
    };
    //this method will removes element from the set
    this.remove = function (element) {
      if (collection.has(element)) {
        let index = collection.indexOf(element);
        collection.splice(index, 1);
        return true;
      } else {
        return false;
      }
    };
    //this method will returns the size of the set
    this.size = function () {
      return collection.length;
    };
    //this method will returns the union of two set as a new set
    this.union = function (otherSet) {
      let unionSet = new SETdata();
      let firstSet = this.values();
      let secondSet = otherSet.values();
      firstSet.forEach(function (e) {
        unionSet.add(e);
      });
      secondSet.forEach(function (e) {
        unionSet.add(e);
      });
      return unionSet;
    };
    //this method will returns the intersection of two set as a new set
    this.intersection = function (otherSet) {
      let intersectionSet = new SETdata();
      let firstSet = this.values();
      firstSet.forEach(function (e) {
        if (otherSet.has(e)) {
          intersectionSet.add(e);
        }
      });
      return intersectionSet;
    };
    //this method will returns the difference of two set as a new set
    this.difference = function (otherSet) {
      let differenceSet = new SETdata();
      let firstSet = this.values();
      firstSet.forEach(function (e) {
        if (!otherSet.has(e)) {
          differenceSet.add(e);
        }
      });
      return differenceSet;
    };
    //this method will check for subset, if a set is the subset of otherset
    //then returns "true" else "false"
    this.subset = function (otherSet) {
      let firstSet = this.values();
      return firstSet.every(function (value) {
        return otherSet.has(value);
      });
    };
  };

  //Creating "queue" data structure
  {
    let qu = function () {
      //this collection will hold all the queue data
      let collection = [];
      //This method will returns the full queue values
      this.print = function () {
        console.log(collection);
      };
      //this method will adds element at the end of the queue
      this.enqueue = function (element) {
        return collection.push(element);
      };
      //this method will removes element from the fron of the queue
      this.dequeue = function () {
        return collection.shift();
      };
      //this method will peek the front element from queue
      this.front = function () {
        return collection[0];
      };
      //this method will returns the size of the queue
      this.size = function () {
        return collection.length;
      };
      //this method will check if the queue is empty or not!
      this.isEmpty = function () {
        return collection.length === 0;
      };
    };
    //Creating variable to check all the queue values
    let Q = new qu();
    Q.enqueue("shawn");
    Q.enqueue("Revu");
    Q.print();
  }

  //Creating "priority queue"
  let pQ = function () {
    //this collection will hold priority queue values
    let collection = [];
    //this method will returns the full queue
    this.print = function () {
      console.log(collection);
    };
    //This method will check if the collection is empty or not!
    this.isEmpty = function () {
      return collection.length === 0;
    };
    //Here is the main differnce of a normal queue and a priority queue
    //You can add values to priority queue according its priority index
    this.enqueue = function (element) {
      //checking if the collection array is empty or not!
      //if empty then push element to it
      if (this.isEmpty()) {
        collection.push(element);
      } else {
        //Set a flag to check if element added
        let added = false;
        //this is to determine is the for loop found a match
        for (let i = 0; i < collection.length; i++) {
          //if the element at the index "i" in the collection has
          //higher priority you need to splice the array at that
          //index and insert the element there
          if (element[1] < collection[i][1]) {
            //Splice the array at that index and insert the element
            collection.splice(i, 0, element);
            //satisfy the added condition
            added = true;
            //breaking the for loop
            break;
          }
        }
        //if element not added in for loop
        if (!added) {
          collection.push(element);
        }
      }
    };
    //this method will removes element from the front of the queue
    this.dequeue = function () {
      let value = collection.shift();
      return value[0];
    };
    //this method will peek the element from the front of the queue
    this.front = function () {
      return collection[0];
    };
    //this method will returns the size of the queue
    this.size = function () {
      return collection.length;
    };
  };
}

//Again Practice all 3 data structure problem
{
  //Creating a Palindrome checker
  let pali = function (value) {
    let $emptyStack = [];
    let _text = value;
    let $emptyWord = "";
    let $len = _text.length;
    for (let x = 0; x < $len; x++) {
      $emptyStack.push(_text[x]);
    }
    for (let y = 0; y < $len; y++) {
      $emptyWord += $emptyStack.pop();
    }
    if (_text === $emptyWord) {
      console.log(`${_text} is a palindrome.`);
    } else {
      console.log(`${_text} is not a palindrome.`);
    }
  };
  //Checking the palindrome by passing a value
  pali("Hakim");

  //Creating a "stack data structure" usnig "class data type"
  class st {
    constructor() {
      this.store = [];
      this.count = 0;
    }
    // this method will adds an element to the end of the stack
    push(element) {
      this.store[this.count] = element;
      this.count++;
    }
    //this method will check if the stack is empty or not!
    isEmpty() {
      return this.count === 0;
    }
    //this method will removes element from the top of the stack
    pop() {
      if (!this.isEmpty()) {
        this.count = this.count - 1;
        return this.store.pop();
      }
    }
    //this method will peek the top element from the stack
    peek() {
      return this.store[this.count - 1];
    }
    //this method will returns the size of the stack
    size() {
      return this.count;
    }
  }
  //Creating a variable for checking all the stack methods
  let sta = new st();
  //pushing elements to it
  sta.push("h");
  sta.push("a");
  sta.push("c");
  //poping the top elements from it
  console.log(sta.pop());
  //peeking the top element from the stack
  console.log(sta.peek());
  //Returns the size of the stack
  console.log(sta.size());

  //Creating a stack using "function data type"
  let STa = function () {
    this.storage = [];
    this.count = 0;
    this.push = function (elememt) {
      this.storage[this.count] = elememt;
      this.count++;
    };
    this.pop = function () {
      if (this.count === 0) {
        return undefined;
      } else {
        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
      }
    };
    this.peek = function () {
      return this.storage[this.count - 1];
    };
    this.size = function () {
      return this.count;
    };
  };

  //Creating a "set data structure" using "function data type"
  let $set = function () {
    let collection = [];
    this.has = function (elememt) {
      return collection.indexOf(elememt) !== -1;
    };
    this.values = function () {
      return collection;
    };
    this.add = function (elememt) {
      if (!collection.has(elememt)) {
        collection.push(elememt);
        return true;
      } else {
        return false;
      }
    };
    this.remove = function (elememt) {
      if (collection.has(elememt)) {
        let index = collection.indexOf(elememt);
        collection.splice(index, 1);
        return true;
      } else {
        return false;
      }
    };
    this.size = function () {
      return collection.length;
    };
    this.union = function (otherSet) {
      let unionSet = new $set();
      let firstSet = this.values();
      let secondSet = otherSet.values();
      firstSet.forEach(function (e) {
        unionSet.add(e);
      });
      secondSet.forEach(function (e) {
        unionSet.add(e);
      });
      return unionSet;
    };
    this.intersection = function (otherSet) {
      let intersectionSet = new $set();
      let firstSet = this.values();
      firstSet.forEach(function (e) {
        if (otherSet.has(e)) {
          intersectionSet.add(e);
        }
      });
      return intersectionSet;
    };
    this.difference = function (otherSet) {
      let differenceSet = new $set();
      let firstSet = this.values();
      firstSet.forEach(function (e) {
        if (!otherSet.has(e)) {
          differenceSet.add(e);
        }
      });
      return differenceSet;
    };
    this.subset = function (otherSet) {
      let firstSet = this.values();
      return firstSet.every(function (value) {
        return otherSet.has(value);
      });
    };
  };

  //Creating "queue data structure" using "function data type"
  let $queue = function () {
    let collection = [];
    this.isEmpty = function () {
      return collection.length === 0;
    };
    this.size = function () {
      return collection.length;
    };
    this.enqueue = function (elememt) {
      return collection.push(elememt);
    };
    this.dequeue = function () {
      return collection.shift();
    };
    this.front = function () {
      return collectionp[0];
    };
    this.print = function () {
      console.log(collection);
    };
  };

  //Creating "priority queue" using function data type
  let _priorityQueue = function () {
    //this collection array will hold the queue values
    let collection = [];
    //this method returns the full array
    this.print = function () {
      console.log(collection);
    };
    //this method will check if the collection array is empty
    this.isEmpty = function () {
      return collection.length === 0;
    };
    //Here is the main part of the "priority queue"
    //We can add values to priority queue according to it's priority index
    this.enqueue = function (element) {
      //checking if the collection array is empty or not
      if (this.isEmpty()) {
        collection.push(element);
      } else {
        //Set a flag to check if elememt is added
        let added = false;
        //this is to determine is the for loop found a matches
        for (let i = 0; i < collection.length; i++) {
          //if the element at the index "i" in the collection array has
          //higher priority you need to splice the array at that
          //index and insert the element there
          if (element[1] < collection[i][1]) {
            //Splice the array at that index and insert the element there
            collection.splice(i, 0, element);
            //Satisfy the added condition
            added = true;
            //breaking the for loop here
            break;
          }
        }
        //if element not added in for loop
        if (!added) {
          collection.push(element);
        }
      }
    };
    this.dequeue = function () {
      let value = collection.shift();
      return value[0];
    };
    this.front = function () {
      return collection[0];
    };
  };
}

{
  let tryCatchThrow = function (parameter) {
    let age = parameter;
    try {
      if (age === "") throw `It's not a valid number, it's an empty string.`;
      if (isNaN(age)) throw `input not a number! and it's ${parameter}.`;
      if (age > 18) throw `He is mature now.`;
      if (age < 18)
        throw `He is not mature, and also not qulified for this post.`;
    } 
    catch (err) {
      console.log(err);
    }
  };
  tryCatchThrow("fuck");
}

{
    const personOne = {
        details: function() {
            return this.name + " " + this.lastName;
        }
    }
    const personTwo = {
        name: "MD Niamul Hakim",
        lastName: "Shawn."
    }
    //Checking the Explicit Function Binding
    console.log(`The object owner full name is ${personOne.details.call(personTwo)}`);
    console.log(personOne.details.apply(personTwo));
}






{
    //Creaing Palindrome checker
    let CrePalindrome = function(passW) {
        let empStack = [];
        let word = passW;
        let revWord = "";
        let LENGTH = word.length;
        for(let i = 0; i < LENGTH; i++) {
            empStack.push(word[i]);
        }
        for(let j = 0; j < LENGTH; j++) {
            revWord += empStack.pop();
        }
        if(word === revWord) {
            console.log(`${word} is a palindrome.`);
        }
        else {
            console.log(`${word} is not a palindrome.`);
        }
    }





    {
        //Creating "stack data structure" using "class data type"
        class staCK {
            constructor() {
                this.store = [];
                this.count = 0;
            }
            //this method will adds element at the end of the stack
            push(element) {
                this.store[this.count] = element;
                this.count++;
            }
            //this method will check if the stack is empty or not!
            isEmpty() {
                return this.count === 0;
            }
            //this method will removes element from the end of the stack
            pop() {
                if(!this.isEmpty()) {
                    this.count = this.count-1;
                    return this.store.pop();
                }
            }
            //this method will peek the top element from the stack
            peek() {
                return this.store[this.count-1];
            }
            //this method will returns the size of the stack
            size() {
                return this.count;
            }
        }
    }
    {
        //Creating one more stack usning "function data type"
        let stackF = function() {
            this.storage = {};
            this.count = 0;
            //this method will adds an element at the end of the stack
            this.push = function(element) {
                this.storage[this.count] = element;
                this.count++;
            }
            //this method will removes element from the top of the stack
            this.pop = function() {
                if(this.count === 0) {
                    return undefined;
                }
                else {
                    this.count--;
                    let result = this.storage[this.count];
                    delete this.storage[this.count];
                    return result;
                }
            }
            //this method will peek the top element from the stack
            this.peek = function() {
                return this.storage[this.count-1];
            }
            //this method will returns the size of the stack
            this.size = function() {
                return this.count;
            }
        }
    }
    


    {
        //Creating "set data structure" using function data type
        let sEt = function() {
            //this empty array will hold all the set values
            let collection = [];
            //this method will check for the presence of the element
            this.has = function(element) {
                return (collection.indexOf(element) !== -1);
            }
            //this method will returns the collection array values
            this.values = function() {
                return collection;
            }
            //this method will adds element to the set 
            this.add = function(element) {
                if(!this.has(element)) {
                    collection.push(element);
                    return true;
                }
                else {
                    return false;
                }
            }
            //this method will method will removes element from the set
            this.remove = function(element) {
                if(this.has(element)) {
                    let index = collection.indexOf(element);
                    collection.splice(index, 1);
                    return true;
                }
                else {
                    return false;
                }
            }
            //this method will returns the union of two set as a new set
            this.union = function(otherSet) {
                let unionSet = new sEt();
                let firstSet = this.values();
                let secondSet = otherSet.values();
                firstSet.forEach(function(e) {
                    unionSet.add(e);
                })
                secondSet.forEach(function(e) {
                    unionSet.add(e);
                })
                return unionSet;
            }
            //this method will returns the intersection of two set as a new set
            this.intersection = function(otherSet) {
                let intersectionSet = new sEt();
                let firstSet = this.values();
                firstSet.forEach(function(e) {
                    if(otherSet.has(e)) {
                        intersectionSet.add(e);
                    }
                })
                return intersectionSet;
            }
            //this method will returns the difference of two set as a new set
            this.difference = function(otherSet) {
                let differenceSet = new sEt();
                let firstSet = this.values();
                firstSet.forEach(function(e) {
                    if(!otherSet.has(e)) {
                        differenceSet.add(e);
                    }
                })
                return differenceSet;
            }
            //this method will check if one set is subset of other set and returns "true" or "false"
            this.subset = function(otherSet) {
                let firstSet = this.values();
                return firstSet.every(function(value) {
                    return otherSet.has(value);
                })
            }
        }
    }
    {
        //Creating "queue data structure" 
        let QueUE = function() {
            let collection = [];
            //this method will returns the full queue
            this.print = function() {
                console.log(collection);
            }
            //this method will returns the size of the queue 
            this.size = function() {
                return collection.length;
            }
            //this method will enqueue an element at the top of the queue
            this.enqueue = function(element) {
                return collection.push(element);
            }
            //this method will removes element from the front of the queue
            this.dequeue = function() {
                return collection.shift();
            }
            //this method will peek the top element from the queue
            this.front = function() {
                return collection[0];
            }
            //this method will check if the collection array is empty
            this.isEmpty = function() {
                return collection.length === 0;
            }
        }
    }
    {
        //Creating "priority queue" 
        let priorityQueue = function() {
            let collection = [];
            //this method will returns the full collection array
            this.print = function() {
                console.log(collection);
            }
            //checking if collection array is empty
            this.isEmpty = function() {
                return collection.length === 0;
            }
            //here is the main part of a priority queue 
            //you can add element to priority queue according to their priority index
            this.enqueue = function(element) {
                if(this.isEmpty()) {
                    collection.push(element);
                }
                else {
                    //set a flag to check if element is added
                    let added = false;
                    //this is to determine is the for loop found a match
                    for(let i = 0; i < collection.length; i++) {
                        //if the element at the index "i" in the collection array has
                        //higher priority you need to splice the array at that 
                        //index and insert the element ther 
                        if(element[1] < collection[i][1]) {
                            //splice the array at that index and insert the element
                            collection.splice(i, 0, element);
                            //Satisfy the added condition
                            added = true;
                            //breaking the for loop here
                            break;
                        }
                    }
                    //if element not added in for loop
                    if(!added) {
                        collection.push(element);
                    }
                }
            }
            //this method will removes element from the front of the queue
            this.dequeue = function() {
                let value = collection.shift();
                return value[0];
            }
            //this method will peek the top element from the queue
            this.peek = function() {
                return collection[0];
            }
            //this method will returns the size of the queue
            this.size = function() {
                return collection.length;
            }
        }
    }
}












{
  ///Creating Palindrome checker 
  {
    let palinDrome = function(value) {
      let empStack = [];
      let palinValue = value;
      let revWord = "";
      let len = palinValue.length;
      for(let i = 0; i < len; i++) {
        empStack.push(palinValue[i]);
      }
      for(let j = 0; j < len; j++) {
        revWord += empStack.pop();
      }
      if(palinValue === revWord) {
        console.log(`${palinValue} is a palindrome.`);
      }
      else {
        console.log(`${palinValue} is not a palindrome.`);
      }
    }
    palinDrome("Shawn");
  }


  //Creating "Stack data structure" using "class data type"
  {
    class myStack {
      constructor() {
        this.store = [];
        this.count = 0;
      }
      //This method Will adds an element at the end of the stack
      push(element) {
        this.store[this.count] = element;
        this.count++;
      }
      //This method will check if the stack is empty or not
      isEmpty() {
        return this.count === 0;
      }
      //This method will removes an element from The top of The Stack
      pop() {
        if(!this.isEmpty()) {
          this.count = this.count -1;
          return this.store.pop();
        }
      }
      //This method Will peek The top element from The stack
      peek() {
        return this.store[this.count-1];
      }
      //This method will returns the size of the stack
      size() {
        return this.count;
      }
    }
    //Creating Variable for checking the stack method
    const mStack = new myStack();
    mStack.push("Shawn");
    mStack.push("Revu");
    mStack.push("Jiko");
    console.log(mStack);
    console.log(mStack.pop());
    console.log(mStack);
    console.log(mStack.size());
  }



  //Creating Stack data structure using "function data type" 
  {
    let FunctionalStack = function() {
      this.storage = {};
      this.count = 0;
      //This method will adds an element at the end of the stack
      this.push = function(element) {
        this.storage[this.count] = element;
        this.count++;
      }
      //This method will removes element from the top of the stack
      this.pop = function() {
        if(this.count === 0) {
          return undefined;
        }
        else {
          this.count--;
          let value = this.storage[this.count];
          delete this.storage[this.count];
          return value;
        }
      }
      //This method will peek the top element from the stack
      this.peek = function() {
        return this.storage[this.count-1];
      }
      //this method will returns the size of the stack
      this.size = function() {
        return this.count;
      }
    }
    const mStack = new FunctionalStack();
    mStack.push("Shawn");
    mStack.push("Revu");
    mStack.push("Jiko");
    mStack.push("Shakil");
    console.log(mStack);
    console.log(mStack.pop());
    // console.log(mStack);
    console.log(mStack.size());
  }




  //Creating "Set data structure" using "function data type"
  {
    let MYset = function() {
      let collection = [];
      //this method will check for the presence of the element in the collection array
      this.has = function(element) {
        return collection.indexOf(element) !== -1;
      }
      //this method will returns the collection array values
      this.values = function() {
        return collection;
      }
      //this method will adds element to the set
      this.add = function(element) {
        if(!this.has(element)) {
          collection.push(element);
          return true;
        }
        else {
          return false;
        }
      }
      //this method will removes element from the set
      this.remove = function(element) {
        if(this.has(element)) {
          let index = collection.indexOf(element);
          collection.splice(index, 1);
          return true
        }
        else {
          return false;
        }
      }
      //this method will returns the size of the set 
      this.size = function() {
        return collection.length;
      }
      //this method will returns the union of two set as a new set
      this.union = function(otherSet) {
        let unionSet = new MYset();
        let firstSet = this.values();
        let secondSet = otherSet.values();
        firstSet.forEach(function(e) {
          unionSet.add(e);
        })
        secondSet.forEach(function(e) {
          unionSet.add(e);
        })
        return unionSet;
      }
      //this method will returns the intersection of two set as a new set
      this.intersection = function(otherSet) {
        let intersectionSet = new MYset();
        let firstSet = this.values();
        firstSet.forEach(function(e) {
          if(otherSet.has(e)) {
            intersectionSet.add(e);
          }
        })
        return intersectionSet;
      }
      //this method will returns the difference of two set as a new set
      this.difference = function(otherSet) {
        let differenceSet = new MYset();
        let firstSet = this.values();
        firstSet.forEach(function(e){
          if(!otherSet.has(e)) {
            differenceSet.add(e);
          }
        })
        return differenceSet;
      }
      //this method will check if one set is subset of otherset and returns "true" or "false"
      this.subset = function(otherSet) {
        let firstSet = this.values();
        return firstSet.every(function(value) {
          return otherSet.has(value);
        })
      }
    }
  }




  //Creating "queue data structure" using "function syntax"
  //We know that "queue data structure" is almost similar to "stack data" structure but have some difference
  //Stack work on "LIFO" format, but Queue work on "FIFO" format
  {
    let myNormalQueue = function() {
      let collection = [];
      //this method will returns the collection array
      this.print = function() {
        console.log(collection);
      }
      //this method will adds an element to the queue
      this.enqueue = function(element) {
        return collection.push(element);
      }
      //this method will removes element from the queue
      this.dequeue = function() {
        return collection.shift();
      }
      //this method will peek the front element from the queue
      this.front = function() {
        return collection[0];
      }
      //this method will returns the size of queue 
      this.size = function() {
        return collection.length;
      }
    }
  }


  //Creating "priority queue"
  let MYPRIORITYQUEUE = function() {
    let collection = [];
    //this method will returns the full collection array
    this.print = function() {
      console.log(collection);
    }
    //this method will check if the collection array is empty or not
    this.isEmpty = function() {
      return collection.length === 0;
    }
    //here is main part of Priority queue,
    //we can adds value to the priority queue according to there priority index
    this.enqueue = function(element) {
      //checking if the collection array is empty or not!
      //if empty then push element to it
      if(this.isEmpty()) {
        collection.push(element);
      }
      else {
        //Set a flag to check if element is added
        let added = false;
        //this is to determine if the for loop found a matches
        for(let i = 0; i < collection.length; i++) {
          //if the element at the index "i" at the collection array has 
          //the higher index you need to splice the array at that 
          //index and insert the element there
          if(element[1] < collection[i][1]) {
            //Splice the array at that index and insert the element there
            collection.splice(i, 0, element);
            //satisfy the added condition
            added = true;
            //breaking the for loop 
            break;
          }
        }
        //If element not added in for loop 
        if (!added) {
          collection.push(element);
        }
      }
    }
    //this method will removes element from the front of the queue
    this.dequeue = function() {
      let value = collection.shift();
      return value[0];
    }
    //this method will returns the front element from the queue
    this.front = function() {
      return collection[0];
    }
    //this method will returns the size of the queue
    this.size = function() {
      return collection.length;
    }
  }
}


console.log(Math.max.apply(null, [1,100,5,10,1000,500]));


{
  //counter dilemmma 
  let count = 0;
  let myCounter = function() {
    count += 1;
  };
  myCounter();
  myCounter();
  myCounter();
  myCounter();
  console.log(count);
}
{
  //JavaScript Nested Functions
  // let myCount = function() {
  //   let count = 0;
  //   function plus() {count += 1;}
  //   plus();
  //   return count;
  // }

  {
    //JavaScript Closures
    let myClosures = function() {
      let counter = 0;
      return function () {
        counter += 1;
        return counter;
      }
    }
    let myCounter = myClosures();
    myCounter();
    myCounter();
    myCounter();
    myCounter();
    myCounter();
    myCounter();
    console.log(myCounter());
  }
}



{
  //Creating palindrome checker
  const palindrome = (value) => {
    let emptyStack = [];
    let word = value;
    let revWord = "";
    let len = word.length;
    for(let i = 0; i < len; i++) {
      emptyStack.push(word[i]);
    }
    for(let j = 0; j < len; j++) {
      revWord += emptyStack.pop();
    }
    if(word === revWord) {
      console.log(`${word} is a palindrome.`);
    }
    else {
      console.log(`${word} is not a palindrome.`);
    }
  }
  palindrome('Shawn');


  {
    //Creating "stack data structure" using "class data type" 
    class mStack {
      constructor() {
        this.storage = [];
        this.count = 0;
      }
      //this method push an element in the end of the stack
      push(element) {
        this.storage[this.count] = element;
        this.count++;
      }
      //this method check if the the stack is empty or not!
      isEmpty() {
        return this.count === 0;
      }
      //this method removes the top element from the stack
      pop() {
        if(!this.isEmpty()) {
          this.count = this.count -1;
          return this.storage.pop();
        }
      }
      //this method peek the top element from the stack
      peek() {
        return this.storage[this.count-1];
      }
      //this method return the size of the stack
      size() {
        return this.count;
      }
    }
    //Creating a variable to check all the "stack" method
    const myStack = new mStack();
    myStack.push("Shawn is running.");
    myStack.push("Shawn like to travel.");
    myStack.push("Shawn sleep at 1am at night.");
    console.log(myStack);
    console.log(myStack.pop());
    console.log(myStack.peek());
    console.log(myStack.size());
    console.log(myStack);
  }
  {
    //Creating "stack data structure" using "function data type"
    function myStacK() {
      this.store = {};
      this.count = 0;
      //this method adds an element at the end of the stack
      this.push = function(element) {
        this.store[this.count] = element;
        this.count++;
      }
      //this method removes an element from the top of the stack
      this.pop = function() {
        if(this.count === 0) {
          return undefined;
        } else {
          this.count--;
          let value = this.store[this.count];
          delete this.store[this.count];
          return value;
        }
      }
      //this method peek the top element from the stack
      this.peek = function() {
        return this.store[this.count-1];
      }
      //this method returns the size of the stack
      this.size = function() {
        return this.count;
      }
    }
    //creating a variable to check all the methods 
    const mSTACK = new myStacK();
    mSTACK.push("Shawn");
    mSTACK.push("Revu");
    mSTACK.push("Ziko");
    console.log(mSTACK);
    console.log(mSTACK.pop());
    console.log(mSTACK.peek());
    console.log(mSTACK.size());
    console.log(mSTACK);
  }



  {
    //Creating "set data structure" using "function data type"
    function mySET() {
      //this array will hold all the set values
      let collection = [];
      //this method will check for the presence of the element
      this.has = function(element) {
        return (collection.indexOf(element) !== -1);
      }
      //this method will returns all the set values
      this.values = function() {
        return collection;
      }
      //this method will adds an element to the set
      this.add = function(element) {
        if(!this.has(element)) {
          collection.push(element);
          return true;
        } else {
          return false;
        }
      }
      //this method will removes element from the set
      this.remove = function(element) {
        if(this.has(element)) {
          let index = collection.indexOf(element);
          collection.splice(index, 1);
          return true;
        } else {
          return false;
        }
      }
      //this method returns the size of the set
      this.size = function() {
        return collection.length;
      }
      //this method will returns the union of two set as a new set
      this.union = function(otherSet) {
        let unionSet = new mySET();
        let firstSet = this.values();
        let secondSet = otherSet.values();
        firstSet.forEach(function(e) {
          add(e);
        })
        secondSet.forEach(function(e) {
          add(e);
        })
        return unionSet;
      }
      //this method returns the intersection of set as a new set
      this.intersection = function(otherSet) {
        let intersectionSet = new mySET();
        let firstSet = this.values();
        firstSet.forEach(function(e) {
          if(otherSet.has(e)) {
            add(e);
          }
        })
        return intersectionSet;
      }
      //this method returns the difference of two set as a new set
      this.difference = function(otherSet) {
        let differenceSet = new mySET();
        let firstSet = this.values();
        firstSet.forEach(function(e) {
          if(!otherSet.has(e)) {
            add(e);
          }
        })
        return differenceSet;
      }
      //this method will check if one set is subset of other set and returns true or false
      this.subset = function(otherSet) {
        let firstSet = this.values();
        return firstSet.every(function(value) {
          return otherSet.has(value);
        })
      }
    }
    //Creating two variable to check all the set methods
    const setA = new mySET();
    const setB = new mySET();
    //adding values to setA
    setA.add("a");
    setA.add("b");
    setA.add("c");
    setA.add("d");
    //adding value to setB 
    setB.add("a");
    //checking setA values
    console.log(setA.values());
    //removing element from setA
    console.log(setA.remove('d'));
    console.log(setA);
    console.log(setA.values());
    console.log(setB.subset(setA));
  }



  {
    //Creating "queue data structure" using "function data type"
    function myQueue() {
      let collection = [];
      //this method returns the full array
      this.print = function() {
        return collection;
      }
      //this method adds an element at end of the queue
      this.enqueue = function(element) {
        return collection.push(element);
      }
      //this method will removes element from the first of the array collection
      this.dequeue = function() {
        return collection.shift();
      }
      //this method peek the front element from the queue
      this.front = function() {
        return collection[0];
      }
      //this method returns the size of the queue
      this.size = function() {
        return collection.length;
      }
    }
    //Creating a variable to check all the queue methods
    const mQueue = new myQueue();
    //adding element to it
    mQueue.enqueue("Niamul");
    mQueue.enqueue("Hakim");
    mQueue.enqueue("Shawn");
    console.log(mQueue.print());
    //removing an element from it
    console.log(mQueue.dequeue());
    //peeking the front element from it
    console.log(mQueue.front());
    console.log(mQueue.size());
    console.log(mQueue.print());
  }

  {
    //Creating "priority queue" using "function data type"
    //In priority queue, we can add elements according to its priority index
    function priorityQue() {
      let store = [];
      this.print = function() {
        return store;
      }
      //This method will check if the store array is empty or not!
      this.isEmpty = function() {
        return store.length === 0;
      }
      //here we come to the main part of priority queue
      //we can control the element priority index
      this.enqueue = function(element) {
        if(this.isEmpty()) {
          store.push(element);
        } else {
          //set a flag to check if element is added
          let added = false;
          //this is to determine is the for loop found a match
          for(let i = 0; i < store.length; i++) {
            //if the element at the index "i" in the collection array has
            //higher index you need to splice the array at that 
            //index and insert the element there
            if(element[1] < store[i][1]) {
              //splice the array at that index and insert the element there
              store.splice(i, 0, element);
              //satisfying the addeed condition
              added = true;
              //breaking the for loop using break keyword
              break;
            }
          }
          //If element not added in for loop
          if(!added) {
            store.push(element);
          }
        }
      }
      //this method removes element from the front of the queue
      this.dequeue = function() {
        let value = store.shift();
        return value[0];
      }
      //this method will peek the front element from the queue
      this.front = function() {
        return store[0];
      }
      //this method returns the size of the queue
      this.size = function() {
        return store.length;
      }
    }
    //Creating a variable to check all the priority queue methods
    const priorityQUEUE = new priorityQue();
    //adding values to it
    priorityQUEUE.enqueue(["shawn", 3]);
    priorityQUEUE.enqueue(["Niamul", 1]);
    priorityQUEUE.enqueue(["Hakim", 2]);
    console.log(priorityQUEUE.print());
  }
}
