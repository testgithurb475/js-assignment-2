var username = prompt("Hi, Enter your name")

alert("welcome " + username)

document.write("<h1>Chapter 5 answers:</h1>")

var num1 = 5;
var num2 = 3;
var sum = num1 + num2;
document.write("sum of 3 and 5 is " + sum + "<br>");

var num1 = 5;
var num2 = 3;
var sum = num1 - num2;
document.write("sub of 3 and 5 is " + sum + "<br>");

var num1 = 5;
var num2 = 3;
var sum = num1 * num2;
document.write("multiplication of 3 and 5 is" + sum + "<br>");

var num1 = 5;
var num2 = 3;
var sum = num1 / num2;
document.write("division of 3 and 5 is" + sum + "<br>" + "<br>")

var num;


document.write("Value after variable declaration is: " + num + "<br>");
num = 5;


document.write("Initial value: " + num + "<br>");

num++;


document.write("Value after increment is: " + num + "<br>");

num = num + 7;

document.write("Value after addition is: " + num + "<br>");


num--;

document.write("Value after decrement is: " + num + "<br>");

var remainder = num % 3;


document.write("The remainder is: " + remainder + "<br>" + "<br>");



var ticketPrice = 600;
var totalCost = ticketPrice * 5;

document.write("Cost of one movie ticket is " + ticketPrice + " PKR<br>");
document.write("Cost of buying 5 tickets is " + totalCost + " PKR <br> <br>");

var celsius = 25;
var fahrenheitResult = (celsius * 9 / 5) + 32;

document.write(celsius + "°C is " + fahrenheitResult + "°F<br>");

var fahrenheit = 70;
var celsiusResult = (fahrenheit - 32) * 5 / 9;

document.write(fahrenheit + "°F is " + celsiusResult.toFixed(2) + "°C <br> <br>");

var totalMarks = 500;
var obtainedMarks = 420;

var percentage = (obtainedMarks / totalMarks) * 100;

document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage + "% <br> <br>");

var totalPKR = (10 * 104.80) + (25 * 28);

document.write("Total Currency in PKR: " + totalPKR + "<br> <br>")

var currentYear = 2025;
var birthYear = 2006;


var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("They are either " + age1 + " or " + age2 + " years old.<hr>");



document.write("<h1>Chapter 6 to 9 answers:</h1>")

var a = 10;

document.write("<h3>Result:<br></h3>");
document.write("The value of a is: " + a + "<br><br>");


document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");


document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");


document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br>");

var number = +prompt("Enter a number to show its multiplication table:", "5");


if (!number) {
    number = 5;
}

document.write("<h3>Multiplication Table of " + number + ":</h3>");

for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}