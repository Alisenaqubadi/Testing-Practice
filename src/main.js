function capitalize(word){
    if (typeof word !== "string" || word == undefined) {
        throw new Error("A word is needed to enter or it must be string");
    }
    let newWord = word.split("")
    newWord[0] = newWord[0].toUpperCase();
    return newWord.join("")
}

function reverseString(word) {
    if (typeof word !== "string" || word == undefined) {
        throw new Error("A word is needed to enter or it must be string");
    }

    let newWord = word.split("");
    let newArray = [];
    const originalLength = newWord.length; 

    for (let i = 0; i < originalLength; i++) { 
        newArray.push(newWord.pop());
    }

    return newArray.join("");
}

const calculator = {
    add: function(a,b){
        if(typeof a !== "number" && typeof b !== "number"){
            throw Error("input is empty or is not a num")
        }
        return a + b;
    },

    subtract: function(a,b){
       if(typeof a !== "number" && typeof b !== "number"){
            throw Error("input is empty or is not a num")
        }
        return a - b;
    },

    divide: function(a,b){
        if(typeof a !== "number" && typeof b !== "number"){
            throw Error("input is empty or is not a num")
        }
        return a / b;
    },

    multiply: function(a,b){
        if(typeof a !== "number" && typeof b !== "number"){
            throw Error("input is empty or is not a num")
        }
        return a * b;
    }
}

function caesarCipher(plaintext,key){

    if(typeof plaintext !== "string" || plaintext === undefined){
        throw new Error("A word is needed to enter or it must be string")
    }
    if(typeof key !== "number" || key === undefined){
        throw new Error("A word is needed to enter or it must be string")
    }

    const newPlaintext = plaintext.split("");
    let ciphertext = [];
    newPlaintext.forEach(el => {
        ciphertext.push(encrypt(el,key))
    }); 
    return ciphertext.join("");
}

function encrypt(plainLetter,key){
    const lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz"
    let lowerCaseAlphabetArray;
    const upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let upperCaseAlphabetArray;
    let plainLetterIndex;
    
    if (plainLetter === plainLetter.toLowerCase()){
        lowerCaseAlphabetArray = lowerCaseAlphabet.split("");
        plainLetterIndex = lowerCaseAlphabetArray.indexOf(plainLetter)
        if (!lowerCaseAlphabetArray.includes(plainLetter)) return plainLetter
        return lowerCaseAlphabetArray[(key + plainLetterIndex) % 26]
     } else {

        upperCaseAlphabetArray = upperCaseAlphabet.split("")
        plainLetterIndex = upperCaseAlphabetArray.indexOf(plainLetter)
        if (!upperCaseAlphabetArray.includes(plainLetter)) return plainLetter
        return upperCaseAlphabetArray[(key + plainLetterIndex) % 26]
    }

    
}

function analyzeArray(array){
    let min = array[0];
    let max = array[0];
    let sum = 0;
    array.forEach(element => {
        if(element < min) min = element
    });
    
    array.forEach(element => {
        if(element > max) max = element
    });
    
    array.forEach(element => {
        sum = sum + element;
    });

    const average = sum / array.length

    const data = {
        average: average,
        min: min,
        max: max,
        length: array.length
    }

    return data;
}

console.log(analyzeArray([1,8,3,4,2,6]))

export {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
}