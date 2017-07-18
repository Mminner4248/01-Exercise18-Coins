var coinAmount = prompt ("Please enter the amount");

let coinPurse= {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
}

coinAmount = coinAmount * 100;

function coinCounter () {
while(coinAmount !== 0){
if (coinAmount >= 25){
    coinPurse.quarters += 1;
    coinAmount = coinAmount - 25;
}else if (coinAmount >= 10){
    coinPurse.dimes += 1;
    coinAmount = coinAmount - 10;
}else if (coinAmount >= 5){
    coinPurse.nickels += 1;
    coinAmount = coinAmount - 5;
}else if (coinAmount >=1){
    coinPurse.pennies += 1;
    coinAmount = coinAmount - 1;
}

}

console.log("quarters:", coinPurse.quarters, "dimes:", coinPurse.dimes, "nickels:", coinPurse.nickels, "pennies:", coinPurse.pennies)

}

coinCounter();