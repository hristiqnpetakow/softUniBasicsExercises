function hairSalon(input) {
    let index = 0;
    let target = Number(input[index]);
    index++;
    
    
    let command = input[index];
    index++;
    let price = 0;

    while(command !== "closed") {
        let type = command;

        // switch(type) {
            
        //     case "haircut" :
        //         if(type === "mens") {
        //             price += 15;
        //         } else if(type === "ladies") {
        //             price += 20;
        //         } else if(type === "kids"){
        //             price +=10;
        //         } break;

        //     case "color" :
        //         if(type === "touch up"){
        //             price += 20;
        //         } else if(type === "full color"){
        //             price += 30;
        //         }
                
        // }
        let secondType = input[index];
            index++;

        if(type === "haircut"){
            
            if(secondType === "mens") {
                price += 15;
            } else if(secondType === "ladies") {
                price += 20;
            } else if(secondType === "kids"){
                price +=10;
            } 
        } else if(type === "color") {
            if(secondType === "touch up"){
                price += 20;
            } else if(secondType === "full color"){
                price += 30;
            }
            
        }
        
        if(price >= target) {
            break;
        }

        command = input[index];
        index++;

        
    }

    if(price >= target) {
        console.log(`You have reached your target for the day!`);
        console.log(`Earned money: ${price}lv.`);
    } else {
        let moneyNeeded = target - price;
        console.log(`Target not reached! You need ${moneyNeeded}lv. more.`);
        console.log(`Earned money: ${price}lv.`);
    }

}
hairSalon(["300",
"haircut",
"ladies",
"haircut",
"kids",
"color",
"touch up",
"closed"]);


