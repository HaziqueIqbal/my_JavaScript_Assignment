//Task 1
// var multi = [,];

//Task 2
// var multi1 = [
//     ["0", "1", "2", "3"],
//     ["1", "0", "1", "2"],
//     ["2", "1", "0", "1"]
// ];
// for (var i = 0; i < 4; i++) {
//     for (var j = 0; j < 4; j++) {
//         document.write(multi1[i][j] + " ");
//     }
//     document.write("<br>");
// }



//Task 3 //numeric counting
// for(var i = 1;i<=10;i++){
//     document.write(i + "<br>")
// }


//Task 4 multiplication
// var table = Number(window.prompt("Enter a number to show its multiplication Table"), "Enter Here");
// var length = Number(window.prompt("Enter length of multiplication Table"), "Enter Here");
// for (var i = 1; i <= length; i++) {
//     var temp = table * i;
//     document.write(table + " x " + i + " = " + temp + "<br>");
// }


//Task 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for(var i =0 ;i<fruits.length;i++){
//     document.write("Element at index " + i + " is " + fruits[i]+"<br>");
// }



//Task 6
document.write("<h2>Counting : </h2>" + "<br>");
for (var i = 1; i <= 15; i++) {
    document.write(i + ", ")
}

document.write("<h2>Reverse counting : </h2>" + "<br>");
for (var i = 10; i > 0; i--) {
    document.write(i + ", ")
}


// document.write("<h2>Even : </h2>" + "<br>");
for (var i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        document.write(i + ", ")
    }
}


// document.write("<h2>Odd : </h2>" + "<br>");
for (var i = 0; i <= 20; i++) {
    if (i % 2 != 0) {
        document.write(i + ", ")
    }
}


// document.write("<h2>Series : </h2>" + "<br>");
for (var i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        document.write(i + "k, ")
    }
}


//Task 7
var temp = 0;
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var user1 = window.prompt("Welcome to ABC Bakery, What do you want to order Sir/ma'mm");
for (var i = 0; i < A.length; i++) {
    if(user1 === A[i]){
        window.alert(A[i]+" is avaliable at index " + i + " in our bakery");
    }
    else{
        temp++
    }
}
if(temp === 5){
    window.alert("We are sorry. " + user1 + " is not avaliable in our bakery.");
}



//Task 8
var store;
var B = [24, 53, 78, 91, 12];
for (var i = 0; i < B.length - 1; i++) {
    if (B[i] > B[i + 1]) {
        store = B[i];       
    }
}
document.write("The Largest number is " + store);


//Task 9
var store;
var B = [24, 53, 78, 91, 12];
for (var i = 0; i < B.length; i++) {
    if (B[i] < B[i + 1]) {
        store = B[i];       
    }
    else if(B[i] < store){
        store = B[i];
    }
}
document.write("The Smallest number is " + store);



//Task 10
var multiple;
for (var i = 1; i <= 20; i++) {
    multiple = 5*i;
    document.write(multiple,", ");
}