/*
    Problem Statement: Write a function that removes duplicates from an array and returns a new array with unique elements only.
        example: 
            input: [1,2,3,4]
            output: [1,2,3,4]

            input: [1,2,2,3,4,4,5]
            output: [1,2,3,4,5]

            input: []
            output:[]
*/

const uniqueArray = [1, 2, 3, 4, 5];
const duplicateArray = [1, 2, 3, 3, 4, 4, 5];
const emptyArray = [];

/*
    ------------ Approach -------------
    1. Create an empty array to store unique elements.
    2. Iterate through the input array.
    3. check if the current element is already in the unique array.
    4. If it is not, add it to the unique array.
    5. Return the unique array.

        Time complexity: O(n2) - we need to traverse all elements atleast once.
        Space complexity: O(n) - new array size
*/

const removeDuplicate = (array) => {
    let newArray = [];
    array.forEach(element => {
        if (!newArray.includes(element)) {
            newArray.push(element);
        }
    });
    return newArray;
}

console.log(removeDuplicate(uniqueArray));
console.log(removeDuplicate(duplicateArray));
console.log(removeDuplicate(emptyArray));

/*
    --------------- Using JS Set datastructure -----------
    * we use set object to store a unique elements.
    * The set object is a built-in JS data structure that stores unique values of any type.
    * When we create a new set from an array, it automatically removes all duplicate elements.
    
        Time complexity: O(n) - we iterate through the array.
        Space complexity: O(n) - we need to store the uinque elements in a new array.
*/

const removeDuplicateUsingSet = (array) => {
    return [...new Set(array)];
}

console.log(removeDuplicateUsingSet(uniqueArray));
console.log(removeDuplicateUsingSet(duplicateArray));
console.log(removeDuplicateUsingSet(emptyArray));