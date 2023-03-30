function skiTrip(input) {
    let dayStay = Number(input[0]);
    let roomType = input[1];
    let rate = input[2];
    let daysCount = dayStay - 1;
    let price = 0;

    switch(roomType) {
        case "room for one person" :
        price = daysCount * 18.00;
        break;

        case "apartment" :
        if (daysCount < 10) {
            price = (daysCount * 25.00) * 0.70;
        } else if (daysCount <= 15) {
            price = (daysCount * 25.00) * 0.65;
        } else {
            price = (daysCount * 25.00) * 0.50;
        }
        break;

        case "president apartment" :
        if (daysCount < 10) {
            price = (daysCount * 35.00) * 0.90;
        } else if (daysCount <= 15) {
            price = (daysCount * 35.00) * 0.85;
        } else {
            price = (daysCount * 35.00) * 0.80;
        }
        break;
    }

    if (rate === "positive") {
        price *= 1.25;
    } else {
        price *= 0.90;
    }
    console.log(price.toFixed(2));
}
skiTrip(["12",
"room for one person",
"positive"])


