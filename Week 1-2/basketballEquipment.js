function basketballEquipment(input) {
    // •	Баскетболни кецове – цената им е 40% по-малка от таксата за една година
    // •	Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
    // •	Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
    // •	Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка
    let tax = Number(input[0]);
    let basketballShoes = 0.4 * tax;
    let priceForShoes = tax - basketballShoes;
    
    let basketballClothes = 0.2 * priceForShoes;
    let priceForClothes = priceForShoes - basketballClothes;

    let basketballBall = (1 / 4) * priceForClothes;
    let basketballAccessories = (1 / 5) * basketballBall;

    let finalSum = tax + priceForShoes + priceForClothes + basketballBall + basketballAccessories;
    console.log(finalSum);
}
basketballEquipment(["365"])