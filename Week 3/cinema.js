function cinema(input) {
    let type = input[0];
    let row = Number(input[1]);
    let col = Number(input[2]);

    let count = row * col;
    let sum = 0;

    if (type === "Premiere" ) {
        sum = count * 12.00;
    } else if (type === "Normal") {
        sum = count * 7.50;
    } else {
        sum = count * 5.00;
    }
    console.log(`${sum.toFixed(2)} leva`);
}
cinema(["Discount",
"12",
"30"])



