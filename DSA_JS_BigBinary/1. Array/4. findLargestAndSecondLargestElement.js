/*
    Problem Statement: Write a JS program to find the largest and second largest elements in an array of integers.
*/

/*
    Use a single pass to find both the largest and second largest elements.

        Time Complexity: O(n) - we need to traverse the array once.
        
        Space Complexity: O(1) - constant extra space.
 */

const findElements = (array) => {
    let largestElement = array[0];
    let secondLargestElement = array[0];

    array.forEach(ele => {
        if (ele > largestElement) {
            secondLargestElement = largestElement;
            largestElement = ele;
        } else if (ele > secondLargestElement && ele != largestElement) {   // if the numbers are repetating then in that case there will be a chance that the largest and second largest will be same, so we are checking ele != largestElement.
            secondLargestElement = ele;
        }
    });

    return `Largest Element: ${largestElement} and Second Largest Element: ${secondLargestElement}`;
}

console.log(findElements([10, 20, 4, 99, 45, 99]));