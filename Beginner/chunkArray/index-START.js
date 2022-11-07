/* 
Given an array and a chunk size, divide the array into many sub-arrays where each sub-array has the specified length. E.g
    chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)
// should return [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]
*/



// fn takes in an array, num - return an arr with subarrays of size num
// array, chunk size (num) - numbers only
// return arr with subarrays - numbers only

// [1,2,3,4,5,6], 2 -> [[1,2],[3,4],[5,6]]]


function chunkArray(array, size) {
    // initialize empty arr
    let chunkedArr = []
    // loop through given arr by incrememnts of size 
    for (let i = 0; i < array.length; i+=size) {
        // push sliced sub arrays into empty arr
        chunkedArr.push(array.slice(i,size+i))
    }
    return chunkedArr
}

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5))



module.exports = chunkArray