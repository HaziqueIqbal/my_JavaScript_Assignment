//Task 1
var age = 15;
// window.alert("Iam " + age + " year old");

//Task 2
var N = 14;
// window.alert("You have visited this site " + N + " times");

//Task 3
var birthYear = 2001;
// document.write("My birth year is " + birthYear + "<br> Data type of my declared variable is number");

//Task 4
var visitorName = window.prompt("Enter Your Name", "Enter Here");
var productName = window.prompt("Enter Product Name", "Enter Here");
var quantity = window.prompt("Enter Quantity", "Enter Here");

document.write("<b>" + visitorName + "</b>" + " ordered " + "<b>" + quantity + " " + ((quantity > 1) ? productName + "(s)" : productName) + "</b> on XYZ Clothing store");
