const { getRandomWordSync, getRandomWord } = require('word-maker');
const {logger} = require('../logger');

//Helper method which returns a promise to return index and random word / fizz buzz
const randomWordHandler = async (index, withErrors = false, isFizzBuzz = false, slow = false) => {
    return new Promise(async (resolve, reject) => {
        try{
            let word;
            if(isFizzBuzz){                
                if(index%3 === 0){
                    word = "Fizz";
                }
                if(index%5 === 0){
                    word = word ? `${word} Buzz` : "Buzz";
                }

                word = word ? word : await getRandomWord({withErrors, slow});

            }else{
                word = await getRandomWord({withErrors, slow});
            }

            resolve({index,word});
            
        }catch(ex){
            resolve({index,word:"It shouldn't break anything!"});
        }
        
    })    

}

//Helper method which returns a promise to simulate unordered behaviour for tasks 3 and 4
const randomWordHandlerUnordered = async (index, withErrors = false, isFizzBuzz = false, slow = false) => {
    return new Promise(async (resolve, reject) => {
        try{
            let word;
            if(isFizzBuzz){                
                if(index%3 === 0){
                    word = "Fizz";
                }
                if(index%5 === 0){
                    word = word ? `${word} Buzz` : "Buzz";
                }

                word = word ? word : await getRandomWord({withErrors, slow});

            }else{
                word = await getRandomWord({withErrors, slow});
            }

            logger.log(`${index}:${word}`);

            resolve({index,word});
            
        }catch(ex){
            logger.log(`${index}:It shouldn't break anything!`);
            resolve({index,word:"It shouldn't break anything!"});
        }
        
    })    

}

//Function to handle all operations allowed related to random names algorithm synchronously
const printRandomNamesSync = (wordCount = 100, withErrors = false) =>{
    try{
        Array.from(Array(wordCount)).map((_, i) => {
            try{
                let randomWord = getRandomWordSync({withErrors});
                logger.log(`${i+1}:${randomWord}`);

            }catch(err){
                logger.log(`${i+1}:It shouldn't break anything!`);
            }
            
        });
    }catch(ex){
        console.error(ex);
    }
}

//Function to handle all operations allowed related to fizz buzz algorithm synchronously
const printFizzBuzzSync = async (wordCount = 100, withErrors = false) =>{
    try{
        Array.from(Array(wordCount)).map(async(_, i) => {
            let word;
            let index = i+1;
            if(index%3 === 0){
                word = "Fizz";
            }
            if(index%5 === 0){
                word = word ? `${word} Buzz` : "Buzz";
            }

            word ? logger.log(`${index}:${word}`) : logger.log(`${i+1}:${(()=> {
                try{
                    return getRandomWordSync({withErrors})

                }catch(err){
                    return "It shouldn't break anything!";
                }
            })()
        }`);
        });
    }catch(ex){
        console.error(ex);
    }
}

//Function to handle all operations allowed related to random names algorithm asynchronously
const printRandomNamesAsync = (wordCount = 100, withErrors = false, preserveOrder = false, slow = false) =>{
    
    return new Promise((resolve, reject) => {
        try{
            let funcArray = Array.from(Array(wordCount)).map((_, i) => {
                return preserveOrder ? randomWordHandler(i+1, withErrors, false, slow) : randomWordHandlerUnordered(i+1, withErrors, false, slow);
            });
    
            Promise.all(funcArray).then(results => {
                if(preserveOrder){
                    results.map((obj)=>logger.log(`${obj.index}:${obj.word}`));
                }                
                resolve(true);                    
            }).catch(err => {
                reject(err);
            });

        }catch(ex){
            reject(ex);
        }

    });    
        
    
}

//Function to handle all operations allowed related to fizz buzz algorithm asynchronously
const printFizzBuzzAsync = (wordCount = 100, withErrors = false, preserveOrder = false, slow = false) =>{

    return new Promise((resolve, reject) => {
        try{
            let funcArray = Array.from(Array(wordCount)).map((_, i) => {
                return preserveOrder ? randomWordHandler(i+1, withErrors, true, slow) : randomWordHandlerUnordered(i+1, withErrors, true, slow);
            });
    
            Promise.all(funcArray).then(results => {
                if(preserveOrder){
                    results.map((obj)=>logger.log(`${obj.index}:${obj.word}`));
                }
                resolve(true); 
                
            }).catch((err)=>{
                reject(err);
            });

        }catch(ex){
            reject(ex);
        }

    });
}

module.exports = {printRandomNamesAsync, printRandomNamesSync, printFizzBuzzAsync, printFizzBuzzSync};