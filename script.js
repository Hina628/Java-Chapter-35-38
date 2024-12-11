//====================================CHP 35 - 38 ====================================//

// 1. Write a function that displays current date & time in your
// browser.

// Function to display current date and time
function displayCurrentDateTime() {
    // Get current date and time
    let currentDateTime = new Date();

    // Display current date and time in the browser
    document.write("Current Date and Time: " + currentDateTime + "<br><br>");
}

// Call the function to display the current date and time
displayCurrentDateTime();

//================================================================================//

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

// Function to greet the user using their full name
function greetUser(firstName, lastName) {
    // Concatenate first and last name
    let fullName = firstName + " " + lastName;

    // Greet the user using their full name
    document.write("Hello, " + fullName + "! Welcome!<br><br>");
}

// Example usage: calling the function with first and last name
greetUser("Meerub", "Laiba");

//======================================================================================//

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// Function to add two numbers
function addTwoNumbers() {
    // Prompt the user to input two numbers
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    // Calculate the sum of the two numbers
    let sum = num1 + num2;

    // Display the sum of the two numbers
    document.write("The sum of " + num1 + " and " + num2 + " is: " + sum + "<br><br>");
}

// Call the function to add two numbers and display the result
addTwoNumbers();

//===========================================================================================//

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// Function to perform calculator operations
function calculator(num1, num2, operator) {
    let result;

    // Perform operation based on the operator
    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        result = num1 / num2;
    } else {
        result = "Invalid operator!";
    }

    // Display the result
    document.write("Result of " + num1 + " " + operator + " " + num2 + " = " + result + "<br><br>");
}

// Example usage: calling the function with two numbers and an operator
calculator(10, 5, "+");  // Adds the numbers
calculator(10, 5, "-");  // Subtracts the numbers
calculator(10, 5, "*");  // Multiplies the numbers
calculator(10, 5, "/");  // Divides the numbers

//======================================================================================================//

// Function to square the number entered by the user
function squareNumber() {
    // Prompt the user to enter a number
    let num = parseFloat(prompt("Enter a number to square:"));

    // Calculate the square of the number
    let squared = num * num;

    // Display the result
    document.write("The square of " + num + " is: " + squared + "<br><br>");
}

// Call the function to prompt the user and square the number
squareNumber();

//=========================================================================================================//

// 6. Write a function that computes factorial of a number.

// Function to compute the factorial of a number entered by the user
function factorial() {
    // Prompt the user to enter a number
    let num = parseInt(prompt("Enter a number to calculate its factorial:"));

    // Initialize the result to 1 (since factorial of 0 is 1)
    let result = 1;

    // Check if the number is non-negative
    if (num < 0) {
        document.write("Factorial is not defined for negative numbers.<br>");
    } else {
        // Loop to multiply numbers from 1 to num
        for (let i = 1; i <= num; i++) {
            result *= i;  // Multiply result by i for each iteration
        }

        // Display the result
        document.write("The factorial of " + num + " is: " + result + "<br><br>");
    }
}

// Call the function to prompt the user and calculate the factorial
factorial();

//===================================================================================//

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

// Function to display counting from start to end number
function displayCounting() {
    // Prompt the user to enter the start and end numbers
    let startNum = parseInt(prompt("Enter the start number:"));
    let endNum = parseInt(prompt("Enter the end number:"));

    // Loop through from start to end and display each number
    for (let i = startNum; i <= endNum; i++) {
        document.write(i + "<br><br>");
    }
}

// Call the function to prompt the user and display counting
displayCounting();

//=======================================================================================//

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2

