//Task 1
var a = 3;
var b = 5;
var c = parseInt(a + b);
// document.write("Sum of " + a + " and " + b + " is " + c);

//Task 2
//subtraction
var d = a - b;
// document.write("<br> Subtraction of " + a + " and " + b + " is " + d);
//multiplication
var e = a * b;
// document.write("<br> Multiplication of " + a + " and " + b + " is " + e);
//division
var f = a / b;
// document.write("<br> Division of " + a + " and " + b + " is " + f);


//Task 3
// var empty;
// document.write("Value after variable declaration is: " + empty);
// var num = 5;
// document.write("<br> Initial value : " +  num);
// num++;
// document.write("<br> Value after increment is : " + num);
// num += 7;
// document.write("<br> Value after addition is : " + num);
// num--;
// document.write("<br> Value after decrement is : " + num);
// num %= 3;
// document.write("<br> The remainder is : " + num);

//Task 4
// var ticket = 600;
// var input = window.prompt("Enter Qunatity :" ,"Enter Here");
// if(input > 0){
//     ticket *= input;
//     document.write("Total cost to buy " + input + " tickets to a movie is " + ticket + " PKR");
// }
// else{
//     document.write("Thankyou..");
// }


//Task 5
// for (var i = 1; i < 11; i++) {
//     var store = i * 4;
//     document.write("4 x " + i + " = " + store + "<br>");
// }

//Task 6
// var celcius = window.prompt("Enter temperature in Celcius!", "Enter Here!");
// var fahrenheit = window.prompt("Enter temperature in Fahrenheit!", "Enter Here!");
// cel1 = (fahrenheit - 32) * (5 / 9);
// fah1 = (celcius * (9 / 5)) + 32;
// document.write(celcius + "°C is " + cel1.toFixed(2) + "°F <br>")
// document.write(fahrenheit + "°F is " + fah1.toFixed(2) + "°C")

//Task 7
// document.write("<h2>Shopping Cart</h2>");

// var price_item1 = 650;
// var price_item2 = 100;
// var shipping = 100;
// document.write("Price of Item 1 is " + price_item1 + " PKR" + "<br>");
// var qua_item1 = window.prompt("Enter Quantity of Item 1!", "Enter Here");
// document.write("Quantity of Item 1 is " + qua_item1+ "<br>");
// document.write("Price of Item 2 is " + price_item2 + " PKR"+ "<br>");
// var qua_item2 = window.prompt("Enter Quantity of Item 2!", "Enter Here");
// document.write("Quantity of Item 2 is " + qua_item2+ "<br>");
// document.write("Shipping charge is " + shipping + " PKR <br>");
// var item1_total = price_item1 * qua_item1;
// var item2_total = price_item2 * qua_item2;
// var total = item1_total + item2_total + shipping;
// document.write("Total cost of your Order is " + total + " PKR");



//Task 8
// var total_marks = 980;
// var obtained_marks = 804;
// document.write("<h2>Marks Sheet</h2>");
// var total = Number(obtained_marks * 100)/ total_marks;
// document.write("Total marks : " + total_marks +"<br>");
// document.write("Obtained marks : " + obtained_marks +"<br>");
// document.write("Percentage is : " + total.toFixed(2) + "%");


//Task 9 // current values of dollar and riyal...
// var dollar = 10;
// var riyal = 25;
// var value_dollar = 163.50;
// var  value_riyal = 43.54;
// var total = (dollar *value_dollar) + (riyal *value_riyal);
// document.write("Total Currency in PKR : " + total.toFixed());



//Task 10
// var someNumber = 25;
// someNumber += 2;
// document.write("Add result : " + someNumber);
// someNumber *= 10;
// document.write("<br>Multiply result : " + someNumber);
// someNumber /= 2;
// document.write("<br>Divide result : " + someNumber);


//Task 11
// var currentYear = 2020;
// var thierYear = window.prompt("Enter Your Year To find your age!", "Enter Here");
// var age = currentYear - thierYear;
// document.write("<h2>Age Calculator</h2>");
// document.write("Your Age Is : " + age);



//Task 12
// document.write("<h2>The Geometrizer</h2>");
// var radius = 20;
// document.write("Radius of a circle is " + radius);
// var cir = 2 * radius * Math.PI;
// document.write("<br>The circumference is " + cir.toFixed(2));
// var area = Math.PI * Math.pow(radius,2);
// document.write("<br>The Area is " + area.toFixed(2));


//Task 13
document.write("<h2> The Lifetime Supply Calculator</h2>");
var favourite = window.prompt("Enter Your Favourite Snacks!", "Enter Here");
var currentAge = window.prompt("Enter Your Age!", "Enter Here");
var estdAge = window.prompt("Enter Your Estimated Age!", "Enter Here");
var amountOfItem = window.prompt("Enter Your Requirment per day!", "Enter Here");
var cal = Number((estdAge - currentAge) * amountOfItem);
document.write("You will need " + cal + " " + favourite + "to last you until the ripe old age of " + estdAge);