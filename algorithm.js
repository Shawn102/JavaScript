//Creating palindrome checker
{
    let palindrome = function(value) {
        let emptyStack = [];
        let word = value;
        let reverseWord = "";
        let wLen = word.length;
        for(let a = 0; a < wLen; a++) {
            emptyStack.push(word[a]);
        }
        for(let b = 0; b < wLen; b++) {
            reverseWord += emptyStack.pop();
        }
        if(word === reverseWord) {
            console.log(`${word} is a palindrome.`);
        }
        else {
            console.log(`${word} is not a palindrome.`)
        }
    }
    //Creaking the palindrome 
    palindrome("bob")
}

{
    //Creating a 'stack' data structure using "class data type"
    //We know for creating a class, we need 4 things such as push, pop, peek, length
    class STACK {
        constructor() {
            this.store = [];
            this.count = 0;
        }
        //Checking, if the stack is empty or not!
        isEmpty() {
            return this.count === 0;
        }
        //this method will push element to the end of the stack
        push(element) {
            this.store[this.count] = element;
            this.count++;
        }
        //this method will removes element from the top of the stack
        pop() {
            if(this.isEmpty() === false) {
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
    //Creating variable for checking all the stack method
    let stAck = new STACK();
    stAck.push("Bmw");
    stAck.push("Audi");
    console.log(stAck);
    console.log(stAck.pop());
    console.log(stAck.isEmpty());
}



{
    //Creating "stack data structure" using "function data type"
    let STaCK = function() {
        this.storage = {};
        this.count = 0;
        //this method will adds an element to the end of the stack
        this.push = function(elememt) {
            this.storage[this.count] = elememt;
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
    //Creating variable to check all the stack methods
    let sTACk = new STaCK();
    console.log(sTACk.pop());
}




{
    //Creating a "set data structure" using "function data type"
    let SET = function() {
        //this empty array will hold the set values
        let collection = [];
        //This method will check for the presence of element,
        //if found any matches then returns "true" otherwise returns "false"
        this.has = function(elememt) {
            return (collection.indexOf(elememt) !== -1);
        }
        //this method will returns the full set
        this.values = function() {
            return collection;
        }
        //this method will adds element to the set
        this.add = function(elememt) {
            if(!this.has(elememt)) {
                collection.push(elememt);
                return true;
            }
            else {
                return false;
            }
        }
        //this method will removes element from the set
        this.remove = function() {
            if(this.has(elememt)) {
                let index = collection.indexOf(elememt);
                collection.splice(index, 1);
                return true;
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
            let unionSet = new SET();
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
            let intersectionSet = new SET();
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
            let differenceSet = new SET();
            let firstSet = this.values();
            firstSet.forEach(function(e) {
                if(!otherSet.has(e)) {
                    differenceSet.add(e);
                }
            })
            return differenceSet;
        }
        //this method will check if one set is the subset of otherset then returns "true" otherwise "false"
        this.subset = function(otherSet) {
            let firstSet = this.values();
            return firstSet.every(function(value) {
                return otherSet.has(value);
            })
        }
    }
    //Creating variables to check the set methods
    let setA = new SET();
    let setB = new SET();
    setA.add("a");
    setA.add("b");
    setB.add("a");
    setB.add("b");
    setB.add("c");
    console.log(setA.subset(setB));
    console.log(setB.difference(setA).values());
    console.log(setA.union(setB).values());
}






{
    //Creating "queue data structure"
    //We know that, "queue" similar to "stack" data structure
    //but the only difference is "stack follow 'LIFO'" and "queue follows 'FIFO'"
    let QUEUE = function() {
        //this empty array will hold the queue values
        let collection = [];
        //this method will check if the queue is empty or not
        this.isEmpty = function() {
            return collection.length === 0;
        }
        //this method will returns the full queue
        this.print = function() {
            console.log(collection);
        }
        //this method will adds an element at the top of the queue
        this.enqueue = function(elememt) {
            return collection.push(elememt);
        }
        //this method will removes element from the top of front of the queue
        this.dequeue = function() {
            return collection.shift();
        }
        //this method will returns the size of the queue
        this.size = function() {
            return collection.length;
        }
        //this method will peek the top element from the queue
        this.front = function() {
            return collection[0];
        }

    }
}






{
    //Creating "priority queue" data structure
    let PRIORITYqueue = function() {
        let collection = [];
        //this will returns the full queue
        this.print = function() {
            console.log(collection);
        }
        //Checking if the collection array is empty or not!
        this.isEmpty = function() {
            return collection.length === 0;
        }
        //here is the main part of "priority queue"
        //We can add values to the collection array according to its priority index
        this.enqueue = function(elememt) {
            //Checking if empty then push element
            if(this.isEmpty()) {
                collection.push(elememt);
            }
            else {
                //Set a flag to check if element is added
                let added = false;
                //this is to determine is the for loop found a match
                for(let i = 0; i < collection.length; i++) {
                    //if the element at the index "i" in the collection has 
                    //higher priority you need to splice the array at that 
                    //index and insert the element there
                    if(elememt[1] < collection[i][1]) {
                        //splice the array at that index and insert the element there
                        collection.splice(i, 0, elememt);
                        //Satisfy the added condition
                        added = true;
                        //breaking the for loop here
                        break;
                    }
                }
                //if element not added in for loop
                if(!added) {
                    collection.push(elememt);
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
{
    //leetcode problem: brute force algorithm
    //Expected output: [0, 1]
    var twoSum = function(nums, target) {
        
    };
    twoSum([2, 7, 11, 15], 9);
}