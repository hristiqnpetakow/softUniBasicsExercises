function onTimeForTheExam(input) {

    let examHour = Number(input[0]);
    let minOfExam = Number(input[1]);
    let ariveHour = Number(input[2]);
    let minTimeArrive = Number(input[3]);

    let examTime = (examHour * 60 ) + minOfExam;
    let arriveTime = (ariveHour * 60) + minTimeArrive;
    let differenceTime = examTime - arriveTime;
    
    let earlyHour = 0;
    let earlyMin = 0;
    let lateHour = 0;
    let lateMin = 0;

    if (differenceTime >= 0 && differenceTime <= 30) {
        if (differenceTime == 0) {
            console.log("On time");
        } else {
            console.log("On Time");
            console.log(`${differenceTime} minutes before the start`);
    }

    } else if (differenceTime > 30) {
        earlyHour = Math.floor(differenceTime / 60);
        earlyMin = differenceTime % 60;

        if (differenceTime > 30 && differenceTime <= 59) {
            console.log("Early");
            console.log(`${differenceTime} minutes before the start`);
        } else if (differenceTime == 60 || earlyMin <10) {
            console.log("Early");
            console.log(`${earlyHour}:0${earlyMin} hours before the start`);
        } else {
            console.log("Early");
            console.log(`${earlyHour}:${earlyMin} hours before the start`);
        }
    } else {
        differenceTime = Math.abs(differenceTime);
        lateHour = Math.floor(differenceTime / 60);
        lateMin = differenceTime % 60;

        if (differenceTime <= 59) {
            console.log("Late");
            console.log(`${differenceTime} minutes after the start`);
        }
        else if (differenceTime == 60 || lateMin < 10) {
            console.log("Late");
            console.log(`${lateHour}:0${lateMin} hours after the start`);
        } else {
            console.log("Late");
            console.log(`${lateHour}:${lateMin} hours after the start`);
        }
    }  
}
onTimeForTheExam(["11",
"30",
"10",
"55"])


