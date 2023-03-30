function combinations(input) {
let validCombCounter = 0;
let number = Number(input[0]);

for(let firstNum = 0; firstNum <= number; firstNum++) {
    for(let secondNum = 0; secondNum <= number; secondNum++) {
        for(let thirthNum = 0; thirthNum <= number; thirthNum++) {
            if(firstNum + secondNum + thirthNum === number) {
                validCombCounter++;
            }
        }
        
    }
    
}

   console.log(validCombCounter);

}
combinations(["5"]);