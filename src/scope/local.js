
const helloWorld = () => {
    const hello = "hello World";
    console.log(hello);
}

helloWorld()

//calling var hello outside of function helloWorld() = error
console.log(hello);

var scope = "im global";

const functionScope = () => {
    var scope = "im local";
    const func = ()=> {
        return scope;
    }
    console.log(func());
};

functionScope();        // Call the function and return a var value not reassign values in global scope
console.log(scope);     // Call var scope to verify not was reassign by function functionScope
