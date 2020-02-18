const { getRandomWordSync, getRandomWord } = require('word-maker');

const randomWordHandler = async (withErrors = false, slow = false) => {

    try{
        return await getRandomWord({withErrors, slow});
    }catch(ex){
        return "It shouldn't break anything!";
    }

}

const randomWordHandlerOrdered = async (index, withErrors = false, isFizzBuzz = false, slow = false) => {
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

                word ? word : await getRandomWord({withErrors, slow});

            }else{
                word = await getRandomWord({withErrors, slow});
            }

            resolve({index,word});
            
        }catch(ex){
            resolve({index,word:"It shouldn't break anything!"});
        }
        
    })    

}

const printRandomNamesAsync = (wordCount = 100, withErrors = false, preserveOrder = false, slow = false) =>{
    try{
        if(preserveOrder){
            var hrstart = process.hrtime();
            let funcArray = Array.from(Array(wordCount)).map((_, i) => {
                return randomWordHandlerOrdered(i+1, withErrors, false, slow);         
                
            });
    
            Promise.all(funcArray).then(results => {
                results.map((obj)=>console.log(`${obj.index}:${obj.word}`));
                hrend = process.hrtime(hrstart);
                console.log("ELAPSED TIME : " + hrend[1]/1000000);
            });

        }else{
            Array.from(Array(wordCount)).map((_, i) => {
                console.log(`${i+1}:${randomWordHandler(withErrors, slow)}`);
            });
            
        }
        
    }catch(ex){
        console.error(ex);
    }
}

const printRandomNamesSync = (wordCount = 100, withErrors = false) =>{
    try{
        Array.from(Array(wordCount)).map((_, i) => {
            console.log(`${i+1}:${getRandomWordSync({withErrors})}`)
        });
    }catch(ex){
        console.error(ex);
    }
}

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

            word ? console.log(`${index}:${word}`) : console.log(`${i+1}:${getRandomWordSync({withErrors})}`);
        });
    }catch(ex){
        console.error(ex);
    }
}

const printFizzBuzzAsync = async (wordCount = 100, withErrors = false, slow = false) =>{
    try{
        if(preserveOrder){
            let funcArray = Array.from(Array(wordCount)).map((_, i) => {
                return randomWordHandlerOrdered(i+1, withErrors, true, slow);         
                
            });
    
            Promise.all(funcArray).then(results => {
                results.map((obj)=>console.log(`${obj.index}:${obj.word}`));
            });

        }else{
            Array.from(Array(wordCount)).map(async (_, i) => {
                let wordName;
            let wordNumber = i+1;
            if(wordNumber%3 === 0){
                wordName = "Fizz";
            }
            if(wordNumber%5 === 0){
                wordName = wordName ? `${wordName} Buzz` : "Buzz";
            }

            wordName ? console.log(`${wordNumber}:${wordName}`) : console.log(`${i+1}:${await getRandomWordHandler(withErrors)}`);
            });

        }
    }catch(ex){
        console.error(ex);
    }
}

module.exports = {printRandomNamesAsync, printRandomNamesSync, printFizzBuzzAsync, printFizzBuzzSync};