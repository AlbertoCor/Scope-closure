
const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`moneyBox: $${saveCoins}. `)
}

moneyBox(5);
moneyBox(10);       // return only values without sum of values


// Use of closure, unse a function to keep adding, and return the value
// from arguments from user
const moneyBox = (coins) => {
    var saveCoins = 0;
    function countCoins (coins) {
        saveCoins += coins;
        console.log(`moneyBox: $${saveCoins}.`);
    }
    return countCoins;
}

myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);

// Result $20