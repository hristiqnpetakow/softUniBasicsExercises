function catDiet(input) {
    let percentFats = Number(input[0]); 
    let percentProteins = Number(input[1]); 
    let percentCarbohydrates = Number(input[2]); 
    let totalCalories = Number(input[3]); 
    let percentOfWater = Number(input[4]); 

    let fats = percentFats / 100;
    let proteins = percentProteins / 100;
    let carbohydrates = percentCarbohydrates / 100;

    let fatsCount = (fats * totalCalories) / 9;
    let proteinsCount = (proteins * totalCalories) / 4;
    let carbohydratesCount = (carbohydrates * totalCalories) / 4;
    let waterCount = (100 - percentOfWater) / 100;

    let total = fatsCount + proteinsCount + carbohydratesCount;

    let caloriesPerOneGram = totalCalories / total;

    let finalResult = waterCount * caloriesPerOneGram;

    console.log(finalResult.toFixed(4));


}
catDiet(["60",
"25",
"15",
"2500",
"60"]);

