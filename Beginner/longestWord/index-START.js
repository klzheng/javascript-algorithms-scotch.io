/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



// fn that takes in string of words and returns longest words

// string -> length > 0, no numbers, no special chars,

// return string -> 1 word, length = max



// "this is a text example" -> "example"
// "development" -> "development"
// "this is a test with 1 numbers" -> "numbers"




function longestWord(text) {
    // initialize max length number
    let maxLengthNum = 0
    // initialize max length word
    let maxLengthWord = ""
    // split the string into arr of words and loop through arr
    text.split(" ").forEach(word => {
        // check if word length > max length num
        if (word.length > maxLengthNum) {
            // if true, replace max length word with word and max length num with word's len
            maxLengthNum = word.length
            maxLengthWord = word
        }    
    })
    // return max length word
    return maxLengthWord
}


// console.log(longestWord("this is a text example"), "example")
// console.log(longestWord("development"), "development")
// console.log(longestWord("this is a test with 1 numbers"), "numbers")



module.exports = longestWord