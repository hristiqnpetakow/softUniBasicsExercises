function excursionSale(input){
    let index = 0;
    let numSea = Number(input[index]);
    index++;
    let numMountain = Number(input[index]);
    index++;
    let command = input[index];
    index++;
 
    let priceSea = 680;
    let priceMountain = 499;
    let profit = 0;
 
    while(command !== "Stop"){
        if(command === "sea" && numSea > 0){
            profit += priceSea;
            numSea--;
        }
        if(command === "mountain" && numMountain > 0){
            profit += priceMountain;
            numMountain--;
        }
        if (numMountain === 0 && numSea === 0) {
            console.log(`Good job! Everything is sold.`);
            break;
        }
        command = input[index];
        index++;
    }
    console.log(`Profit: ${profit} leva.`);
}