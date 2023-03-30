function energyBooster(input) {
    let fruitType = input[0];
    let size = input[1];
    let orderCount = Number(input[2]);
    let price = 0;
    let priceWithDisc = 0;
    let big = 5;
    let small = 2;
    let curPrice = 0;

    if(fruitType === "Watermelon") {
        if(size === "small") {
            price = small * 56;
            curPrice = orderCount * price;
        } else {
            price = big * 28.70;
            curPrice = orderCount * price;
        }
    } else if( fruitType === "Mango") {
        if(size === "small") {
            price = small * 36.66;
            curPrice = orderCount * price;
        } else {
            price = big * 19.60;
            curPrice = orderCount * price;
        }
    } else if( fruitType === "Pineapple") {
        if(size === "small") {
            price = small * 42.10;
            curPrice = orderCount * price;
        } else {
            price = big * 24.80;
            curPrice = orderCount * price;
        }
    } else if( fruitType === "Raspberry") {
        if(size === "small") {
            price = small * 20;
            curPrice = orderCount * price;
        } else {
            price = big * 15.20;
            curPrice = orderCount * price;
        }
    }

    if(curPrice >= 400 && curPrice <= 1000){
        priceWithDisc = curPrice * 0.15;
    } else if(curPrice >= 1000) {
        priceWithDisc = curPrice / 2;
    } else {
        priceWithDisc += 0;
    }

    let totalPrice = curPrice - priceWithDisc;

    console.log(`${totalPrice.toFixed(2)} lv.`);
}

energyBooster(["Pineapple",
"small",
"1"]);
