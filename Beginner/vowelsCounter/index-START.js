/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/





// fn that takes in string and returns # of vowels

// string -> length > 0, capital letters, 5 vowels to consider ("aeiou")
// return # of vowels -> integer, length >= 0, 

// "aeiouy" -> 6
// "vowels" -> 2
// "hmmm" -> 0


function vowelsCounter(text) {
    // store the vowels in an arr
    const vowels = ["a","e",'i','o','u']
    // initialize counter
    let counter = 0
    // loop through string and check if char is in vowels arr
    for (let char of text.toLowerCase()) {
        // if true increase counter
        if (vowels.includes(char)) counter++
    }
    return counter
}



module.exports = vowelsCounter;
