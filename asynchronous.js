
setTimeout(myName, 10000);
function myName() {
    let n = "Hi, I'm Shawn!";
    console.log(n);
}
console.log("hello");
console.log("Hello");

{
    setTimeout(function () {
        console.log("Hello everyone!");
    }, 2000)
}
setTimeout(function () {
    console.log(`It's 12 second late.`)
},12000)



setInterval(myRealTime, 1000);
function myRealTime() {
    let d = new Date();
    console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
} 

//node .\asynchronous.js

