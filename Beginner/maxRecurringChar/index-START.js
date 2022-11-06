/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/





// fn takes in string and returns letter that appears the most 

// string -> string.length >= 0, no numbers, no special chars, no capital letters, if multiple answers, return first one

// letter -> string, no numbers, no special chars, length == 1



// "aaaabbc" -> "a"
// "amber" -> "a"
// "linkedin" -> "i"


function maxRecurringChar(text) {
    // initialize empty object
    const letterCounter = {}
    // loop through string
    for (let char of text) {
        // check if letter is in object - if true, increment value of key in object
        if (char in letterCounter) letterCounter[char] ++
        // if letter not in object - set key to letter and value to 0
        else letterCounter[char] = 1
    }
    // find key with largest value in object and return key
    let values = Object.values(letterCounter)
    let max = Math.max(...values)
    return Object.keys(letterCounter).find(key => letterCounter[key] === max)
}


// let arr = "hello"
// for (let letter of arr) console.log(letter)
// for (let index in arr) console.log(index)


module.exports = maxRecurringChar;