/*
    Problem Statement: Given an array of integers, find the smallest (minimum) element in the array.

        Example: 
            input: [3, 5, 7, 2, 8, -1, 4, 10, 12];
            output: -1;
*/

/*
    ----------- Brute Force approach ---------
    Iterate through the array and keep track of the minimum element found so far.

        Time complexity: O(n) - we need to traverse all element in the array.
        Space complexity: O(1) - no extra space is required.
*/

const array = [3, 5, 7, 2, 8, -1, 4, 10, 12];

const findMinimum = (arr) => {
    let minimumElement = arr[0];
    arr.forEach(item => {
        if (item < minimumElement) {
            minimumElement = item;
        }
    });
    return minimumElement;
}

console.log(findMinimum(array));

/*
    ------------- JS built-in function ---------------
    Use JS built-in Math.min() function along with the spread operator to find the minimum element.
        ---> simply return Math.min(...array);
*/

console.log(Math.min(...array));

/*
    ----------- Divide and Conqure Approach (recursive) ---------
    Recursively divide the array into two halves and find the minimum in each half. Compare the two minimums to get the overall minimum.

        Time complexity: O(n) - every element is compared once.
        Space complexity: O(logn) - Due to recursive calls.
 */

const findMinRecursively = (arr, start, end) => {
    // if there is only one element in the array.
    if (start === end) {
        return arr[start];
    }
    const mid = Math.floor((start + end) / 2);
    const minLeft = findMinRecursively(arr, 0, mid);
    const minRight = findMinRecursively(arr, mid + 1, end);

    return Math.min(minLeft, minRight);
}

console.log(findMinRecursively(array, 0, array.length - 1));