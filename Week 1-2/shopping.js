function shopping(input) {

    let budget = Number(input[0]);    
    let videocardsNumber = Number(input[1]);    
    let processorsNumber = Number(input[2]);    
    let ramMemoryNumber = Number(input[3]); 
    let totalSum = 0;

    let priceForVideoC = videocardsNumber * 250;
    let priceForProcessor = (0.35 * priceForVideoC) * processorsNumber;
    let priceForRamM = (0.10 * priceForVideoC) * ramMemoryNumber; 

    if (videocardsNumber > processorsNumber) {
        totalSum = 0.85 * (priceForVideoC + priceForProcessor + priceForRamM);
    } else {
        totalSum = priceForVideoC + priceForProcessor + priceForRamM;
    }

    if (totalSum <= budget) {
        let moneyLeft = budget - totalSum;
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    } else {
        let moneyNeeded = totalSum - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`);
    }


}
shopping(["920.45",
"3",
"1",
"1"])

