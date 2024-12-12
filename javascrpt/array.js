// let arr = [1,2,4,5,7]
// // // console.log(arr)
// // // console.log(arr.length)

// // //array is mutable and string is immutable 

// // // console.log(arr[0])
// // // arr[0]=9
// // // console.log(typeof arr)

// // //in js arrays are objects 
// // console.log(arr.toString())
// // console.log(arr.join(" and "))
// // console.log(arr.pop())  //This method is used to remove the last element of an array. For example, the following code will remove the last element ("World") from the array

// // arr.push("sushiii")

// // console.log(arr)                          //This method is used to add an element to the end of an array. For example, the following code will add the element "World" to the end of the array:

// // var myArray = [1, "Hello", [2, 3]];
// // myArray.shift();
// // console.log(myArray); // ["Hello", [2, 3]]

// // //This method is used to remove the first element of an array. For example, the following code will remove the first element (1) from the array bhaii of POP

// // //and unshift PUSH 

// // var myArray = [1, "Hello", [2, 3]];
// // myArray.unshift(0);
// // console.log(myArray); // [0, 1, "Hello", [2, 3]]


// // var myArray = [1, "Hello", [2, 3]];
// // console.log(myArray.slice(1, 2)); // ["Hello"]


// //This method is used to extract a portion of an array. For example, the following code will extract the elements from index 1 to 2 (exclusive)



// // var myArray = [1, "Hello", [2, 3]];
// // myArray.splice(1, 1, "Hello World", [4, 5]);
// // console.log(myArray)


// //This method is used to add or remove elements from an array. For example, the following code will remove the element at index 1 and add the elements "Hello World" and [4, 5] at index 1:

// arr.forEach((value,index,arr)=>{
//     console.log(value,index,arr)
// })


// //his method is a more concise way to iterate through an array. The forEach method takes a callback function as its argument, which is called on each element in the array. For example, the following code will print out each element in the array

// //for of and for in loop 

// var myArray = [1, 2, 3, 4, 5];
// for (var element of myArray) {
//     console.log(element);  //for of

// }

// //for in 
// let obj={
//     a: 1,
//     b:2,
//     c:3
// }

// for(const key in obj){
//     if(obj.hasOWNpropertyCall(obj,key)){
//         const element = obj[key];
//         console.log(element)
//     }
// }

//FACTORIAL 

// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }

// const n = 5; // Example input
// const result = factorial(n);

// console.log(`The factorial of ${n} is ${result}`);
