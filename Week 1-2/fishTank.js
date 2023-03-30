function fishTank(input) {
let inCm = Number(input[0]);
let weightInCm = Number(input[1]);
let heightInCm = Number(input[2]);
let percent = Number(input[3]);
let totalPercent = percent / 100;

let tankObem = inCm * weightInCm * heightInCm;
let tankObemInL = tankObem / 1000;
let neededLitters = tankObemInL * (1 - totalPercent);
console.log(neededLitters);
}
fishTank(["85","75","47","17"])