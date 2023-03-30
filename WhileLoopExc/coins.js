function coins(input) {
    let index = 0;
    let change = Number(input[index]);
    let coins = 0;

    while(change !== 0.00) {
        if(change >= 2 ) {
            change = (change - 2).toFixed(2);
            coins++;
        } else if(change >= 1) {
            change = (change - 1).toFixed(2);
            coins++;
        } else if(change >= 0.50) {
            change = (change - 0.50).toFixed(2);
            coins++;
        } else if(change >= 0.20) {
            change = (change - 0.20).toFixed(2);
            coins++;
        } else if(change >= 0.10) {
            change = (change - 0.10).toFixed(2);
            coins++;
        } else if(change >= 0.05) {
            change = (change - 0.05).toFixed(2);
            coins++;
        } else if(change >= 0.02) {
            change = (change - 0.02).toFixed(2);
            coins++;
        } else if(change >= 0.01) {
            change = (change - 0.01).toFixed(2);
            coins++;
        } else {
            break;
        }
    }
    console.log(coins);
}
coins(["2.73"]);