/* 
-------------- What is an Array? ---------------

An array is a data structure that can hold more than one value at a time. It is a collection of elements, each identified by an index or key. Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.

------------- Why Array indices start from zero? --------------

The reason for zero-based indexing is rooted in how arrays are managed in memory. When an array is created, the memory address of the first element is the base address. The index of an array element is used as an offset from the base address.

For example: if the base address is 1000 and each element occupies 4 bytes, the memory address of the first element(index 0) is 1000 + 0 * 4 = 1000, the second element(index 1) is 1000 + 1 * 4 = 1004, and so on.

------------- Arrays in JS are quite different from C++ arrays in several ways: -----------------

1. Dynamic Size: meaning they can grow or shrink in size. You can add or remove elements without declaring the size of the array initially.

2. Heterogeneous Elements: Arrays in JS can store elements of different data types (eg: numbers, strings, objects).

3. Built-in Methods: JS arrays come with a wide range of built-in methods such as push(), pop(), map(), filter(), and more.

-------------- Types of Arrays ----------------- 

1. One-Dimensional Arrays: A one-dimensional array is the simplest form of an array, where data is stored in a single row or column. It is essentially a list of elements stored in contiguous memory locations. Each element is accessible using a single index, which represents its position in the array.

Features and Advantages: 
    1. Simple Structure: Easy to understand and implement, making it ideal for beginners.
    2. Efficient Access: Elements can be accessed in constant time O(1) using their index.
    3. Iterative Operations: Common operations like searching, sorting and traversing are straight forward.
    4. Memory Efficiency: Since elements are stored in contiguous memeory locations, accessing elements is faster due to spatial locality.

Use Cases in DSA:
    1. Storing Data: Storing a list of elements such as scores, temperature or names.
    2. Searching and Sorting: Used in algorithms like linear search, binary search, bubble sort, etc.
    3. Dynamic Programming: Often used to store intermediate results in problems like the Fibonacci sequence.

2. Two-Dimensional Arrays (Matrix): A two-dimensional array, also known as a matrix, is an extension of the one-dimensional array where data is stored in a grid or table with rows and columns. Each element in a two-dimensional array is accessible using two indices: one for the row and one for the column.

Features and Advantages:
    1. Tabular Representation: Useful for representing data in a structured, tabular format.
    2. Matrix Operations: Supports operations like addition, subtraction, and multiplication of matrices.
    3. Spatial Data Representation: Ideal for representing spatial data, such as images, grids or game boards.
    4. Ease of Access: Provides a straightforward way to access and manipulate data in both rows and columns.

Use Cases in DSA:
    1. Graph Algorithms: Used to represent adjacency matrices in graph theory.
    2. Dynamic Programming: Helps solve problems like the knapsack problem, longest common subsequence, etc.
    3. Grid-Based Problems: Useful in problems that involve grids, such as pathfinding, game development, or image processing.

--------------- Operations on Array -----------------

Key array operations are: Insertion, Deletion, Searching and Traversal.

1. Insertion: Insertion in an array involves adding a new element at a specific position. Depending on where you want to insert the element, the time complexity can vary.

    Methods for Insertion:
        1. Push: Adds an element to the end of the array.
        2. Unshift: Adds an element to the beginning of the array.
        3. Splice: Adds an element at a specified index.

    Time Complexity:
        1. Push: O(1)
        2. Unshift: O(n)
        3. Splice: O(n) (in worst case)

    Space Complexity:
        All methods: O(1)

2. Deletion: Deletion in an array involves removing an element from a specific position. Like insertion, the time complexity varies depending on where the deletion occurs.

    Methods for Deletion:
        1. Pop: Removes an element from the end of the array.
        2. Shift: Removes an element form the beginning of the array.
        3. Splice: removes an element from a specified index.

    Time Complexity:
        1. Pop: O(1)
        2. Shift: O(n)
        3. Splice: O(n) (in worst case)

    Space Complexity:
        All methods: O(1)

3. Searching: Searching involves finding the index or presence of an element in the array.

    Methods for Searching:
        1. indexOf: Returns the index of the first occurence of the element in the array.
        2. includes: Checks if the array contains a specific element.

    Time Complexity:
        Both methods: O(n) (Linear search)

    Space Complexity:
        All methods: O(1)

4. Traversal: Traversal is the process of accessing each element of the array sequentially. It is often used to apply operations on every element.

    Methods for Traversal:
        1. for loop: Standard loop to iterate through the array.
        2. forEach: Array method that executes a function on each element.
        3. map: Creates a new array by applying a function to each element.

    Time Complexity: 
        All methods: O(n)

    Space Complexity:
        1. for loop, forEach: O(1)
        2. map: O(n) (because it creates a new array)

*/

