function foodDelivery(input) {
let chickenMenu = Number(input[0]);
let fishMenu = Number(input[1]);
let veganMenu = Number(input[2]);

let priceForChicken = chickenMenu * 10.35;
let priceForFish = fishMenu * 12.40;
let priceForVegan = veganMenu * 8.15;

let totalSum = priceForChicken + priceForFish + priceForVegan;
let priceWithDiscount = totalSum * 0.2;

let finalPrice = totalSum + priceWithDiscount + 2.50;
console.log(finalPrice);

}
foodDelivery(["2","4","3"])