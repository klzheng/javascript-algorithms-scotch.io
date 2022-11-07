/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/


// fn takes in a sorted arr of nums, and a value - returns the largest index where the value would be inserted while maintaining sorted arr

// array of nums, val -> sorted

// return index -> number


function whereIBelong(arr, num) {
   // initialize return index
   let index = 0
   // loop through given sorted arr
   if (arr.length === 0) return index
   for (let i = 0; i < arr.length; i++){
      // check if num < item in arr
      // if true, return index
      if (num <= arr[i]) return i
   }
}




module.exports = whereIBelong