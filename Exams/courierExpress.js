function courierExpress(input) {
    let weightOfOrder = Number(input[0]);
    let typeOfOrder = input[1];
    let distanceInKm = Number(input[2]);
    let price = 0;
    let priceForExpress = 0;

            if(weightOfOrder < 1) {
                price += 0.03;
            } else if(weightOfOrder < 10) {
                price += 0.05;
            } else if(weightOfOrder < 40) {
                price += 0.10;
            } else if(weightOfOrder < 90) {
                price += 0.15;
            } else {
                price += 0.20;
            }

     if(typeOfOrder === "standard"){
        let totalPrice = distanceInKm * price;
        console.log(`The delivery of your shipment with weight of ${weightOfOrder.toFixed(3)} kg. would cost ${totalPrice.toFixed(2)} lv.`);
     } else if(typeOfOrder === "express") {
        if(weightOfOrder < 1) {
            priceForExpress = 0.80 * 0.03;
        } else if(weightOfOrder < 10) {
            priceForExpress = 0.40 * 0.05;
        } else if(weightOfOrder < 40) {
            priceForExpress = 0.05 * 0.10;
        } else if(weightOfOrder < 90) {
            
            priceForExpress = 0.02 * 0.15;
        } else {
            priceForExpress = 0.01 * 0.20;
        }
        let priceExpress = weightOfOrder * priceForExpress;
        let price2 = distanceInKm * priceExpress;
        let distancePrice2 = distanceInKm * price;
        let totalPriceForExpress = distancePrice2 + price2;
        console.log(`The delivery of your shipment with weight of ${weightOfOrder.toFixed(3)} kg. would cost ${totalPriceForExpress.toFixed(2)} lv.`);
     } else {
        return;
     }
    
}
courierExpress(["87",
"express",
"130"])

// •	За пратки по - леки от 1 кг – 3 стотинки на километър.
// •	От 1 кг до 10 кг – 5 стотинки на километър.
// •	От 10 кг вкл. до 40 кг – 10 стотинки на километър.
// •	От 40 кг вкл. до 90  кг – 15 стотинки на километър.
// •	От 90 кг вкл. до 150 кг – 20 стотинки на километър.
