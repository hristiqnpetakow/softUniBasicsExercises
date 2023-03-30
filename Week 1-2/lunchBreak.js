function lunchBreak(input) {

    let seriesName = input[0];
    let seriesDuration = Number(input[1]);
    let breakDuration  = Number(input[2]);

    let lunchTime = (1 / 8 ) * breakDuration;
    let funTime  = (1 / 4 ) * breakDuration;

    let totalFreeTime = lunchTime + funTime;
    let timeForMovie = breakDuration - totalFreeTime;

    if (timeForMovie >= seriesDuration) {
        let timeLeft = Math.ceil(timeForMovie - seriesDuration);
        console.log(`You have enough time to watch ${seriesName} and left with ${timeLeft} minutes free time.`);
    } else {
        let timeNeeded = Math.ceil(seriesDuration - timeForMovie);
        console.log(`You don't have enough time to watch ${seriesName}, you need ${timeNeeded} more minutes.`);
    }

}
lunchBreak(["Game of Thrones",
"60",
"96"])


