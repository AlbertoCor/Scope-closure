var hello = "Hello";
var hello = "Hello +";
let world = "Hello World";
// let world = "Hello";                //We cant re assign values to declared let, const declaraments
const helloWorld = "Hello World!";  //We cant re assign values to declared let, const declaraments
console.log(hello);

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

const helloWorld_00 = () => {
    globalVar = "im global"
}

helloWorld_00();            // Bad practice calling a global var from inside of a function (local var)
console.log(globalVar)

const anotherFunction_00 = () => {
    var localVar = globalVar = "im Global";
}
anotherFunction_00();       // Bad practice calling a global var from inside of a function (local var)
console.log(globalVar);
