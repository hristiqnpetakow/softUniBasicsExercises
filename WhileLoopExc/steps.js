function walking(input) {
    let stepsWanted = 10000;
    let sumSteps = 0;
    let index = 0;

    let command = input[index];
    index++;

    while (command !== "Going home") {
        sumSteps += Number(command);

        if (stepsWanted < sumSteps) {
            console.log("Goal reached! Good job!");
            console.log(`${sumSteps - stepsWanted} steps over the goal!`);
            return;
        }
        command = input[index];
        index++;
    }

    command = input[index];
    index++;
    sumSteps += Number(command);

    if (stepsWanted < sumSteps) {
        console.log("Goal reached! Good job!");
        console.log(`${sumSteps - stepsWanted} steps over the goal!`);
    } else {
        stepsWanted -= sumSteps;
        console.log(`${stepsWanted} more steps to reach goal.`);
    }
}
walking(["125",
    "250",
    "4000",
    "30",
    "2678",
    "4682"])



