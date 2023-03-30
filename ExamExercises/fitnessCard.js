function fitnessCard(input) {

    let moneyWeOwn = Number(input[0]);
    let gender = input[1];
    let age = Number(input[2]);
    let sport = input[3];
    let price = 0;

    if (sport === "Gym") {
        if (gender === "m") {
            price += 42;
        } else {
            price += 35;
        }
    } else if (sport === "Boxing") {
        if (gender === "m") {
            price += 41;
        } else {
            price += 37;
        }
    } else if (sport === "Yoga") {
        if (gender === "m") {
            price += 45;
        } else {
            price += 42;
        }
    } else if (sport === "Zumba") {
        if (gender === "m") {
            price += 34;
        } else {
            price += 31;
        }
    } else if (sport === "Dances") {
        if (gender === "m") {
            price += 51;
        } else {
            price += 53;
        }
    } if (sport === "Pilates") {
        if (gender === "m") {
            price += 39;
        } else {
            price += 37;
        }
    }

    if(age <= 19) {
        
        let priceWithDisc = price * 0.20;
        price = price - priceWithDisc;
    } else {
        price += 0;
    }

    if(price <= moneyWeOwn) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        let moneyNeeded = price - moneyWeOwn;
        console.log(`You don't have enough money! You need $${moneyNeeded.toFixed(2)} more.`);
    }
}

    fitnessCard(["50",
    "m",
    "19",
    "Gym"]);
    
    
// •	Сумата, с която разполагаме - реално число в интервала [10.00…1000.00]
// •	Пол - символ ('m' за мъж и 'f' за жена)
// •	Възраст - цяло число в интервала [5…105]
// •	Спорт - текст (една от възможностите в таблицата)
