function newHouse(input) {
 
    let typeOfFlower = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;

    switch (typeOfFlower) {
        case "Roses" :
            price = flowerCount * 5;
            break;
        case "Dahlias" :
            price = flowerCount * 3.80;
            break;
        case "Tulips" :
            price = flowerCount * 2.80;
            break;
        case "Narcissus" :
            price = flowerCount * 3;
            break;
        case "Gladiolus" :
            price = flowerCount * 2.50;
            break;
    }
    
        if (typeOfFlower === "Roses" && flowerCount > 80) {
            price *= 0.90;
        } else if (typeOfFlower === "Dahlias" && flowerCount > 90) {
            price *= 0.85;
        } else if (typeOfFlower === "Tulips" && flowerCount > 80) {
            price *= 0.85;
        } else if (typeOfFlower === "Narcissus" && flowerCount < 120) {
            price *= 1.15;
        } else if (typeOfFlower === "Gladiolus" && flowerCount < 80) {
            price *= 1.20;
        }

        if(budget >= price) {
            let moneyLeft = budget - price;
            console.log(`Hey, you have a great garden with ${flowerCount} ${typeOfFlower} and ${moneyLeft.toFixed(2)} leva left.`);
        } else {
            let neededMoney = price - budget;
            console.log(`Not enough money, you need ${neededMoney.toFixed(2)} leva more.`);
        }
 
}
newHouse(["Narcissus",
"119",
"360"])


