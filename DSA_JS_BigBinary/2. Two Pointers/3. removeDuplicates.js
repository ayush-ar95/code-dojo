/*
    Problem Statement: Given a sorted array, remove the duplicates in-place such that each element appears only once and return the new length.

        Input:
            Array: [1,1,2,2,3,4,4]
        Output:
            New length: 4
            Modified array: [1,2,3,4]
*/

const array = [1, 1, 2, 2, 3, 4, 4, 6, 6];

/*
    -------------- Brute force method ---------------
    Create a new array and insert unique elements from the original array, one by one, while keeping track of which elements have already been added.

        Time complexity: O(n) - traversed once
        Space complexity: O(n) - new array used
*/

// these methods will take O(n^2) time because of includes() method and indexOf() method.
const bruteMethod = (array) => {
    let newArray = [];
    array.forEach(element => {
        if (!newArray.includes(element))
            newArray.push(element);
    });
    return newArray;
}
console.log(bruteMethod(array));

const bruteMethod2 = (array) => {
    let newArray = [];
    array.forEach(element => {
        if (newArray.indexOf(element) === -1)
            newArray.push(element);
    });
    return newArray;
}
console.log(bruteMethod2(array));

/*
    ------------- Two pointer approach --------------
    Since the array is sorted, we will use two pointer, one for iterating through the array and another for tracking the position of unique elements.

        Time complexity: O(n) - only one iteration
        Space complexity: O(1) - no extra space
*/

const twoPointerApproach = (array) => {
    let i = 0, j = 1;
    while (j < array.length) {
        if (array[j] !== array[i]) {
            i++;
            array[i] = array[j];
        }
        j++;
    }
    // below loop is only for printing purpose.
    let z = 0;
    while (z <= i) {
        console.log(array[z]);
        z++;
    }
}
twoPointerApproach(array);