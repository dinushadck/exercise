const {printRandomNamesAsync, printRandomNamesSync, printFizzBuzzAsync, printFizzBuzzSync} = require('./engine');
const {WITH_ERRORS, WITHOUT_ERRORS, IGNORE_ORDER, PRESERVE_ORDER, SLOW_ENABLED, SLOW_DISABLED} = require('./constants');
const {logger} = require('./logger');

console.log('It works!');

// YOUR CODE HERE
const wordCount = 100;

//TASK 05 - LOGGER TYPES ALLOWED ('FILE'/'CONSOLE'/'BOTH')
logger.setLoggerType('BOTH');

//TASK 01
const task01 = () => {

    logger.log('=========== TASK 01 ===========\n');
    logger.log('[PRINT RANDOM NAMES]\n');    
    printRandomNamesSync(wordCount, WITHOUT_ERRORS);    

    logger.log('\n******** TASK 01 - COMPLETED ********\n');
    
}

//TASK 02
const task02 = () => {

    logger.log('=========== TASK 02 ===========\n');
    logger.log('[PRINT FIZZ BUZZ]\n'); 
    printFizzBuzzSync(wordCount, WITHOUT_ERRORS);

    logger.log('\n******** TASK 02 - COMPLETED ********\n');

}

//TASK 03
const task03 = () => {
    return new Promise(async (resolve, reject) => {

        logger.log('=========== TASK 03 ===========\n');
        logger.log('[PRINT RANDOM NAMES ASYNC]\n');
        await printRandomNamesAsync(wordCount, WITHOUT_ERRORS, IGNORE_ORDER, SLOW_DISABLED);
        logger.log('\n[PRINT FIZZ BUZZ ASYNC]\n');
        await printFizzBuzzAsync(wordCount, WITHOUT_ERRORS, IGNORE_ORDER, SLOW_DISABLED);
        logger.log('\n******** TASK 03 - COMPLETED ********\n');

        resolve();

    })
}

//TASK 04
const task04 = () => {
    return new Promise(async (resolve, reject) => {

        logger.log('=========== TASK 04 ===========\n');

        logger.log('[PRINT RANDOM NAMES WITH ERRORS]\n');
        printRandomNamesSync(wordCount, WITH_ERRORS);

        logger.log('\n[PRINT FIZZ BUZZ WITH ERRORS]\n');
        printFizzBuzzSync(wordCount, WITH_ERRORS);

        logger.log('\n[PRINT RANDOM NAMES ASYNC WITH ERRORS]\n');
        await printRandomNamesAsync(wordCount, WITH_ERRORS, IGNORE_ORDER, SLOW_DISABLED);

        logger.log('\n[PRINT FIZZ BUZZ ASYNC WITH ERRORS]\n');
        await printFizzBuzzAsync(wordCount, WITH_ERRORS, IGNORE_ORDER, SLOW_DISABLED);

        logger.log('\n******** TASK 04 - COMPLETED ********\n');

        resolve();

    })
}

//BONUS TASK
const bonusTask = () => {
    return new Promise(async (resolve, reject) => {

        logger.log('=========== BONUS TASK ===========\n');

        logger.log('\n[PRINT FIZZ BUZZ ASYNC WITH ERRORS PRESERVING ORDER]\n');
        await printFizzBuzzAsync(wordCount, WITH_ERRORS, PRESERVE_ORDER, SLOW_DISABLED);

        logger.log('\n[PRINT FIZZ BUZZ ASYNC WITH ERRORS PRESERVING ORDER WITH SLOW]\n');
        let time = process.hrtime();
        await printFizzBuzzAsync(wordCount, WITH_ERRORS, PRESERVE_ORDER, SLOW_ENABLED);
        const timeDiff = process.hrtime(time);
        logger.log(`\n[ Time Elapsed : ${(timeDiff[0] * 1e9 + timeDiff[1])/1000000} ms ]\n`);

        logger.log('\n******** BONUS TASK - COMPLETED ********\n');

        resolve();

    })
}

const runAllTasks = async () => {

    task01();
    task02();
    await task03();
    await task04();
    //Task 05 is already implemented and you can change the log output type by calling logger.setLoggerType(loggerType) - loggerType can be "CONSOLE / FILE / BOTH"
    await bonusTask();

    logger.log('\n******** ALL TASKS - COMPLETED ********\n');
}

runAllTasks();

//TASK 01
//printRandomNamesSync(wordCount, WITHOUT_ERRORS);

//TASK 02
//printFizzBuzzSync(wordCount, WITHOUT_ERRORS);

//TASK 03
//printRandomNamesAsync(wordCount, WITHOUT_ERRORS, IGNORE_ORDER, SLOW_DISABLED);
//printFizzBuzzAsync(wordCount, WITHOUT_ERRORS, IGNORE_ORDER, SLOW_DISABLED);

//TASK 04
//printRandomNamesSync(wordCount, WITH_ERRORS);
//printFizzBuzzSync(wordCount, WITH_ERRORS);
//printRandomNamesAsync(wordCount, WITH_ERRORS, IGNORE_ORDER, SLOW_DISABLED);
//printFizzBuzzAsync(wordCount, WITH_ERRORS, IGNORE_ORDER, SLOW_DISABLED);

//TASK 05
//LOGGER SUPPORTS CONSOLE / FILE / BOTH OUTPUT

//TASK Bonus

//printFizzBuzzAsync(wordCount, WITH_ERRORS, PRESERVE_ORDER, SLOW_DISABLED);

//printFizzBuzzAsync(wordCount, WITH_ERRORS, PRESERVE_ORDER, SLOW_ENABLED);
