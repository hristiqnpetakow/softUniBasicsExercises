function examPreparation(input) {
    let index = 0;
    let maxPoorGrade = Number(input[index]);
    index++;

    let problemName = input[index];
    index++;

    let problemGrade = Number(input[index]);
    index++;

    let poorGradeCount = 0;
    let gradesCounter = 0;
    let gradesSum = 0;
    let lastProblem = "";

    while(problemName !== "Enough") {
        lastProblem = problemName;
        if(problemGrade <= 4) {
            poorGradeCount++;
        }
        if(poorGradeCount === maxPoorGrade) {
            console.log(`You need a break, ${poorGradeCount} poor grades.`);
            return;

        }

        gradesCounter++;
        gradesSum += problemGrade;
        
        problemName = input[index];
        index++;

        problemGrade = Number(input[index]);
        index++;
    }

    let avrgNumber = gradesSum / gradesCounter;
    console.log(`Average score: ${avrgNumber.toFixed(2)}`);
    console.log(`Number of problems: ${gradesCounter}`);
    console.log(`Last problem: ${lastProblem}`);
}
examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"]);
