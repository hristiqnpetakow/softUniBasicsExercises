function repaiting(input) {
let nylonNeeded = Number(input[0]);
let paintNeeded = Number(input[1]);
let thinnerNeeded = Number(input[2]);
let hoursNeeded = Number(input[3]);

let priceForNylon = (nylonNeeded + 2) * 1.50;
let extraPaint = 0.1 * paintNeeded;
let totalPaintNeeded = paintNeeded + extraPaint;
let priceForPaint = totalPaintNeeded * 14.50;
let priceForThinner = thinnerNeeded * 5.00;

let needsSum = priceForNylon + priceForPaint + priceForThinner + 0.40;
let sumForWorkers = (needsSum * 0.3) * hoursNeeded;
let theWholeSum = needsSum + sumForWorkers; 
console.log(theWholeSum);

}
repaiting(["10","11","4","8"])