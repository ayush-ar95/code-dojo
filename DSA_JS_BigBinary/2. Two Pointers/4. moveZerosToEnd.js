/*
    Problem Statement: Given an array, move all zeros to the end while maintaining the relative order of the non-zero elements.
        Input:
            Array: [1,0,2,0,3];
        Output:
            [1,2,3,0,0]
*/

const array = [1, 0, 2, 0, 3];

/*
    ------------- Brute force approach --------------
    We can use an additional array to store non-zero elements and append zeros later.
        Time complexity: O(n) - only one iteration required
        Space complexity: O(n) - new array
 */

const bruteMethod = (array) => {
    let newArray = [];
    let count = 0;
    array.forEach(element => {
        if (element !== 0)
            newArray.push(element);
        else
            count++;
    });
    while (count > 0) {
        newArray.push(0);
        count--;
    }
    return newArray;
}
console.log(bruteMethod(array));

/*
    ---------- Two pointer approach ------------
    Use two pointers to move non-zero elements in-place and fill the remaining space with zeros.

        Time complexity: O(n) - one iteration needed
        Space complexity: O(1) - no extra space used
*/

const twoPointerApproach = (array) => {
    let i = -1;
    let temp = null;
    array.forEach((element, index) => {
        if (element != 0) {
            i++;
            temp = array[i];
            array[i] = element;
            array[index] = temp;
        }
    });
    return array;
}
console.log(twoPointerApproach(array));

