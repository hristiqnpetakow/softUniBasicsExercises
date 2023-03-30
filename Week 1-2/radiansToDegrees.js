function radiansToDegrees(input) {
    let radians = Number(input[0]);
    let toDegrees = radians * 180 / Math.PI;
    console.log(toDegrees);
}
radiansToDegrees(["3.1416"]);