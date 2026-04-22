/*
    problem Statement: Given a sorted array of integers, return an array of the squares of each number sorted in non-decreasing order.
        Input: 
            array: [-4, -1, 0, 3, 10]
        Output:
            [0, 1, 9, 16, 100]
*/

const array = [-4, -1, 0, 3, 10];

/*
    ---------------- Brute Force Approach -----------------
    Square all the elements of the array and then sort the squared elements.

        Time complexity: O(nlogn) - due to sorting step
        Space complexity: O(n) - additional array to store squares.
*/

const bruteMethod = (array) => {
    const squareArray = array.map(element => element * element);
    squareArray.sort((a, b) => {
        // if (a < b)
        //     return -1;
        // else if (a > b)
        //     return 1;
        // else
        //     return 0;
        return a - b; // this is the sort hand for standard sorting function of ascedning order.
    });
    return squareArray;
}
console.log(bruteMethod(array));

/*
    -------------- Two Pointer approach --------------
    Use two pointers: one starting from the beginning(for the smallest values) and the other from the end(for the largest values). Compare the absolute values of the two pointers, square them, and insert the larger one at the correct position in the result array.
*/