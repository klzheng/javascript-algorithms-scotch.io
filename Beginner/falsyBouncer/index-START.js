/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/


// fn filters all falsey values from array

// array - num, strings, booleans, etc, at least 1 item
// return arr - nums



function falsyBouncer(array) {
    array = array.filter(item => {
        if (item) return item
    })
    return array
}


module.exports = falsyBouncer