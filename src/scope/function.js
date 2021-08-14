
const fruits = () => {
    var fruit = "apple";
    console.log(fruit);
}

fruits();
console.log(fruit)      // Not callable var form

const anotherFunction = () => {
    var x = 1;
    var x = 2;          // on var we could reassign values
    let y = 1;          // on var we cant reassign values
    // let y = 2;
    console.log(x);
    console.log(y);
}

anotherFunction();
