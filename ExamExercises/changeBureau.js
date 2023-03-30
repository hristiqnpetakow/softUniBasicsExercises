function changeBureau(input) {

    let bitcoin = Number(input[0]);
    let japanCoin = Number(input[1]);
    let commission = Number(input[2]);

    let bitcoinPrice = bitcoin * 1168;
    let japanCoinPriceInDollar = japanCoin * 0.15;

    let japanCoinPriceInLeva = japanCoinPriceInDollar * 1.76;
    let price = (bitcoinPrice + japanCoinPriceInLeva) / 1.95
    let commissionPrice = price * (commission / 100);
    let totalPrice = price - commissionPrice;

    console.log(totalPrice.toFixed(2));
}
changeBureau(["1",
"5",
"5"]);

// •	1 биткойн = 1168 лева.
// •	1 китайски юан = 0.15 долара.
// •	1 долар = 1.76 лева.
// •	1 евро = 1.95 лева.
