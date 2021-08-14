

//remember called function and sum it 
const buildCount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++)
    };
    return displayCount;

};


const myCount = buildCount(1);
myCount();
myCount();
myCount();
myCount();
myCount();
myCount();


// New closure, new form to use the vars to create a new scope and star where we need
const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();

