/*
    Problem Statement: Find the second Smallest Element in the array.
*/

/*
    ---------- Approach -------------
    Traverse the array only once and find both the smallest and second smallest elements.

        Time complexity: O(n) - we are travesing the array once.

        Space complexity: O(1) - only fixed amount of extra space is used.
*/

const array = [12, 13, 5, 10, 34, 1];
const array2 = [1, 1, 1, 1];

const findSecondSmallestElement = (array) => {
    let smallestElement = Infinity;
    let secondSmallestElement = Infinity;

    array.forEach(ele => {
        if (ele < smallestElement) {
            secondSmallestElement = smallestElement;
            smallestElement = ele;
        } else if (ele < secondSmallestElement && ele != smallestElement) {
            secondSmallestElement = ele;
        }
    });

    return (`Second Smallest Element is: ${secondSmallestElement === Infinity ? null : secondSmallestElement}`);
}

console.log(findSecondSmallestElement(array));
console.log(findSecondSmallestElement(array2));
console.log(findSecondSmallestElement([1]));