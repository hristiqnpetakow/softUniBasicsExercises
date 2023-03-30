function moutainRun(input) {

    let recordInSec = Number(input[0]);
    let distanceInM = Number(input[1]);
    let timeInSecForOneM = Number(input[2]);

    let needToClimb = distanceInM * timeInSecForOneM;
    let addTime  = Math.floor(distanceInM / 50) * 30;
    let current = needToClimb + addTime;
    
    if(recordInSec > current) {
        console.log(`Yes! The new record is ${current.toFixed(2)} seconds.`);
    } else {
        let neededTime = current - recordInSec;
        console.log(`No! He was ${neededTime.toFixed(2)} seconds slower.`);
    }

}
moutainRun(["1377",
"389",
"3"])
