function specialNumber(input) {
    let number = Number(input[0]);
    let realSpecNum = "";
    let finalResult = "";

    for(let currNumber = 1111; currNumber <= 9999; currNumber++) {
        let singleValue = currNumber + "";

        let firstNumber = Number(singleValue[0]);
        if(number % firstNumber === 0) {
            let value1 = firstNumber;
        } else {
            continue;
        }

        let secondNumber = Number(singleValue[1]);
        if(number % secondNumber === 0) {
            let value2 = secondNumber;
        } else {
            continue;
        }

        let thirdNumber = Number(singleValue[2]);
        if(number % thirdNumber === 0) {
            let value3 = thirdNumber;
        } else {
            continue;
        } 

        let forthNumber = Number(singleValue[3]);
        if(number % forthNumber === 0) {
            let value4 = forthNumber;
        } else {
            continue;
        }
        
        if((firstNumber || secondNumber || thirdNumber || forthNumber) !== true) {
            realSpecNum = 1000 * firstNumber + 100 * secondNumber +10 * thirdNumber + forthNumber;
            realSpecNum = realSpecNum.toString();
            finalResult += realSpecNum + " ";
        }
    }
    console.log(finalResult);
}
specialNumber(["3"]);