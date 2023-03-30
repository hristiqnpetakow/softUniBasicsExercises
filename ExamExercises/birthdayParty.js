function birthdayParty(input) {
    let moneyForRent = Number(input[0]);
    let moneyForCake = moneyForRent * 0.20;
    let moneyForDrinks = moneyForCake * 0.55;
    let moneyForAnimator = moneyForRent * 1 / 3;

    let currentPrice = moneyForRent + moneyForCake + moneyForDrinks + moneyForAnimator;

    console.log(currentPrice);

}

birthdayParty(["3720"]);