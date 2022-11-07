/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function mergeArrays(...arrays) {

    let combinedArray = []
    arrays.forEach(arr => {
        combinedArray = [...combinedArray, ...arr]})

    let mergedArr = new Set(combinedArray)
    return Array.from(mergedArr)
}


console.log(mergeArrays([1,2,3,3,3], [1,4,5,2]))


module.exports = mergeArrays