//In JavaScript, everything is an object, including primitive data types like numbers, strings, and booleans. When you create a variable and assign it a value, JavaScript automatically wraps that value in an object to provide additional functionality. This is why we can call methods on primitive values, such as string methods on a string or number methods on a number. For example:


//   console.log("This is a JavaScript example-1.")
//   console.log("This is a JavaScript example-2.")
//   console.log("This is a JavaScript example-3.")
// // output is printed line by line in the console. This is because JavaScript is a synchronous language, meaning it executes code sequentially, one line at a time. Each console.log statement is executed in order, resulting in the output being printed line by line in the console.

//  console.error("Error")
//  console.warn("Warning")

 //alert("This is an alert message!") 

 // This will display a pop-up alert box with the specified message. The user must click "OK" to dismiss the alert and continue interacting with the page, until than html will not respond to any user input. Alert boxes are typically used to display important information or warnings to the user.



//  //every variable is an object in JS.
//  let MyVariable1 = 100     //created a number object 
// //let MyVariable1 = new Number(100)   ----> no diff. in above and below line, both will create a number object in JavaScript. The first line uses a primitive value (100) to assign to MyVariable, while the second line explicitly creates a Number object using the constructor. In JavaScript, when you use a primitive value like a number, it is automatically wrapped in an object when you try to access properties or methods on it. So, both lines will result in MyVariable being treated as a number object when you try to access its properties or methods.
// console.log(MyVariable1);
// console.log(typeof MyVariable1);
 
// var someVariable = MyVariable1  //used to copy the existing value.
// console.log(someVariable); 

// MyVariable1 = 200      // changinging the value of myvariable1.
// console.log(someVariable);
// console.log(MyVariable1);




// let MyVariable2 = "MyString"    //type is string
// //let MyVariable2 = new String("MyString")  ---> it will give object as its tpye bcs string is pre difined object in JS.
// console.log(MyVariable2);
// console.log(typeof MyVariable2);




// let MyVariable3 = true
// console.log(MyVariable3);
// console.log(typeof MyVariable3);




// let MyVariable4 = null
// console.log(MyVariable4);
// console.log(typeof MyVariable4);




// let MyVariable5 = undefined
// console.log(MyVariable5);
// console.log(typeof MyVariable5);

//  //In JavaScript, variables are dynamically typed, which means that a variable can hold values of different types at different times. In this example, we first assign the number 100 to MyVariable, and then we reassign it to the string "MyString". This flexibility allows you to use the same variable for different types of data without needing to declare a specific type.





//functions in JavaScript :-

// function product(a, b) {
//   return a * b; //   this will give NaN if a and b are not numbers, because when any mathematical operation is performed on a string or undefined value in JavaScript.
// }

// console.log(product(5, 10)); // Output: 50
// console.log(product("Hello", "World")); // Output: NaN
// console.log(product(true, true)); // Output: 1 (because true is treated as 1 in mathematical operations)


// function product(a, b) {
//   if (typeof a === "number" && typeof b === "number") { 
//     return a * b;
//   }else {
//     return "NOT POSSIBLE"; 
//   }
// }

// console.log(product(5, 10)); // Output: 50
// console.log(product("Hello", "World")); // Output: "NOT POSSIBLE"
// console.log(product(true, true)); // Output: "NOT POSSIBLE"


// //In JavaScript, we can call a function inside another function. This is known as a nested function or an inner function. The inner function has access to the variables and parameters of the outer function, allowing for more complex and modular code. Here's an example:

// let MyFunction = product

// console.log(product(5, 10)); // Output: 50
// console.log(product("Hello", "World")); // Output: "NOT POSSIBLE"
// console.log(product(true, true)); // Output: "NOT POSSIBLE"




// function sayhello() {
//   console.log("Hello, World!");
// }

// function product(a, b,c){
//   if (typeof a === "number" && typeof b === "number") { 
//     if (typeof c === "function") {
//       c();
//     }
//     return a * b;
//   }else {
//     return "NOT POSSIBLE"; 
//   }
// }

// console.log(product(5, 10)); // Output: 50
// console.log(product("Hello", "World")); // Output: "NOT POSSIBLE"
// console.log(product(true, true)); // Output: "NOT POSSIBLE"


// when any mathematical operation is performed on a string or undefined value in JavaScript, it will give NaN (Not a Number) as output.



