function oscars(input) {
    let name = input[0];
    let points = Number(input[1]);
    let reffers = Number(input[2]);

    for (let i = 3; i < reffers * 2 + 3; i += 2) {
        points += ((input[i].length) * input[i + 1]) / 2;

        if (points <= 1250.5) {
            continue;
        } else {
            break;
        }
    }
    if (points > 1250.5) {
        console.log(`Congratulations, ${name} got a nominee for leading role with ${points.toFixed(1)}!`)
    } else {
        let moneyNeeded = 1250.5 - points;
        console.log(`Sorry, ${name} you need ${moneyNeeded.toFixed(1)} more!`)
    }
}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
