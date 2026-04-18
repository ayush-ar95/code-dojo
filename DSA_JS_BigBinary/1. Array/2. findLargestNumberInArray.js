/*
Problem Statement: Given an array of integers, find the greatest (maximum) element in the array.

Example: 
    input: [3,5,7,2,8,-1,4,10,12];
    output: 12;
*/

/* 
    ------- Brute Force approach --------
    Iterate through the array and keep track of the maximum element found so far.

        Time complexity: O(n) - as we need to traverse all the element in the array.

        Space complexity: O(1) - no extra space needed.
*/

const findMax = (arr) => {
    let maxElement = arr[0];
    arr.forEach(item => {
        if (item > maxElement) {
            maxElement = item;
        }
    });
    return maxElement;
}

let max = findMax([3, 5, 7, 2, 8, -1, 4, 10, 12]);
console.log(max);

max = findMax([-3, -5, -7, -2, -8, -1, -4]);
console.log(max);

/*
    ----------- Using JS built-in function -----------
    Use JS built-in Math.max() function along with the spread operator.
        --> simply return Math.max(...array);

        Time Complexity: O(n) - internally Math.max() also traverse the entire array.

        Space Complexity: O(1) - no extra space needed.
*/

const array = [3, 5, 7, 2, 8, -1, 4, 10, 12];
console.log(Math.max(...array));

/*
    ------------- Divide and Conquer Approach ----------
    Recursively divide the array into two halves and find the maximum in each half. Compare the two maximums to get the overall maximum.

        Time Complexity: O(n) - Every element is compared once.
    
        Space Complexity: O(logn) - Due to recursive calls.
*/

const findMaxRecursively = (arr, start, end) => {

    // if array has only one element.
    if (start === end) {
        return arr[start];
    }

    const mid = Math.floor((start + end) / 2);  // dividing the array into half.
    const maxLeft = findMaxRecursively(arr, start, mid);
    const maxRight = findMaxRecursively(arr, mid + 1, end);

    return Math.max(maxLeft, maxRight);
}

console.log(findMaxRecursively(array, 0, array.length - 1));

