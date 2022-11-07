/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/





// fn that takes in a string of >= 2 words, and returns the same string but each word is capitalized (first letter uppercase)

// sentence -> string, length >= 2, separated by spaces

// return sentence -> string, first letter of every word capital


// "hi my name is kevin" -> "Hi My Name Is Kevin"
// "the browser" -> "The Browser"
// "12 !#@" -> "12 !#@"


function capSentence(text) {
  // split text by spaces
  let textArray = text.toLowerCase().split(" ")
  // loop through arr of words and capitalize the first letter of each word
  let capitalized = textArray.map(word => word[0].toUpperCase() + word.slice(1))
  // join words in arr to form string and return string
  return capitalized.join(" ")
}


// console.log(capSentence("hi my name is kevin"), "Hi My Name Is Kevin")
// console.log(capSentence("the browser"), "The Browser")
// console.log(capSentence("12 !#@"), "12 !#@")



module.exports = capSentence