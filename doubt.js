// explain the execution of every method

function isSorted(arr, index = 0) {
    if (index === arr.length - 1) {
        return true;
    }
    if (arr[index] > arr[index + 1]) {
        return false;
    }
    return isSorted(arr, index + 1);
}

let arr = [1, 2, 6, 4, 5];
console.log(isSorted(arr));


const usingRecursionCheck = (array, index = 0) => {
    if (index === array.length - 1)
        return true;
    if (array[index] > array[index - 1])
        return false;
    return usingRecursionCheck(array, index + 1);
}
// this is related to check sorted array?
// -----------------------------------


const cat ={
    numberOfLegs : 4,
    canFly : false,
};

const dog = {
    sex : "male" , 
    ...cat,
    height : 30
};
console.log(dog);

