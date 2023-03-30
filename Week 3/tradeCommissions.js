function tradeCommissions(input) {
    let town = input[0];
    let sum = Number(input[1]);
    let price = 0;

    if (town === "Sofia") {
        if (sum >=0 && sum <= 500) {
            price = 0.05 * sum;
        } else if (sum > 500 && sum <= 1000) {
            price = 0.07 * sum;
        } else if (sum >= 1000 && sum <= 10000) {
            price = 0.08 * sum;
        } else if (sum > 10000){
            price = 0.12 * sum;
        }
    } else if (town === "Varna") {
        if (sum >=0 && sum <= 500) {
            price = 0.045 * sum;
        } else if (sum > 500 && sum <= 1000) {
            price = 0.075 * sum;
        } else if (sum >= 1000 && sum <= 10000) {
            price = 0.10 * sum;
        } else if (sum > 10000) {
            price = 0.13 * sum;
        }
    } else if (town === "Plovdiv") {
        if (sum >=0 && sum <= 500) {
            price = sum * 0.055;
        } else if (sum > 500 && sum <= 1000) {
            price = 0.08 * sum;
        } else if (sum >= 1000 && sum <= 10000) {
            price = 0.12 * sum;
        } else if (sum > 10000) {
            price = 0.145 * sum;
        }
    }

    if(price === 0 ) {
        console.log("error");
    } else {
    console.log(price.toFixed(2));
    }
}
tradeCommissions(["Plovdiv",
"-20"])



