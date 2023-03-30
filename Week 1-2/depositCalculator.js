function depositCalculator(input) {
let depositSum = Number(input[0]);
let depositTime = Number(input[1]);
let yearPercent = Number(input[2]);

let accruedInterest = yearPercent / 100;

let totalSum = depositSum + depositTime * ((depositSum * accruedInterest) / 12);

console.log(totalSum)

}
depositCalculator(["200","3","5.7"])