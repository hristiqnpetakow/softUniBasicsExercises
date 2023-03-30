function sumNumbers(input) {
    let index = 0;
    let initialNum = Number(input[index]);
    index++;

    let nextNum = Number(input[index]);
    index++;

    let countNumber = 0;

    while(!(initialNum <= countNumber)) {
        countNumber += nextNum;
        nextNum = Number(input[index]);
        index++;
    }
console.log(countNumber);
}
sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"]);

