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

