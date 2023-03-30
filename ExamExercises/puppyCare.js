function puppyCare(input) {

    let index = 0;
    let boughtFood = Number(input[index]);
    index++;

    let foodsInGrams = boughtFood * 1000;

    let command = input[index];
    index++;

    let count = 0;
    
    while(command !== "Adopted") {
        let counter = Number(command);
            count += counter;

        command = input[index];
        index++;

    }

    if(count <= foodsInGrams) {
        let moneyLeft = foodsInGrams - count;
        console.log(`Food is enough! Leftovers: ${moneyLeft} grams. `);
    } else {
        let moneyNeeded = count - foodsInGrams;
        console.log(`Food is not enough. You need ${moneyNeeded} grams more.`);
    }
}

puppyCare(["4",
"130",
"345",
"400",
"180",
"230",
"120",
"Adopted"]);
