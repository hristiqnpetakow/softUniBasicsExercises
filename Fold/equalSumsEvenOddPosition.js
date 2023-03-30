function equalSumsEvenOddPosition(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let result = "";

    for(let currNum = startNum; currNum <= endNum; currNum++) {
        let oddSum = 0;
        let evenSum = 0;

        let currNumAsStr = currNum.toString();

        for (let index = 0; index < currNumAsStr.length; index++) {
            let currDigit = Number(currNumAsStr[index]);
            let position = index + 1;

            if(position % 2 === 0) {
                evenSum += currDigit;
            } else {
                oddSum += currDigit;
            }
        }
        if(oddSum === evenSum) {
            result += currNumAsStr + " ";
        }
    }
    console.log(result);
}
equalSumsEvenOddPosition(["100000",
"100050"]);
