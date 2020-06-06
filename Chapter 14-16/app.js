//Task 1
// var studentName = [];

//Task 2
// studentName.push();

//Task 3
// var stringArray = new Array("Apple", "Mango", "Banana", "Pineappe");


//Task 4
// var numberArray = [234, 56, 422, 11, 8990];


//Task 5
// var booleanArray = [true, false];


//Task 6
// var mixedArray = ["Muhammad Hazique", "UBIT", "BSCS-301", "3.45", "Khatri", "1200"];


//Task 7
// var stored = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
// for (var i = 0; i < stored.length; i++) {
// document.write((i+1)+")"+" " + stored[i]+ "<br>");
// }


//Task 9
// var totalMarks = 500;
// var studName = ["Hazique", "Nabeel", "Zohaib"];
// var score = [390, 399, 421];
// for (var i = 0; i < 3; i++) {
//     percentage = 0;
//     percentage = (score[i] * 100) / totalMarks;
//      document.write("Score Of " + studName[i] + " is " + score[i] + "." + "Percentage : " + percentage + "% <br>");
// }


//Task 10
// document.write("<h1> Color Names </h1>")
// var colorNames = ["Blue", "Red", "Yellow", "Green", "White", "Brown", "Gray"];
// for (var i = 0; i < colorNames.length; i++) {
// document.write(colorNames[i] + ", ");
//}

// document.write("<h1>After Add in the beginning </h1><br>");
//Part a
// var user = window.prompt("Enter which color do you want to add in beginning?","Enter Here");
// colorNames.unshift(user);
// for (var i = 0; i < colorNames.length; i++) {
//     document.write(colorNames[i] + ", ");
// }

// document.write("<h1>After Add in the end </h1><br>");
//part b
// var user = window.prompt("Enter which color do you want to add in the end?","Enter Here");
// colorNames.push(user);
// for (var i = 0; i < colorNames.length; i++) {
//     document.write(colorNames[i] + ", ");
// }

//part c
// document.write("<h1>After Add two more in the beginning </h1><br>");
// colorNames.unshift("violet", "purple")
// for (var i = 0; i < colorNames.length; i++) {
// document.write(colorNames[i] + ", ");
//}


//part d
// document.write("<h1>After delete the first color in the beginning </h1><br>");
// colorNames.shift();
// for (var i = 0; i < colorNames.length; i++) {
//  document.write(colorNames[i] + ", ");
//}


//Part e
// document.write("<h1>After delete the last color in the beginning </h1><br>");
// colorNames.pop();
// for (var i = 0; i < colorNames.length; i++) {
//  document.write(colorNames[i] + ", ");
//}

//part f
// document.write("<h1>updated list </h1><br>");
// var user = window.prompt("Enter at which index do you want to add that color of your choice?","Enter Here");
// colorNames.splice(user, 0, "maroon");
// for (var i = 0; i < colorNames.length; i++) {
//document.write(colorNames[i] + ", ");
//}

//part g
// document.write("<h1>updated list </h1><br>");
// var user = window.prompt("Enter at which index do you want to delete  that color?", "Enter Here");
// var user1 = window.prompt("Enter how many do you want to delete?", "Enter Here");
// colorNames.splice(user, user1);
// for (var i = 0; i < colorNames.length; i++) {
// document.write(colorNames[i] + ", ");
//}


//Task 10
// var studentScore = [320, 230, 480, 120];
// studentScore.sort();
// document.write("Orderd Scores of Students : ");
// for(var i = 0;i<studentScore.length;i++){
//     document.write(studentScore[i] + ", ")
// }


//Task 11
// var citiesList = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// document.write("Cities Name : ");
// for(var i =0 ; i < citiesList.length;i++){
//     document.write(citiesList[i] + ", ");
// }
// document.write("<br>");
// var copyCities = citiesList.slice(2,4);
// document.write("Selected Cities List : ");
// for(var i =0 ; i < copyCities.length;i++){
//     document.write(copyCities[i] + ", ");
// }


//Task 12
var arr = ["This "," is ", " my ", " cat"];
document.write("Array : ");
for (var i = 0; i < arr.length; i++) {
    document.write(arr[i] + ", ");
}
document.write("<br>");
document.write("String : " + arr.join(" "));


//Task 13
var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
document.write("Devices : ");
for (var i = 0; i < devices.length; i++) {
    document.write(devices[i] + ", ");
}
document.write("<br>");
for (var j = 0; j < devices.length; j++) {
    document.write("Out : " + "<br>");
    document.write(devices[j] + "<br>")
}


//Task 14
var devices1 = ["Keyboard", "Mouse", "Printer", "Monitor"];
document.write("Devices : ");
for (var i = 0; i < devices1.length; i++) {
    document.write(devices1[i] + ", ");
}
document.write("<br>");
for (var j = devices1.length-1; j >=0; j--) {
    document.write("Out : " + "<br>");
    document.write(devices1[j] + "<br>")
}



//Task 15
var company = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
window.alert("Apple, Samsung, Motorola, Nokia, Sony, Haier \nSelect Any one");
var input = window.prompt("Enter Your Choice", "Enter Here");
for (var i = 0; i < company.length; i++) {
    if (input === company[i]) {
        document.write("Congratulations! You Select : " + company[i]);
    }
}