// // mordern way of writing scripts  [ES6 and above] :-
// // () is used to define function and {} is used to define the body of the function.

// let myFunction = () => {
//   console.log("myfunction");
// }


// let MyFunction = (a, b) => {
//   if (typeof a === "number" && typeof b === "number") { 
//     if (typeof (c) === "function") {
//       c();
//     }
//     return a * b;
//   }else {
//     return "NOT POSSIBLE"; 
//   }
// }

// console.log(MyFunction(5, 10)); // Output: 50
// console.log(MyFunction(20, 30, () => {
//   console.log("This is a callback function");
// })); // Output: 600 and "This is a callback function"
    




// Arrays:-
// // [] is used to define an array and {} is used to define the body of the function.


// var myArray = []
// console.log(myArray);

//  var myFunction = () => {
// console.log("hello");
// }

//  var myArray2 = [1, 2, 3, 4, "Hello", true, null, undefined, myFunction];  // array hold multiple values of different types.
//  console.log(myArray2);
// console.log(typeof myArray2); // Output: "object" (arrays are a type of object in JavaScript)


// //loops with Arrays in JavaScript :-

// // for loop
// for (let i = 0; i < myArray2.length; i++) {
//   console.log(`Array Element - ${i}: ${myArray2[i]}`);
// }


// var arr1 = [10, 20, 30]
// var copyArray = arr1 
// //shellow Array{at the place of value it copies the reference of the array}

// var copyArray2= [...arr1]
// //deep copy of the array using spread operator, it creates a new array with the same values as arr1, but it does not reference the original array. So, when we modify arr1, it does not affect copyArray2 because they are two separate arrays in memory.

// console.log(arr1);
// console.log(copyArray);
// console.log(copyArray2);

// arr1[0] = 100
// copyArray2[1] = 200

// console.log(arr1);
// console.log(copyArray); // when we copy an array using assignment operator, it creates a reference to the original array. So, when we modify the original array (arr1), it also modifies the copy (copyArray) because both variables point to the same array in memory. This is why both arr1 and copyArray reflect the change when we update arr1[0] to 100.
// console.log(copyArray2); // when we copy an array using the spread operator, it creates a new array with the same values as the original array. So, when we modify the original array (arr1), it does not affect the copy (copyArray2) because they are two separate arrays in memory. This is why copyArray2 does not reflect the change when we update arr1[0] to 100, but it does reflect the change when we update copyArray2[1] to 200.


// //JS objects:-  (key: value pair)

// let person = {
//   name: "John",
//   age: 30,
//   hubbies: ["reading", "Traveling"],
//     address: {
//         city: "New York",
//         country: "USA"
//     },
//     isAdult: true,
// };

// let myJSON = JSON.stringify(person)  // converting JS object to JSON string.
// console.log(myJSON);
// console.log(typeof myJSON); // Output: "string"

// let myJSONobject = JSON.parse(myJSON)  // converting JSON string back to JS object.
// console.log(myJSONobject);
// console.log(typeof myJSONobject); // Output: "object"

// const people = [ [], [], [] ]  // array of objects
// console.log(people);

// console.log(person);
// console.log(person.age);
// console.log(person.hubbies[0]);
// console.log(person.address.city);


// // diff. b/w var, let and const in JavaScript :-

// //for let :- local scoped
// var num = 60
// if (num >= 50) {
//     let output = `${num} is greater than or equal to 50`;
//   console.log(output);
// }else {
//     let output = `${num} is less than 50`;
//   console.log(output);
// }

// console.log(output);//let cannot access outside the block scope.


// //for var :- global scoped
// var num = 60
// if (num >= 50) {
//     var output = `${num} is greater than or equal to 50`;
//   console.log(output);
// }else {
//     var output = `${num} is less than 50`;
//   console.log(output);
// }

// console.log(output);// it can reach outside the block scope, its scope is global and can be accessed anywhere in the code.

// //for const :-
// const myVariable = 100
// // myVariable = 200 // it will give error because we cannot reassign a value to a constant variable.
// console.log(myVariable);


// //both const and let are block scoped.so it will give an error if we try to access the variable outside the block scope.
// var num = 60
// if (num >= 50) {
//     const output = `${num} is greater than or equal to 50`;
//   console.log(output);
// }else {
//     const output = `${num} is less than 50`;
//   console.log(output);
// }

// console.log(output);