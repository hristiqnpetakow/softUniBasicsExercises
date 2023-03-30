function fitnessCenter(input) {
    let clients = Number(input[0]);
    let workout = input[1];
    let backCount = 0;
    let chestCount = 0;
    let legsCount = 0;
    let absCount = 0;
    let shakeProteinCount = 0;
    let proteinBarCount = 0;
    let trainingCount = 0;
    let buyCount = 0;

    for(let i = 0; i <= clients; i++) {
        workout = input[i];

        if(workout === "Back") {
            backCount++;
            trainingCount++;
        } else if(workout === "Chest") {
            chestCount++;
            trainingCount++;
        } else if(workout === "Legs") {
            legsCount++;
            trainingCount++;
        } else if(workout === "Abs") {
            absCount++;
            trainingCount++;
        } else if(workout === "Protein shake") {
            shakeProteinCount++;
            buyCount++;
        } else if(workout === "Protein bar"){
            proteinBarCount++;
            buyCount++;
        }
    }
        let percentOfTrain = (trainingCount / clients ) * 100;
        let percentOfBuy = (buyCount / clients) * 100;

        console.log(`${backCount} - back`);
        console.log(`${chestCount} - chest`);
        console.log(`${legsCount} - legs`);
        console.log(`${absCount} - abs`);
        console.log(`${shakeProteinCount} - protein shake`);
        console.log(`${proteinBarCount} - protein bar`);
        console.log(`${percentOfTrain.toFixed(2)}% - work out`);
        console.log(`${percentOfBuy.toFixed(2)}% - protein`);
}
fitnessCenter(["10",
"Back",
"Chest",
"Legs",
"Abs",
"Protein shake",
"Protein bar",
"Protein shake",
"Protein bar",
"Legs",
"Abs"]);
