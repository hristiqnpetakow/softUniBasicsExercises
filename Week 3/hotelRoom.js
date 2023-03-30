function hotelRoom(input) {

    let month = input[0];
    let nightsCount = Number(input[1]);
    let studio = 0;
    let apartment = 0;

    switch (month){
        case "May":
        case "October":
            studio = 50 * nightsCount;
            apartment = 65 * nightsCount;
        break;
        case "June":
        case "September":
            studio = 75.20 * nightsCount;
            apartment = 68.70 * nightsCount;
        break;
        case "July":
        case "August":
            studio = 76 * nightsCount;
            apartment = 77 * nightsCount;
        break;
    }
 
    if ((7 < nightsCount && nightsCount < 14) && (month === "May" || month === "October")){
        studio *= 0.95;
    } else if (nightsCount > 14 && (month === "May" || month === "October")) {
        studio *= 0.70;
        apartment *= 0.90;
    } else if (nightsCount > 14 && (month === "June" || month === "September")){
        studio *= 0.80;
        apartment *= 0.90;
    } else if (nightsCount > 14 && (month === "July" || month === "August")){
        apartment *= 0.90;
    }
    
    console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`);
}
hotelRoom(["August",
"20"])

