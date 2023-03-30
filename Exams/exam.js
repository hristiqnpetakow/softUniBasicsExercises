function exam(input) {
    let studentsNumber = Number(input[0]);
    let studentGrade = Number(input[1]);
    let bad = 0;
    let good = 0;
    let veryGood = 0;
    let exellent = 0;
    let sum = 0;

    for(let i = 1; i <= studentsNumber; i++) {
        studentGrade = Number(input[i]);
        if(studentGrade >= 5.00) {
            exellent++;
            sum += studentGrade;
        } else if(studentGrade >= 4 && studentGrade <= 4.99) {
            veryGood++;
            sum += studentGrade;
        } else if(studentGrade >= 3 && studentGrade <= 3.99) {
            good++;
            sum += studentGrade;
        } else {
            bad++;
            sum += studentGrade;
        }
    }
    let exellentPercent = (exellent / studentsNumber) * 100;
    let veryGoodPercent = (veryGood / studentsNumber) * 100;
    let goodPercent = (good / studentsNumber) * 100;
    let badPercent = (bad / studentsNumber) * 100;
    let avgPercent = sum / studentsNumber;

console.log(`Top students: ${exellentPercent.toFixed(2)}%`);
console.log(`Between 4.00 and 4.99: ${veryGoodPercent.toFixed(2)}%`);
console.log(`Between 3.00 and 3.99: ${goodPercent.toFixed(2)}%`);
console.log(`Fail: ${badPercent.toFixed(2)}%`);
console.log(`Average: ${avgPercent.toFixed(2)}`);
}
exam(["10",
"3.00",
"2.99",
"5.68",
"3.01",
"4",
"4",
"6.00",
"4.50",
"2.44",
"5"]);
