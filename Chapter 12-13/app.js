//Task 1
var check = window.prompt("Enter String");
for (var i = 0; i < check.length; i++) {
    if (check.charAt(i) == (check.charAt(i).toUpperCase())) {
        document.write("Character is uppercase");
        break;
    }
}
if (check === check.toLowerCase()) {
    document.write("Character is lowercase");
}


//Task 2
var integer1 = window.prompt("Enter Integer 1", "Enter Here");
var integer2 = window.prompt("Enter Integer 2", "Enter Here");
if (integer1 > integer2) {
    document.write(integer1 + " is greater than " + integer2);
}
else if (integer1 === integer2) {
    document.write("Both are equals");
}
else {
    document.write(integer1 + " is smaller than " + integer2);
}


//Task 3
var number = Number(window.prompt("Enter Number to check!", "Enter Here"));
if(number > 0){
    document.write("Number is Positive");
}
else if(number === 0){
    document.write("Number is equal to 0");
}
else{
    document.write("Number is Negative");
}


//Task 4
var character = window.prompt("Enter Character to Check wheater it is VOWEL or NOT!", "Enter Here");
if (character === "A" || character === "a") {
    document.write("Character is Vowel.");
}
else if (character === "E" || character === "e") {
    document.write("Character is Vowel.");
}
else if (character === "I" || character === "i") {
    document.write("Character is Vowel.");
}
else if (character === "O" || character === "o") {
    document.write("Character is Vowel.");
}
else if (character === "U" || character === "u") {
    document.write("Character is Vowel.");
}
else {
    document.write("Character is Not Vowel.");
}


//Task 5
var password = "saylani";
var user = window.prompt("Enter Password");
if(user === ""){
    window.alert("Please Enter Password!");
}
else if(user === password){
    window.alert("Correct! The password you entered matches the original password");
}
else{
    window.alert("Incorrect Password");
}


//Task 6 fixed
var greeting ;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    document.write(greeting);
}
else {
    greeting = "Good evening";
    document.write(greeting);
}   


//Task 7
var time = Number(window.prompt("Enter Time", "Enter Here"));
if(time >= 0000 && time < 1200){
    window.alert("Good Morning!");
}
else if(time >= 1200 && time < 1700){
    window.alert("Good Afternoon!");
}
else if(time >= 1700 && time < 2100){
    window.alert("Good Eveining!");
}
else if(time >= 2100 && time < 2359){
    window.alert("Good Night!");
}
else{
        window.alert("Invalid!");
}