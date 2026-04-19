/*
    Problem Statement: Reverse the elements of a given array in-place.
*/

const array = [1, 2, 3, 4, 5];
const arrayWithOneElement = [1];
const emptyArray = [];

/*
    ----------- Brute Force approach ------------
    we will create a new array and copy elements from the original array in reverse order.

        Time complexity: O(n) - we are traversing once.
        Space complexity: O(n) - we are creating a new array.
*/

const reverseBruteForce = (array) => {
    let reversedArray = [];
    array.forEach(ele => {
        reversedArray.unshift(ele);
    });

    return reversedArray;
}

console.log(reverseBruteForce(array));
console.log(reverseBruteForce(arrayWithOneElement));
console.log(reverseBruteForce(emptyArray));

/*
    -------------- Optimal Approach (in-place)-----------
    To reverse the array in-place without using any extra space, we can swap the first element with the last, the second with the second-last, and so on.

        Time complexity: O(n) - we are travesing the whole array.
        Space complexity: O(1) - we are only using few variables.
 */

const reverseArray = (array) => {
    let temp;
    let lastIndex = array.length - 1;

    array.forEach((_, index) => {
        if (index < lastIndex) {  // this condition only executes till half the array.
            temp = array[index];
            array[index] = array[lastIndex];
            array[lastIndex] = temp;
            lastIndex--;
        }
    });

    return array;
}

console.log(reverseArray(array));
console.log(reverseArray(arrayWithOneElement));
console.log(reverseArray(emptyArray));
