function careOfPuppy(input) {
    let index = 0;
    let foodBought = Number(input[index]);
    index++;
    
    let foodInGrams = foodBought * 1000;

    let command = input[index];
    index++;
    let count = 0;
    while(command !== "Adopted") {
        let counter = Number(command);
            count += counter;

        command = input[index];
        index++;

    }

    if(count <= foodInGrams) {
        let moneyLeft = foodInGrams - count;
        console.log(`Food is enough! Leftovers: ${moneyLeft} grams. `);
    } else {
        let moneyNeeded = count - foodInGrams;
        console.log(`Food is not enough. You need ${moneyNeeded} grams more.`);
    }

}
careOfPuppy(["4",
"130",
"345",
"400",
"180",
"230",
"120",
"Adopted"]);
