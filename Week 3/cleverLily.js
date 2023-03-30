function cleverLily(input) {

    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let pricePerToy = Number(input[2]);
    let moneyWon = 0;
    let evenMoneyWon = 10;

    for(let i = 1; i <= age; i++) {
        if(i % 2 === 0) {
            moneyWon += evenMoneyWon;
            moneyWon -= 1;
            evenMoneyWon += 10; 
        } else {
            moneyWon += pricePerToy;
        }
    }

    if(moneyWon >= washingMachinePrice){
        let moneyLeft = moneyWon - washingMachinePrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        let moneyNeeded = washingMachinePrice - moneyWon;
        console.log(`No! ${moneyNeeded.toFixed(2)}`);
    }
}
cleverLily(["21",
"1570.98",
"3"])

