//   console.log("This is a JavaScript example-1.")
//   console.log("This is a JavaScript example-2.")
//   console.log("This is a JavaScript example-3.")
// // output is printed line by line in the console. This is because JavaScript is a synchronous language, meaning it executes code sequentially, one line at a time. Each console.log statement is executed in order, resulting in the output being printed line by line in the console.

//  console.error("Error")
//  console.warn("Warning")

 //alert("This is an alert message!") 

 // This will display a pop-up alert box with the specified message. The user must click "OK" to dismiss the alert and continue interacting with the page, until than html will not respond to any user input. Alert boxes are typically used to display important information or warnings to the user.

 //every variable is an object in JS.
 let MyVariable1 = 100     //crete a number object 
//let MyVariable1 = new Number(100)   ----> no diff. in above and below line, both will create a number object in JavaScript. The first line uses a primitive value (100) to assign to MyVariable, while the second line explicitly creates a Number object using the constructor. In JavaScript, when you use a primitive value like a number, it is automatically wrapped in an object when you try to access properties or methods on it. So, both lines will result in MyVariable being treated as a number object when you try to access its properties or methods.
 console.log(MyVariable1);
 console.log(typeof MyVariable1);

let MyVariable2 = "MyString"    //type is string
//MyVariable2 = new String("MyString")  ---> it will give object as its tpye bcs string is pre difined object in JS.
console.log(MyVariable2);
console.log(typeof MyVariable2);

let MyVariable3 = true
console.log(MyVariable3);
console.log(typeof MyVariable3);

let MyVariable4 = null
console.log(MyVariable4);
console.log(typeof MyVariable4);

 //In JavaScript, variables are dynamically typed, which means that a variable can hold values of different types at different times. In this example, we first assign the number 100 to MyVariable, and then we reassign it to the string "MyString". This flexibility allows you to use the same variable for different types of data without needing to declare a specific type.







