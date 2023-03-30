function uniquePINCodes(input) {
    let firstMaxNumber = Number(input[0]);
    let secondMaxNumber = Number(input[1]);
    let thirdMaxNumber = Number(input[2]);
    let pin = "";
    let pin1 = 0;
    let pin2 = 0;
    let pin3 = 0;
 
    for (let num1 = 1; num1 <= firstMaxNumber; num1++) {
        if (num1 % 2 === 0) {
            pin1 = num1 + " ";
 
                for (let num2 = 1; num2 <= secondMaxNumber; num2++) {
                    if (num2 === 2) {
                        pin2 = num2 + " ";
                    } else if (num2 === 3) {
                        pin2 = num2 + " ";
                    } else if (num2 === 5) {
                        pin2 = num2 + " ";
                    } else if (num2 === 7) {
                        pin2 = num2 + " ";
                    } else {
                        continue;
                    }
 
                    for (let num3 = 1; num3 <= thirdMaxNumber; num3++) {
 
                        if (num3 % 2 === 0) {
                            pin3 = num3 + " ";
                            pin = pin1 + pin2 + pin3;
                            console.log(pin)
                            pin = "";
                        }
                    }
            }
 
        }
 
    }
 
    console.log(pin)
    pin = "";
}
uniquePINCodes(["3", "5", "5"])