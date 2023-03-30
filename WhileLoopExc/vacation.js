function vacation(input) {
    let index = 0;

    let vacationPrice = Number(input[0]);

    let moneyAvailable = Number(input[1])

    let dayCount = 0;
    let daySpend = 0;

    while (moneyAvailable < vacationPrice) {
        dayCount++;
        index += 2;

        let action = input[index];
        if(action === "spend") {
            daySpend++;
            if(daySpend === 5) {
                console.log("You can't save the money.");
                console.log(dayCount);
                break;
            }
            moneyAvailable -= Number(input[index + 1]);
            if(moneyAvailable < 0) {
                moneyAvailable = 0;
            }
        } else {
            daySpend = 0;
            moneyAvailable += Number(input[index + 1]);
        }
        
    }
        if(moneyAvailable >= vacationPrice) {
            console.log(`You saved the money for ${dayCount} days.`);
        }
}
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])


