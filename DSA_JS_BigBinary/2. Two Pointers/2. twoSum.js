/*
    Problem Statement: Given a sorted array of integers, find if a pair of elements exists that sum up to a given target value.
        Input: 
            Array: [1,2,4,7,11,15]
            Target: 9
        Output: true
*/

const array = [1, 2, 4, 7, 11, 15];
const target = 9;
const target2 = 30;

/*
    ------------ Brute Force Approach --------------
    Check every possible pair of elements in the array to see if their sum is equal to the target using two nested loops.
        
        Time Complexity: O(n^2) - because of two loops.
        Space Complexity: O(1) - no extra space used.
*/

const bruteMethod = (array, target) => {
    const arrayLength = array.length;
    for (let i = 0; i < arrayLength; i++) {
        for (let j = i + 1; j < arrayLength; j++) {
            if (array[i] + array[j] === target) {
                return `Pair is: [${array[i]}, ${array[j]}]`;
            }

        }
    }
    return `no pair found`;
}

console.log(bruteMethod(array, target));
console.log(bruteMethod(array, target2));

/*
    ----------- Two pointer Approach -------------
    Since the array is sorted, use two pointers starting at the beginning and end of the array and move them towards each other.

        Time complexity: O(n) - we only traversed once.
        Space complexity: O(1) - constant space.
 */

const twoPointerApproach = (array, target) => {
    let start = 0, end = array.length - 1;
    while (start < end) {
        if (array[start] + array[end] === target)
            return `Pair is: [${array[start]}, ${array[end]}]`;
        else if (array[start] + array[end] < target)
            start++;
        else
            end--;
    }
    return `no pair found`;
}
console.log(twoPointerApproach(array, target));
console.log(twoPointerApproach(array, target2));