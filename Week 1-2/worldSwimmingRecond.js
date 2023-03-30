function worldSwimmingRecond(input) {
    let recordInSec = Number(input[0]);
    let distanceInM = Number(input[1]);
    let timeInSecForOneM = Number(input[2]);

    let haveToSwim = distanceInM * timeInSecForOneM;
    let addedTime = Math.floor(distanceInM / 15) * 12.5;
    let allTime = haveToSwim + addedTime;

    if (recordInSec > allTime) {
        console.log(`Yes, he succeeded! The new world record is ${allTime.toFixed(2)} seconds.`);
    } else {
        let neededTime = allTime - recordInSec; 
        console.log(`No, he failed! He was ${neededTime.toFixed(2)} seconds slower.`);
    }
}
worldSwimmingRecond(["55555.67",
"3017","5.03"])

