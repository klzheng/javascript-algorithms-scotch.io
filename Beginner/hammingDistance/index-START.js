/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/



// fn takes in 2 equal length strings and returns the number of character differences between the 2 strings

// string, string -> same length, will contain uppercase/lowercase, numbers, special characters included

// return num -> number of differences between the 2 strings



// string, strong -> 1
// Apple, apple -> 1
// "", "" -> 0




function hammingDistance(stringA, stringB) {
    // initialize hummingDistance 
    let hummingDistance = 0
    // loop through stringA
    for (let i = 0; i < stringA.length; i++) {
        // check if char === char in same index of stringB
        // if false increment counter 
        if (stringA[i] !== stringB[i]) hummingDistance++
    }
    return hummingDistance
}



module.exports = hammingDistance