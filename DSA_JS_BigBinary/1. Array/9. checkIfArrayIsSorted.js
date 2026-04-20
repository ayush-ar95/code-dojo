/*
    Problem Statement: Write a JS function to check if a given array is sorted.
        Example:
            input: [1,2,3,4,5];
            output: true;
*/

const array = [1, 2, 3, 4, 5];
const unSortedArray = [2, 1, 3, 4, 5];

/*
    ---------------- Brute Force --------------
    In this approach, we manually check if every adjacent pair of elements in the array is sorted in non-decreasing order.

        Time complexity: O(n) - we need to traverse once.
        Space complexity: O(1) - no extra space needed.
*/

const bruteCheck = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1])
            return false;
    }

    return true;
}

console.log(bruteCheck(array));
console.log(bruteCheck(unSortedArray));

/*
    ------------- Using every() method ----------
    The every() method tests whether all elements in the array pass the provided test function. We can check if every element is less than or equal to the next one.

        Time complexity: O(n) - it iterates over the array once.
        Space complexity: O(1) - no extra space needed.
*/

const everyCheck = (array) => {
    return array.every((element, index) => index === 0 || array[index - 1] < element);
}

console.log(everyCheck(array));
console.log(everyCheck(unSortedArray));

/*
    ------------ Approach Using Recursion ----------------
    We can use recursion to simplify the comparison process by breaking the array down and comparing one element at a time.

        Time complexity: O(n) - we check each element once.
        Space complexity: O(n) - due to recursive stack.
*/

const usingRecursionCheck = (array, index = 0) => {
    if (index === array.length - 1)
        return true;
    if (array[index] > array[index - 1])
        return false;
    return usingRecursionCheck(array, index + 1);
}

console.log(usingRecursionCheck(array));
console.log(usingRecursionCheck(unSortedArray));