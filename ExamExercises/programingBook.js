function programingBook(input) {
    let moneyForPages = Number(input[0]);
    let moneyForCoverPage = Number(input[1]);
    let percentOfDiscount = Number(input[2]);
    let moneyForDesigner = Number(input[3]);
    let percentOfTheSumOfTheTeam = Number(input[4]);

    let startedSum = (moneyForPages * 899) + (moneyForCoverPage * 2);
    let discPercent = percentOfDiscount / 100;
    let discPrice = startedSum * discPercent;
    let disc = startedSum - discPrice;
    let priceWithDesigner = disc + moneyForDesigner;
    let percentOfSumTeam = percentOfTheSumOfTheTeam / 100;
    let percentOfCopy = priceWithDesigner - (priceWithDesigner * percentOfSumTeam);

    console.log(`Avtonom should pay ${percentOfCopy.toFixed(2)} BGN.`);

}
programingBook(["0.01",
"1",
"10",
"20",
"20"]);
// •	Цена за отпечатване на една страница - реално число в интервала (0.00…1.50]
//     •	Цена за отпечатване на една корица - реално число в интервала (0.00…5.00]
//     •	Процентно намаление за отпечатване на хартия - цяло число в интервала (0…100]
//     •	Сумата, която трябва да се заплати на дизайнер - реално число в интервала (0.00…150.00]
//     •	Процент от цялата дължима сума, който е заплатен от екипа - цяло число в интервала [0…100]
    
