/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/




// fn that takes in string and returns boolean depending on if string is palindrome

// string -> no empty string, at least 1 character, no special chars, numbers included

// return boolean -> true, false



// "racecar" -> true
// "leon noel" -> true
// "asd" -> false



function palindromeChecker(text) {
    const reversedText = text.split("").reverse().join("")
    return reversedText === text
}


// function palindromeChecker(text) {
//     // initialize empty string
//     let reversedString = ""
//     // loop through original string in reverse order
//     for (let i = text.length-1; i >= 0; i--) {
//         // add each letter to empty string
//         reversedString += text[i]
//     }
//     // check if the reversed string === original string
//     // return result
//     return reversedString === text
// }



module.exports = palindromeChecker;