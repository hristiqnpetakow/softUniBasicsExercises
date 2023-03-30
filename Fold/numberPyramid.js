function numberPyramid(input) {
    let number = Number(input[0]);
    let curr = 1;
    let currLine = "";
    let isBigger = false;

    for(let row = 1; row <= number; row++){
        for(let cow = 1; cow <= row; cow++){
            if(curr > number) {
                isBigger = true;
                break;
            }
            currLine += curr + " ";
            curr++;
        }
        console.log(currLine);
        currLine = "";
        if(isBigger) {
            break;
        }
    }

}
numberPyramid(["7"]);