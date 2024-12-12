// console.log("hey this is me !!")

// var a = 5;
// var b = 6;
// var c ="Sushiii";
// console.log(a+b+c)
// console.log(typeof a , typeof b , typeof c)
// /*1. Always declare variables

// 2. Always use const if the value should not be changed

// 3. Always use const if the type should not be changed (Arrays and Objects)

// 4. Only use let if you can't use const

// 5. Only use var if you MUST support old browsers.

// There are a few rules that you need to follow when naming variables in JavaScript:

// Variable names can only contain letters, digits, underscores, and dollar signs.
// Variable names cannot start with a digit.
// Variable names are case-sensitive.
// It is also a good practice to use descriptive and meaningful names for your variables, as this makes your code easier to read and understand.

// */

// let x= 4;
// let y=8;
// let z=9.5;
// const p= true;
// let q= undefined ;
// let r = null;   //typeofnull is always object 

// console.log(x,y,z,p,q,r)
// console.log(typeof x, typeof y,typeof z ,typeof p, typeof q,typeof r)

// //howto make objects 

// let o={
//     name: "sushii",
//     "job role" :"student"

// }
// // console.log(o)

// // o.salary="50cr";
// // console.log(o)

// console.log("yooooo!!!")

// let age = 45;

// if(age>18){
//     console.log("you can drive !")
// }else{
//     console.log("you cannot drive !!")
// }
// let x = "apple";
// switch (x) {
//   case "apple":
//     console.log("x is an apple");
//     break;
//   case "banana":
//     console.log("x is a banana");
//     break;
//   case "orange":
//     console.log("x is an orange");
//     break;
//   default:
//     console.log("x is something else");
// }

//in js = is an assignment operator

// let x = 10;
// let y = 20;
// let max;

// max = (x > y) ? x : y;

// console.log(max); // Outputs: 20


//if(x>y){
// let c = x-y;
// }else{
//     let c = y-x;
// }

//for loop normal one     for(i=0;i<299;i++)

// let person = {
//     name: "John",
//     age: 30,
//     job: "developer"
//   };
  
//   //for-in loop

// //The for-in loop is used to iterate over the properties of an object. It has the following syntax:



//   for (let key in person) {
//     console.log(key + ": " + person[key]);
//   }

// //for-of loop

// //The for-of loop is used to iterate over the values of an iterable object, such as an array or a string. It has the following syntax:
  
// let numbers = [1, 2, 3, 4, 5];

// for (let number of numbers) {
//   console.log(number);
// }

//while loopppppp

// let i = 1;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// //While loops can be useful when you don't know exactly how many times you need to execute a block of code. For example, you might use a while loop to keep prompting a user for input until they provide a valid response.
// //This loop will keep prompting the user for input until they enter either "yes" or "no".

// //While loops can be a useful tool in JavaScript, but it's important to use them with caution. If the condition is never met, the loop will become an infinite loop and will run forever. Make sure to include a way to update the condition and eventually exit the loop to avoid this issue.



// let input = "";

// while (input !== "yes" && input !== "no") {
//   input = prompt("Please enter 'yes' or 'no':");
// }



//FUNCTIONNNNNN 

// function nice(name){
//     console.log("HEY " + name +" you are nice !!")
//     console.log("HEY " + name +" you are good !!")
//     console.log("HEY " + name +" your dress is good!!")

// }
// // console.log("Hey sushii you are nice !!")
// // console.log("Hey sushii you are good !!")
// // console.log("Hey sushii your dress is good !!")

// nice("sushiii")
// nice("Dumpling")

// function sum(a,b){
//     // console.log(a+b)
//     return a+b
// }

// result=sum(3,5)

// console.log("the sum of this number is" ,result)

// const square = (x) => {
//     return x * x;

// //     console.log("i am an arrow fuction, my work is to to internally pass one function into another one !!", x)
//   };
//   square(3);
//   square(4);/

// FAULTY CALCULATOR 

// + ---> -
// * --> +
// - --->/
// / --> *

let random = Math.random()
let a = parseFloat(prompt("enter number 1"));
let b = parseFloat(prompt("enter number 2"));
let c = prompt("enter opejration.....");

let obj1={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"*"
}

if(random>0.1){

    //should be carefull using eval do not use in production site n alll

    alert(`The result is ${eval(`${a} ${c} ${b}`)}`); // Template literals corrected

}else{
    c= obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`); // Template literals corrected


}