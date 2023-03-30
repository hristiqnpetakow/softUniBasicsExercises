function sumOfTwoNumbers(input) {

    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let combinations = 0;
    let isFound = false;

    for(let i = firstNum; i <= secondNum; i++) {
        for(let j = firstNum; j <= secondNum; j++) {
            combinations++;
            if(i + j === magicNum) {
                isFound = true;
                console.log(`Combination N:${combinations} (${i} + ${j} = ${magicNum})`);
            } 
        }
        if(isFound) {
            break;
        }
    }
    if(!isFound) {
        console.log(`${combinations} combinations - neither equals ${magicNum}`);
    }
 
}
sumOfTwoNumbers(["88", 
"888", 
"2000"])


