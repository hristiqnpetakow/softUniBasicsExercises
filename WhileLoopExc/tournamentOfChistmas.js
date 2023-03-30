function tournamentOfChristmas(input) {
    let index = 0;
    let tournamentDays = Number(input[0]);
    index++;

    let winsCount = 0;
    let lostsCount = 0;
    let moneyWon = 0;
   

    for(let i = 0; i < tournamentDays; i++) {

        let command = input[index];
        index++;


        while(command !== "Finish") {
            let sport = input[index];
            index++;
            if(sport === "win") {
                winsCount++;
                moneyWon += 20;
            } else {
                lostsCount++;
            }

            command = input[index];
            index++;
            
            if(winsCount > lostsCount) {
                moneyWon *= 1.10;
                
            }
        }
        

    }


    if(winsCount > lostsCount) {
        moneyWon *= 1.20;
        console.log(`You won the tournament! Total raised money: ${moneyWon.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${moneyWon.toFixed(2)}`);
    }
}
tournamentOfChristmas(["3",
"darts",
"lose",
"handball",
"lose",
"judo",
"win",
"Finish",
"snooker",
"lose",
"swimming",
"lose",
"squash",
"lose",
"table tennis",
"win",
"Finish",
"volleyball",
"win",
"basketball",
"win",
"Finish"]);
