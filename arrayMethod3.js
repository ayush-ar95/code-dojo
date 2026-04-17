// indexof method
const fruits = ["apple", "banana", "mango", "banana"];
console.log(fruits.indexOf("banana"));
console.log(fruits.indexOf("banana", 2));

// lastindexof method
console.log(fruits.lastIndexOf("banana"));
console.log(fruits.lastIndexOf("banana", 2));

// includes method
console.log(fruits.includes("banana"));

// slice method
const fruitsSubArray = fruits.slice(3);
console.log(fruitsSubArray);

// splice method
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const removedNumber = number.splice(1, 3); // removing elements form the array.
console.log(removedNumber);
console.log(number);

const vechile = ["car", "bus", "cycle", "bike"];
vechile.splice(2, 1, "truck"); // insert by removing element at that position.
console.log(vechile);

vechile.splice(2, 0, "ship", "cruise"); // inserting without removing any element.
console.log(vechile);

// concat method
const evenNumber = [2, 4, 6, 8];
const oddNumber = [1, 3, 5, 7];
const newNumber = evenNumber.concat(oddNumber);
console.log(newNumber);

const randomThings = evenNumber.concat(7, "seperator", [oddNumber], false);
console.log(randomThings);

// join method
const fruitsString = fruits.join(",");
console.log(fruitsString); // it returns the string

// find method
const people = [
    { name: "sam", age: 17 },
    { name: "Adam", age: 18 },
    { name: "Smith", age: 23 }
];
const isAdult = people.find(person => person.age >= 18);
console.log(isAdult);

// sort method
const sortNumber = [3, 5, 1, 7, 2, 11, 2];
sortNumber.sort();
console.log(sortNumber); // here the output will be [1,11,2,2,3,5,7] this is because its follows dictionary order.

    // Custom sort - extension of sort method.. we will pass a function in sort method which will be used to sort the array.
const customSort = (a, b) => {
    if (a > b) return 1; // means a will be ahead of b
    else if (a === b) return 0; // no need to change the position
    else return -1; // b will be ahead of a
}
sortNumber.sort(customSort);
console.log(sortNumber); // [1,2,2,3,5,7,11]

// every method
// every method has 3 parameter - value, index, array
const everyArray = [2, 4, 6, 8, 10];
const allEven = everyArray.every(num => num % 2 === 0); // here we used only first parameter.
console.log(allEven);

const mixData = [1, "hello", true, { name: "John" }];
const allSame = mixData.every((value, index, array) => typeof value === typeof array[0]); // here we used 2 parameters.
console.log(allSame);

// reduce method
const reduceArray = [1, 2, 3, 4, 5];
const calculateSum = (totalSum, currentValue) => {
    console.log(totalSum);
    console.log(currentValue);
    return totalSum + currentValue;
}
const sum = reduceArray.reduce(calculateSum, -1);
console.log(sum);

// some method
const someArray = [3, 4, 5, 6, 7];
const hasZero = someArray.some(num => num === 0);
console.log(hasZero);

// split method
const splitString ="this is a string";
const arrayOfString = splitString.split(' ');
console.log(arrayOfString);

// reverse method
const reverseArray = [1,2,3,4,5];
const reversedDone = reverseArray.reverse();
console.log(reverseArray);
console.log(reversedDone);

// fill method
const fillArray = ["ayush","nunu","anika"];
const fillName = fillArray.fill("unknown");
console.log(fillName);

const fillName2 = fillArray.fill("shalu",1,2);
console.log(fillName2)

