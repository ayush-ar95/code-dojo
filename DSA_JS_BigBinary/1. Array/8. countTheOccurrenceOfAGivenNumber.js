/*
    Problem Statement: Given an array of integers and a target number, count how many times the target number appears in the array.
        example:
            Array: [1,2,3,2,4,2];
            Target: 2
            Output: 3
*/

const array = arr = [1, 2, 3, 2, 4, 2];
const target = 2;

/*
    ------------- Brute Force --------------
    The brute force approach involves iterating through the array and manually counting each occurrence of the target element.

        Time complexity: O(n) - we have to traverse the array once.

        Space complexity: O(1) - no extra space used.
*/

const bruteCount = (array, target) => {
    let count = 0;
    array.forEach(ele => {
        if (ele === target) count++;
    });
    return count;
}

console.log(bruteCount(array, target));

/*
    ------------- Using reduce() method ----------
    We can use JS's built-in reduce() method to count occurences without creating an intermediate array.

        Time complexity: O(n) - we need to traverse the array once.
        Space complexity: O(1) - no extra space used.
*/

const reduceCount = (array, target) => {
    return array.reduce((count, ele) => {
        if (ele === target)
            count++;
        return count;
    }, 0);
}

console.log(reduceCount(array, target));

/*
    ------------- Using Hashmap Approach ------------
    We can use a JS object as a hashmap to count occurrences of all elements in a single pass.

        Time complexity: O(n) - as we need to traverse the arry once.
        Space complexity: O(k) - where k is the number of unique elements in the array.
*/

const hashmapCount = (array, target) => {
    const countMap = {};
    array.forEach(ele => {
        countMap[ele] = (countMap[ele] || 0) + 1;
    });

    return countMap[target] || 0;
}

console.log(hashmapCount(array, target));

/*
    All three approaches offers O(n) time complexity, but they differ in space usage and applicability to different scenarios. The brute force and reduce() methods uses constant space making them more space efficient.

    The Hashmap approach, while using more space, can be benificial if you need to count occurences of multiple elements efficiently in a single pass.
*/