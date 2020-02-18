const {printRandomNamesAsync, printRandomNamesSync, printFizzBuzzAsync, printFizzBuzzSync} = require('./engine');

console.log('It works!');

// YOUR CODE HERE
const wordCount = 100;

//TASK 01
//printRandomNames(wordCount, SYNC, false);

//TASK 02
//printFizzBuzz(wordCount, SYNC, false);

//TASK 03
/* printRandomNames(wordCount, ASYNC, false);
printFizzBuzz(wordCount, ASYNC, false); */

//TASK 04
//printRandomNames(wordCount, ASYNC, true);
//printFizzBuzz(wordCount, ASYNC, true);

//TASK Bonus

printRandomNamesAsync(wordCount, true, true, false);