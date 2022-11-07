/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/




// fn that takes in two strings, and return true/false if they are anagrams of each other

// stringA, stringB -> length >= 1, not case-sensitive

// return boolean -> true/false, 


// "listen", "silent" -> true
// "map", "amp" -> true
// "word", "bird" -> false




function isAnagram(stringA, stringB) {
    // loop through stringA
    for (let char of stringA) {
        // replace each char of stringA in stringB
        stringB = stringB.replace(char, "")
    }
    // check if stringB === empty string
    return (stringB === "")
}

// console.log(isAnagram("listen","silent"), true )
// console.log(isAnagram("map","amp"), true )
// console.log(isAnagram("word","bird"), false )


module.exports = isAnagram