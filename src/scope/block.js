
const fruits = () => {
    if (true) {
        var fruits1 = "apple";
        var fruits2 = "banana";
        var fruits3 = "kiwi";       // we can see all vars on colsole log because var works outside of block
    }
    console.log(fruits1);
    console.log(fruits2);
    console.log(fruits3);
}

fruits();
//-----------------------------------------


const fruits = () => {
    if (true) {
        var fruits1 = "apple";
        let fruits2 = "banana";// we only can see the print values with console inside of block of if statement
        const fruits3 = "kiwi";
        console.log(fruits2);
        console.log(fruits3);
    }
    console.log(fruits1);
}

fruits();


let x = 1;      // global value
{
    let x = 2;      // local value
    console.log(x);     // only prints value inside of this code with let
}
console.log(x);         // print value global 


// using var

var x = 1;      // global value
{
    var x = 2;      // local value
    console.log(x);     // using var inside block reassign value from first value 
}
console.log(x);         // print value global 

//-------------------------------

const anotherFunction = () => {
    for (var i = 0; i < 10; i++){
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
}

anotherFunction();