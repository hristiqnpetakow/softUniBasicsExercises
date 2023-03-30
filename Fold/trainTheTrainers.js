function trainTheTrainers(input) {
    let index = 0;

    let gradesCounter = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let totalGradeSum = 0;
    let presentCounter = 0;
    
    while(command !== "Finish") {
        let presentName = command;
        let gradeSum = 0;

        for (let currGradeCount = 1; currGradeCount <= gradesCounter; currGradeCount++) {
            let currGrade = Number(input[index]);
            index++;

            gradeSum += currGrade;
        }

        let avgGrade = gradeSum / gradesCounter;
        console.log(`${presentName} - ${avgGrade.toFixed(2)}.`);

        totalGradeSum += avgGrade;
        presentCounter++;

        command = input[index];
        index++;
    }
    let totalAvgGrade = totalGradeSum / presentCounter;
    console.log(`Student's final assessment is ${totalAvgGrade.toFixed(2)}.`);
}
trainTheTrainers(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"]);
