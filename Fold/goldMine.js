function goldMine(input) {
    let index = 0;
    let locations = Number(input[index]);
    index++;

    

    for (let i = 0; i < locations; i++) { 
        let expectedAverageKg = Number(input[index]);
        index++;

        let days = Number(input[index]);
        index++;

        let goldAdd = 0;
        for (let k = 0; k < days; k++) {

            let gold = Number(input[index]);
            index++;

            goldAdd += gold;
        }

        let avgGold = goldAdd / days;
        let neededGold = expectedAverageKg - avgGold;

        if (avgGold < expectedAverageKg) {
            console.log(`You need ${neededGold.toFixed(2)} gold.`);
            
        } else {
            console.log(`Good job! Average gold per day: ${avgGold.toFixed(2)}.`);
        }
    }
}
goldMine(["2",
    "10",
    "3",
    "10",
    "10",
    "11",
    "20",
    "2",
    "20",
    "10"]);
