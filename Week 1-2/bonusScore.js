function bonusScore(input) {
let startPoints = Number(input[0]);
let bonus = 0.0;

if(startPoints <= 100) {
    bonus = 5;
} else if(startPoints <= 1000) {
    bonus = 0.20 * startPoints;
} else {
    bonus = 0.10 * startPoints;
}

if(startPoints % 2 === 0) {
    bonus += 1;
} else if(startPoints % 10 == 5) {
    bonus += 2;
}
console.log(bonus);
console.log(startPoints + bonus);
}
bonusScore(["20"])