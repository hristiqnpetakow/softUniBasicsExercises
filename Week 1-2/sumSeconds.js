function sumSeconds(input) {
let fistPlayer = Number(input[0]);
let secondPlayer = Number(input[1]);
let thirthPlayer = Number(input[2]);

let totalTime = fistPlayer + secondPlayer + thirthPlayer;

let minutes = Math.floor(totalTime / 60);
let seconds = totalTime % 60;

if(seconds < 10) {
    console.log(`${minutes}:0${seconds}`);

} else {
    console.log(`${minutes}:${seconds}`);
}
}
sumSeconds(["50",
"50",
"49"])