// Outer function to calculate the hypotenuse
function calculateHypotenuse() {
    // Prompt the user to input the base and perpendicular
    let base = parseFloat(prompt("Enter the base of the triangle:"));
    let perpendicular = parseFloat(prompt("Enter the perpendicular of the triangle:"));

    // Inner function to calculate the square of a number
    function calculateSquare(num) {
        return num * num;  // Return the square of the number
    }

    // Calculate the square of base and perpendicular using the inner function
    let baseSquare = calculateSquare(base);
    let perpendicularSquare = calculateSquare(perpendicular);

    // Calculate the hypotenuse using the formula
    let hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);

    // Display the result in the browser
    document.write("The hypotenuse of the triangle is: " + hypotenuse + "<br><br>");
}

// Call the function to calculate the hypotenuse
calculateHypotenuse();

//===========================================================================================//

// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// Function to calculate the area of a rectangle
function calculateArea(width, height) {
    // Calculate the area using the formula
    let area = width * height;

    // Display the area
    document.write("The area of the rectangle is: " + area + "<br><br>");
}

// 1. Passing values directly
calculateArea(5, 10); // Example with direct values for width and height

// 2. Passing variables
let rectangleWidth = 7;
let rectangleHeight = 12;
calculateArea(rectangleWidth, rectangleHeight); // Example with variables for width and height


//====================================================================================================/

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?

// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Convert the string to lowercase to make it case-insensitive
    let lowerCaseStr = str.toLowerCase();

    // Reverse the string
    let reversedStr = lowerCaseStr.split("").reverse().join("");

    // Check if the original string is equal to the reversed string
    if (lowerCaseStr === reversedStr) {
        document.write(str + " is a palindrome.<br>");
    } else {
        document.write(str + " is not a palindrome.<br><br>");
    }
}

// Example usage: checking if a word is a palindrome
isPalindrome("madam");   // Should display that it is a palindrome
isPalindrome("hello");   // Should display that it is not a palindrome

//============================================================================================================//

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.

// Function to capitalize the first letter of each word
function capitalizeWords(str) {
    // Split the string into an array of words
    let words = str.split(" ");

    // Capitalize the first letter of each word
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    // Join the words back into a single string
    let capitalizedStr = words.join(" ");

    // Display the result
    document.write("Original string: " + str + "<br>");
    document.write("Capitalized string: " + capitalizedStr + "<br><br>");
}

// Example usage
capitalizeWords("the quick brown fox");

//=================================================================================================//

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.

// Function to find the longest word in a string
function findLongestWord(str) {
    // Split the string into an array of words
    let words = str.split(" ");

    // Initialize a variable to keep track of the longest word
    let longestWord = "";

    // Loop through each word to find the longest one
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];  // Update longestWord if the current word is longer
        }
    }

    // Display the result
    document.write("The longest word in the string is: " + longestWord + "<br><br>");
}

// Example usage
findLongestWord("Web Development Tutorial");

//======================================================================================================//


// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string. 
// Sample arguments : 'JSResourceS.com', 'o'

// Function to count occurrences of a specified letter in a string
function countOccurrences(str, letter) {
    // Initialize a counter variable to keep track of occurrences
    let count = 0;

    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === letter) {  // Check if the current character matches the specified letter
            count++;  // Increment the counter if a match is found
        }
    }

    // Display the result
    document.write("The letter '" + letter + "' appears " + count + " times in the string '" + str + "'.<br><br>");
}

// Example usage
countOccurrences("JSResourceS.com", "o");

//============================================================================================================//

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2


// Function to calculate the circumference of a circle
function calcCircumference(radius) {
    let circumference = 2 * Math.PI * radius;  // Calculate circumference using 2πr
    document.write("The circumference is " + circumference.toFixed(2) + "<br>"); // Display result
}

// Function to calculate the area of a circle
function calcArea(radius) {
    let area = Math.PI * Math.pow(radius, 2);  // Calculate area using πr²
    document.write("The area is " + area.toFixed(2) + "<br>"); // Display result
}

// Example usage
let radius = parseFloat(prompt("Enter the radius of the circle:")); // Prompt user to enter radius
calcCircumference(radius); // Calculate and display circumference
calcArea(radius); // Calculate and display area


//==================================================END==================================================//