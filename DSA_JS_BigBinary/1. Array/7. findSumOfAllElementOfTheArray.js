/*
    Problem Statement: Calculate the sum of all elements in an array.
*/

const array = [1, 2, 3, 4, 5];
const arrayWithNegativeNUmber = [10, -2, 8, 4];
const emptyArray = [];

/*
    ---------- Brute Force Approach --------------
    The brute force method is to loop through the array and accumulate the sum of all the elements.
*/

const bruteSum = (array) => {
    let sum = 0;
    array.forEach(ele => {
        sum += ele;
    });
    return sum;
}

console.log(bruteSum(array));
console.log(bruteSum(arrayWithNegativeNUmber));
console.log(bruteSum(emptyArray));

/*
    -------------- Using buit-in function ------------
    JS provides a built-in method reduce() which can be used to accumulate the sum of array elements in a more concise manner.

        Time complexity: O(n) - since we are iterating over the array once.
        Space complexity: O(1) - no extra space.
*/

const sumUsingReduce = (array) => {
    return array.reduce((sum, ele) => {
        return sum + ele;
    }, 0);
}

console.log(sumUsingReduce(array));
console.log(sumUsingReduce(arrayWithNegativeNUmber));
console.log(sumUsingReduce(emptyArray));