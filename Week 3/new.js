function commissions(input){
    let sales = Number(input[1]);
    let city = input[0];
    let commission = 0;
 
    let isValidCity = city === "Sofia" || city === "Varna" || city === "Plovdiv"
    let isValidSale = sales < 0
    
    if(isValidCity === false || isValidSale === true){
        console.log("error");
    } else {
        if (sales >=0 && sales <= 500){
            switch(city){
                case "Sofia":
                    commission = sales * 0.05; break;
                case "Varna":
                    commission = sales * 0.045; break;
                case "Plovdiv":
                    commission = sales * 0.055; break;
            }
            console.log(commission.toFixed(2));
        } else if (sales > 500 && sales <= 1000) {
            switch(city){
                case "Sofia":
                    commission = sales * 0.07; break;
                case "Varna":
                    commission = sales * 0.075; break;
                case "Plovdiv":
                    commission = sales * 0.08; break;
            }
            console.log(commission.toFixed(2));
        } else if (sales > 1000 && sales <= 10000) {
            switch(city){
                case "Sofia":
                    commission = sales * 0.08; break;
                case "Varna":
                    commission = sales * 0.1; break;
                case "Plovdiv":
                    commission = sales * 0.12; break;
            }
            console.log(commission.toFixed(2));
        } else if (sales > 10000) {
            switch(city){
                case "Sofia":
                    commission = sales * 0.12; break;
                case "Varna":
                    commission = sales * 0.13; break;
                case "Plovdiv":
                    commission = sales * 0.145; break;
            }
            console.log(commission.toFixed(2));
        }
    }
}
commissions(["Plovdiv",
"-20"])
