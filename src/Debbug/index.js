
var a = "hello";

function hello (){
    let b = "hello w.";
    const c = "hello W.!";
    if (true){
        let d = "Hello W.!!";
        debugger
    }
}

hello();



const moneyBox = (coins) => {
    debugger
    var saveCoins = 0;
    function countCoins (coins) {
    debugger
        saveCoins += coins;
        console.log(`moneyBox: $${saveCoins}.`);
    }
    return countCoins;
}

myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);