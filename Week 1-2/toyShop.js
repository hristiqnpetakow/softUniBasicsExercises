function toyShop(input) {
let priceOfHoliday = Number(input[0]);
let puzzleCount = Number(input[1]);
let dollCount = Number(input[2]);
let bearCount = Number(input[3]);
let minionsCount = Number(input[4]);
let truckCount = Number(input[5]);

let totalSum = puzzleCount * 2.60 + dollCount * 3 + bearCount * 4.10 +  minionsCount * 8.20 + truckCount * 2;
let toysCounter = puzzleCount + dollCount + bearCount + minionsCount + truckCount;

if(toysCounter >= 50) {
    totalSum = 0.75 * totalSum;

}

let moneyEarn = totalSum;
moneyEarn = 0.90 * moneyEarn;

if(moneyEarn >= priceOfHoliday) {
    let moneyLeft = moneyEarn - priceOfHoliday;
    console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
} else {
    let neededMoney = priceOfHoliday - moneyEarn;
    console.log(`Not enough money! ${neededMoney.toFixed(2)} lv needed.`)
}

}
toyShop(["40.8","20","25","30","50","10"])
