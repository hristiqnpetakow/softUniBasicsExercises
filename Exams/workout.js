function workout(input) {
    let index = 0;
    let daysCount = Number(input[index]);
    index++;
    let km = Number(input[index]);
    index++;
    let percent = Number(input[index]);
    index++
    let wholeDistance = km;
    let distance = km;
    while (daysCount > 0) {
        daysCount--;
        distance += distance * (percent / 100);
        wholeDistance += distance;
        percent = Number(input[index]);
        index++;
    }
    if (wholeDistance >= 1000) {
        console.log(`You've done a great job running ${Math.ceil(wholeDistance - 1000)} more kilometers!`);
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - wholeDistance)} more kilometers`);
    }
}