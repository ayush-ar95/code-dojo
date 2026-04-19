// explain the execution of every method

function isSorted(arr) {
    return arr.every((element, index) => index === 0 || arr[index - 1] <= element);
}

let arr = [1, 2, 3, 4, 5];
console.log(isSorted(arr));


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

