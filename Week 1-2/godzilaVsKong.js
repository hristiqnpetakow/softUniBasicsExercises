function godzilaVsKong(input) {

    let movieBudget = Number(input[0]);
    let statistsCount = Number(input[1]);
    let priceForClothesPerStatist = Number(input[2]);
    let clothesSum = 0;

    let decorSum = 0.10 * movieBudget;
    //let clothesSum = statistsCount * priceForClothesPerStatist;

    if(statistsCount > 150) {
        clothesSum = 0.90 * (statistsCount * priceForClothesPerStatist);
    } else {
        clothesSum = statistsCount * priceForClothesPerStatist;
    }

    let neededMoney = decorSum + clothesSum;
    let currentPrice = neededMoney - movieBudget;

    if(neededMoney > movieBudget) {
        
        console.log("Not enough money!");
        console.log(`Wingard needs ${currentPrice.toFixed(2)} leva more.`);

    } else if(neededMoney <= movieBudget) {
        let moneyLeft = movieBudget - neededMoney;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }

}
godzilaVsKong(["9587.88",
"222",
"55.68"])


