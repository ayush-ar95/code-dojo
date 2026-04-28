// const cat ={
//     numberOfLegs : 4,
//     canFly : false,
// };

// const dog = {
//     sex : "male" , 
//     ...cat,
//     height : 30
// };
// console.log(dog);

const searchOnGoogle = ({keyword, callback}) =>
    setTimeout(() => {
        console.log(`search results for ${keyword} are here`);
        callback();
    }, 2000);

const onSuccess = () => console.log("search completed");

searchOnGoogle({keyword: "learn javascript", callback:onSuccess});

