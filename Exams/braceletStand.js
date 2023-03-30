function braceletStand(input) {
    let moneyPerDay = Number(input[0]);
    let moneyWonPerDay = Number(input[1]);
    let expensesForTheAllPeriod = Number(input[2]);
    let presentPrice = Number(input[3]);

    let moneyGetPerDay = 5 * moneyPerDay;
    let moneyWonPerSells = 5 * moneyWonPerDay;
    let moneySaved = moneyGetPerDay + moneyWonPerSells;

    let moneyWithoutExpenses = moneySaved - expensesForTheAllPeriod;

    if(moneyWithoutExpenses > presentPrice) {
        console.log(`Profit: ${moneyWithoutExpenses.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        let moneyNeeded = presentPrice - moneyWithoutExpenses;
        console.log(`Insufficient money: ${moneyNeeded.toFixed(2)} BGN.`);
    }
}
braceletStand(["2.10",
"17.50",
"20.20",
"148.50"]);



