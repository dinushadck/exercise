Harver JS Exercise
============================

## Get started

Set this repository up by running:

```
npm install
```

Edit your code in `src/index.js` and run `npm start` to run the code.

The tasks in this assessment use the included package `word-maker` which can be found in the directory
`./word-maker`. This directory also contains a *README.md* with details about its usage and API. The module
is already *required* for you in `src/index.js`

## Test

To run test case:

```
npm test
```

## Tasks

Complete these tasks in order. If you can't complete a task, just proceed with the next one.

1. Print numbers from 1 to 100 to the console, but for each number also print a random word using the function `getRandomWordSync`. E.g.

```
1: four
2: firm
3: shape
4: choice
5: coach
6: purple
...
100: buffalo
```

2. Modify your code to be a "Fizz Buzz" program. That is, print the numbers as in the previous step, but
for multiples of three, print "Fizz" (instead of the random word), for multiples of five, print "Buzz" and
for numbers which are both multiples of three and five, print "FizzBuzz".

3. Create a version of steps *1* and *2* using the **asynchronous** function, `getRandomWord`. This function
returns a Promise, which resolves to a random word string.

4. Add error handling to both the synchronous and asynchronous solutions (calling `getRandomWord({ withErrors: true })` will intermitently throw an error instead of returning a random word). When an error is caught, the programm should print "It shouldn't break anything!" instead of the random word, "Fizz", "Buzz" or "FizzBuzz"

5. For:
 * **Node developers**: Instead of printing the console. Write the information to a file in the root of this project.
 * **Frontend developers**, send your result to an HTTP endpoint (since there is no running endpoint, this
part of your solution does not need to actually run)

**Bonus:**
* The numbers should be printed in ascending order.
* Imagine `getRandomWord`'s implementation is slow and takes 500ms to complete (call `getRandomWord({ slow: true })` to emulate this). Can you make your solution run in less than 1000ms with the `slow` option turned on?

## Behaviour

* Running npm start will run the application and will continue to run all the tasks in a sequential manner.
* Running npm test will run the test case related to the bonus task.
* By default the output of the tasks will be written to both console and log file.
  * You may change the output mode by modifying below statement on src/index.js
  
  ```
  //TASK 05 - LOGGER TYPES ALLOWED ('FILE'/'CONSOLE'/'BOTH')
  logger.setLoggerType('BOTH');
  ```
* Bonus task will also print out the time elapsed to execute the task on both console and log file if its enabled.

## Application Structure

* Application start point is implemented on "src/index.js"
* Application logic ("src/engine/index.js") is broken down to 4 common functions to handle the 2 types of algorithms (random names / fizz buzz) and their respective synchronous and asynchrnous behaviour.
* Application output which includes writing output to console and file is implemented on "src/logger/index.js"
* Application constants to increase readability and clarity is implemented on "src/constants/index.js"
* Unit test for bonus task is implemented on "src/tests/test.spec.js"
