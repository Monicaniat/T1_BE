// 1. Convert the string "123" to a number and add 7. (0.5 Grade)
// • Output Example: 130

// var x = "123";
// let result = Number(x) + 7;
// console.log(result);

// 2. Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade)
// • Input Example: 0
// • Output Example: "Invalid"

// var input = 0;
// if (input) {
//     console.log("valid");
// } else {
//     console.log("Invalid");
// }


// 3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade)
// • Output Example:1, 3, 5, 7, 9

// function printOddNumbers() {
// let output = [];
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//     continue;
//     }
//     output.push(i);
// }
//  console.log(output.join(", "));
// }
// printOddNumbers();

// 4. Create an array of numbers and return only the even numbers using filter method. (0.5 Grade)
// • Input Example: [1, 2, 3, 4, 5]
// • Output Example: [2,4]

// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter(function(number) {
// return number % 2 === 0;
// });
// console.log(evenNumbers);

// 5. Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade)
// • Input Example: [1, 2, 3], [4, 5, 6]
// • Output Example: [1, 2, 3, 4, 5, 6]

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// const mergedArray = [...array1, ...array2];
// console.log(mergedArray);

// 6. Use a switch statement to return the day of the week given a number (1 = Sunday ...., 7 = Saturday). (0.5 Grade)
// • Input Example: 2
// • Output Example: “Monday”

// function getDayOfWeek(dayNumber) {
//     let dayName;

//     switch (dayNumber) {
//         case 1:
//             dayName = "Sunday";
//             break;
//         case 2:
//             dayName = "Monday";
//             break;
//         case 3:
//             dayName = "Tuesday";
//             break;
//         case 4:
//             dayName = "Wednesday";
//             break;
//         case 5:
//             dayName = "Thursday";
//             break;
//         case 6:
//             dayName = "Friday";
//             break;
//         case 7:
//             dayName = "Saturday";
//             break;
//         default:
//             dayName = "Invalid input: Please enter a number between 1 and 7.";
//     }

//     return dayName;
// }

// const result = getDayOfWeek(2);
// console.log(result);


// 7. Create an array of strings and return their lengths using map method (0.5 Grade)
// • Input: ["a", "ab", "abc"]
// • Output Example: [1, 2, 3]

// const stringsArray = ["a", "ab", "abc"];
// const lengthsArray = stringsArray.map(str => str.length);
// console.log(lengthsArray);

// 8. Write a function that checks if a number is divisible by 3 and 5. (0.5 Grade)
// • Input Example: 15
// • Output Example: “Divisible by both”

// let n = 15;
// if (n%3 ===0 && n%5 === 0){
//     console.log("Divisible by Both");
// }
// else{
//     console.log("Not Divisible by Both");
// }

// 9. Write a function using arrow syntax to return the square of a number (0.5 Grade)
// • Input Example: 5
// • Output Example: 25

// const square = n  => {
// return n**2
// }
//     console.log(square(5));

// 10.Write a function that destructures an object to extract values and returns a formatted string. (0.5 Grade)
// • Input Example: const person = {name: 'John', age: 25}
// • Output Example: 'John is 25 years old'

// function getPersonDescription({ name, age }) {
//     return `${name} is ${age} years old`;
// }
// const person = {
//     name: 'John',
//     age: 25,
// };
// const description = getPersonDescription(person);
// console.log(description);

// 11.Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade)
// • Input Example: 1, 2, 3, 4, 5
// • Output Example: 15

// const array = [1, 2, 3, 4, 5];
// const initialValue = 0;
// const sumWithInitial = array.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     initialValue
// );

// console.log(sumWithInitial);

// 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade)
// • Output Example: “Success”

// function createDelayedPromise(delayMssg, message) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//                         resolve(message);
//         }, delayMssg);
//     });
// }
// const delayDuration = 3000;
// const successMessage = 'Success';
// const delayedPromise = createDelayedPromise(delayDuration, successMessage);

// delayedPromise.then((result) => {
//     console.log(result); 
// });


// 13. Write a function to find the largest number in an array. (0.5 Grade)
// • Input Example: [1, 3, 7, 2, 4]
// • Output Example: 7

// function findLargestNumber(arr) {
//     const largest = Math.max(...arr);
//     return largest;
// }
// const numbers = [1, 3, 7, 2, 4];
// const result = findLargestNumber(numbers);
// console.log(result);

// 14. Write a function that takes an object and returns an array containing only its keys. (0.5 Grade)
// • Input Example: name: "John", age: 30}
// • Output Example: ["name", "age"]

// function getObjectKeys(obj) {
//     const keysArray = Object.keys(obj);
//     return keysArray;
// }
// const person = {
//     name: "John",
//     age: 30,
// };
// const result = getObjectKeys(person);
// console.log(result);



// 15. Write a function that splits a string into an array of words based on spaces. (0.5 Grade)
// • Input: "The quick brown fox"
// • Output: ["The", "quick", "brown", "fox"]

// function splitIntoWords(inputString) {
//     const wordsArray = inputString.split(" ");
//     return wordsArray;
// }

// const inputString = "The quick brown fox";
// const result = splitIntoWords(inputString);
// console.log(result);

