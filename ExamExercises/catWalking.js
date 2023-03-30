function catWalking(input) {

    let minutesForWalk = Number(input[0]);
    let walksCount = Number(input[1]);
    let catsCalories = Number(input[2]);

    let currMinWalks = minutesForWalk * walksCount;
    let caloriesCount = currMinWalks * 5;
    let halfPercentCalories = catsCalories / 2;

    if(caloriesCount >= halfPercentCalories) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${caloriesCount}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${caloriesCount}.`);
    }

}

catWalking(["15",
"2",
"500"]);

