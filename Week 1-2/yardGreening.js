function yardGreening(input) {
    let a = input[0];
    let price = a * 7.61;
    let discount = 0.18 * price;
    let theFinalPrice = price - discount;
    console.log(`The final price is: ${theFinalPrice} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}
yardGreening([550])