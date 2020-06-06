//Task 1
// var a = 10;
// document.write("<h2> Result </h2>");
// document.writeln("The value of a is : " + a);
// document.writeln("<br>------------------------------------")
// document.write("<br>The value of ++a is : 11");
// ++a;
// document.write("<br>Now the value of a is : " + a + "<br>");
// document.write("<br>The value of a++ is : 11");
// a++;
// document.write("<br>Now the value of a is : " + a + "<br>");
// document.write("<br>The value of --a is : 11");
// --a;
// document.write("<br>Now the value of a is : " + a + "<br>");
// document.write("<br>The value of a-- is : 11");
// a--;
// document.write("<br>Now the value of a is : " + a);


//Task 2
// var a = 2, b = 1;
// var c = --a - --b + ++b + b--;
// document.write("Answer Is : "+c);
// document.write("<br>Description Is <br> ------------------");
// document.write("<br>--a is 1");
// document.write("<br>--a - --b is also 1");
// document.write("<br>--a - --b + ++b is 2");
// document.write("<br>--a - --b + ++b + b-- is 3");


//Task 3
// var greet = window.prompt("What is Your Name?", "Enter Here");
// document.write("<h1>Welcome " + greet + "!</h1>");


//Task 4;
//Not Given....


//Task 5
// var input = Number(window.prompt("Enter Number!", "Enter Here"));
// if (input > 0) {
//     for (var i = 1; i < 11; i++) {
//         var table = input * i;
//         document.write(input + " x " + i + " = " + table + "<br>");
//     }
// }
// else {
//     for (var i = 1; i < 11; i++) {
//         var table = 5 * i;
//         document.write("5 x " + i + " = " + table + "<br>");
//     }
// }


//Task 6
var sub1 = window.prompt("Enter Subject 1 Name", "Enter Here!");
var sub2 = window.prompt("Enter Subject 2 Name", "Enter Here!");
var sub3 = window.prompt("Enter Subject 3 Name", "Enter Here!");
var totalMarks = 100;
var mark1 = Number(window.prompt("Enter Marks Of " + sub1, "Enter Here!"));
var mark2 = Number(window.prompt("Enter Marks Of " + sub2, "Enter Here!"));
var mark3 = Number(window.prompt("Enter Marks Of " + sub3, "Enter Here!"));
document.write("<h2> Subject &emsp; Total Marks &emsp;Obtained Marks &emsp; Percentage </h2>");
var total1 = (mark1 * 100)/totalMarks; 
var total2 = (mark2 * 100)/totalMarks; 
var total3 = (mark3 * 100)/totalMarks; 
document.write(sub1 + "&emsp;&emsp;&emsp;&emsp;&emsp;"+totalMarks+ "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+ mark1+ "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" + total1 + "% <br>");
document.write(sub2 + "&emsp;&emsp;&emsp;&emsp;&emsp;"+totalMarks+ "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+ mark2+ "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" + total2 + "% <br>");
document.write(sub3 + "&emsp;&emsp;&emsp;&emsp;&emsp;"+totalMarks+ "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+ mark3+ "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" + total3 + "% <br>");
document.write("<b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+ "300" + "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" + Number(mark1+mark2+mark3) + "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" + Number((total1+total2+total3)/3).toFixed(2)+"% </b>");


