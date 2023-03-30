function suppliesForSchool(input) {
//     •	Брой пакети химикали - цяло число в интервала [0...100]
// •	Брой пакети маркери - цяло число в интервала [0...100]
// •	Литри препарат за почистване на дъска - цяло число в интервала [0…50]
// •	Процент намаление - цяло число в интервала [0...100]

let packOfPencils = Number(input[0]);
let packOfMarkers = Number(input[1]);
let cleanerForDesk = Number(input[2]);
let percentOfDiscount = Number(input[3]);

let priceOfPencils = packOfPencils * 5.80;
let priceOfMarkers = packOfMarkers * 7.20;
let priceForCleaner = cleanerForDesk * 1.20;

let thePriceForAllOfThem = priceOfPencils + priceOfMarkers + priceForCleaner;

let totalSum = thePriceForAllOfThem - (thePriceForAllOfThem * 0.25);
console.log(totalSum);

}
suppliesForSchool(["2","3","4","25"]
)