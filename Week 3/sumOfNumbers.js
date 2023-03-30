function sumOfNumbers(input) {
    let numAsText = input[0] + "";
    let sum = 0;
     for (let i = 0; i < numAsText.length; i++) {
        let number = Number(numAsText[i]);
        sum += number;
     }
     console.log(`The sum of the digits is:${sum}`)
}
sumOfNumbers(["1234"])