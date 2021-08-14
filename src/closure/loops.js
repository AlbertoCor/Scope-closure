const anotherFunction = () => {
    for (var i = 0; i < 10; i++){
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
}

anotherFunction();      // only access last result and print that


const anotherFunction = () => {
    for (let i = 0; i < 10; i++){
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
}

anotherFunction();      // use var let show a 