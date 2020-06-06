//Task 1
var city = window.prompt("Enter City");
if(city === "karachi"){
    document.write("Welcome to the city of lights");
}
else{
    document.write("Welcome to "+ city);
}


//Task 2
var gender = window.prompt("Enter Gender!");
if(gender === "male"){
    document.write("Good Morning Sir");
}
else if(gender === "female"){
    document.write("Good Morning Mamm");
}
else{
    document.write("Good Morning Dear");
}

//Task 3
var color = window.prompt("Input traffic Color!");
if(color === "red"){
    document.write("Must Stop!");
}
else if(color ==="yellow"){
    document.write("Ready to move");
}
else if(color === "green"){
    document.write("Move now");
}
else{
    document.write("No other color, just move");
}

//Task 4
var rem_fuel = Number(window.prompt("Enter Fuel!"));
if(rem_fuel < 0.25){
    document.write("Please refill the fuel in your car.");
}
else{
    document.write("go go go");
}


//Task 5
//part a
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}// it works fine..

//part b
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}  // it not works because of the post increment..

//part c
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}// it not works because of the post increment..
if (c === 13) {
    alert("condition 2 is true");
}// it works fine.. because c is now 13
if (++c < 14) {
    alert("condition 3 is true");
} // it dose not work because c is now 14 not less than.
if (c === 14) {
    alert("condition 4 is true");
}  // it works fine.. because c is 14


//part d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}// it works fine.. because both are equal..


//part e
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}// it shows true because if works only for true ...


//part f
if ("car" < "cat") {
    alert("car is smaller than cat");
}  // it works because of letter precedence...


//Task 6
var totalMarks = 300;
var obtainedMarks = Number(window.prompt("Enter Your Marks", "Enter Here"));
var percentage = ((obtainedMarks * 100) / totalMarks).toFixed();
if (percentage >= 80) {
    document.write("Total Marks : " + totalMarks + "<br>");
    document.write("Marks Obtained : " + obtainedMarks + "<br>");
    document.write("Percentage : " + percentage + "<br>");
    document.write("Grade : A-one"+ "<br>");
    document.write("Remarks : Excellent" + "<br>");
}
else if(percentage >= 70){
    document.write("Total Marks : " + totalMarks + "<br>");
    document.write("Marks Obtained : " + obtainedMarks + "<br>");
    document.write("Percentage : " + percentage + "<br>");
    document.write("Grade : A"+ "<br>");
    document.write("Remarks : Good" + "<br>");
}
else if(percentage >= 60){
    document.write("Total Marks : " + totalMarks + "<br>");
    document.write("Marks Obtained : " + obtainedMarks + "<br>");
    document.write("Percentage : " + percentage + "<br>");
    document.write("Grade : B"+ "<br>");
    document.write("Remarks : You need to improve" + "<br>");
}
else{
    document.write("Total Marks : " + totalMarks + "<br>");
    document.write("Marks Obtained : " + obtainedMarks + "<br>");
    document.write("Percentage : " + percentage + "<br>");
    document.write("Grade : Fail"+ "<br>");
    document.write("Remarks : Sorry" + "<br>");
}

//Task 7
var secretNumer = 6;
var guess = Number(window.prompt("Enter Number between 1-10","Try your luck"));
if(guess === secretNumer){
    document.write("Bingo!");
}
else if((guess+1 === secretNumer) || (guess-1 === secretNumer)){
    document.write("Close enough to the correct answer");
}
else{
    document.write("Try Again!");
}

//Task 8
var number = Number(window.prompt("Enter Number to check"));
if(number % 3 === 0){
    document.write("Yes it is divisible by 3");
}

// Task 9
var number = Number(window.prompt("Enter Number to check"));
if(number % 2 === 0){
    document.write("Number is Even");
}
else if(number % 3 === 0){
    document.write("Number is Odd");
}



//Task 10
var temperature = Number(window.prompt("Enter Temperature"), "Enter Here");
if (temperature > 40) {
    document.write("It is too hot outside.");
}
else if (temperature > 30) {
    document.write("The Weather today is Normal.");
}
else if (temperature > 20) {
    document.write("Today’s Weather is cool.");
}
else if (temperature > 10) {
    document.write("OMG! Today’s weather is so Cool");
}



//Task 11
var calculation;
var firstNumber = Number(window.prompt("Enter First Number!", "Enter Here!"));
var secondNumber = Number(window.prompt("Enter Second Number!", "Enter Here!"));
var operation = (window.prompt("Enter Opertion!", "Enter Here!"));
if (operation === "+") {
    calculation = firstNumber + secondNumber;
    document.write("<h1>" + firstNumber + " + " + secondNumber + " = " + calculation + "</h1>");
}
else if (operation === "-") {
    calculation = firstNumber - secondNumber;
    document.write("<h1>" + firstNumber + " - " + secondNumber + " = " + calculation + "</h1>");
}
else if (operation === "*") {
    calculation = firstNumber * secondNumber;
    document.write("<h1>" + firstNumber + " x " + secondNumber + " = " + calculation + "</h1>");
}
else if (operation === "/") {
    calculation = firstNumber / secondNumber;
    document.write("<h1>" + firstNumber + " / " + secondNumber + " = " + calculation + "</h1>");
}
else if (operation === "%") {
    calculation = firstNumber % secondNumber;
    document.write("<h1>" + firstNumber + " % " + secondNumber + " = " + calculation + "</h1>");
}
else {
    document.write("<h1>" + "Invalid Operation" + "</h1>");
}