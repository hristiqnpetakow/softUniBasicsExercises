function speedInfo(input) {
let speedNumber = Number(input[0]);
// •	При скорост до 10 (включително) отпечатайте "slow"
// •	При скорост над 10 и до 50 (включително) отпечатайте "average" 
// •	При скорост над 50 и до 150 (включително) отпечатайте "fast"
// •	При скорост над 150 и до 1000 (включително) отпечатайте "ultra fast" 
// •	При по-висока скорост отпечатайте "extremely fast"

if(speedNumber <= 10) {
    console.log("slow");
} else if(speedNumber >=10 && speedNumber <= 50) {
    console.log("average");
} else if(speedNumber >= 50 && speedNumber <= 150) {
    console.log("fast");
} else if(speedNumber >= 150 && speedNumber <= 1000) {
    console.log("ultra fast");
} else {
    console.log("extremely fast");
}

}
speedInfo(["1001"])