// Challenge
// Receiving a sentence, a word in the sentence and a replacement for that word as arguments, perform a search and replace on the sentence using the arguments provided and return the new sentence. 
// E.g searchReplace("He is Sleeping on the couch", "Sleeping", "sitting") 
// should return "He is Sitting on the couch"



const searchReplace = (string, word, replacementWord) => {
    if (word[0] === word[0].toUpperCase()) {
        replacementWord = replacementWord[0].toUpperCase() + replacementWord.slice(1)
    }
    return string.replace(word, replacementWord)
}

console.log(searchReplace("He is Sleeping on the couch", "Sleeping", "sitting"))