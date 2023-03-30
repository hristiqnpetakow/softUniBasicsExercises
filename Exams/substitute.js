function substitute(input) {
    let number1 = Number(input[0]);
    let number2 = Number(input[1]);
    let number3 = Number(input[2]);
    let number4 = Number(input[3]);
    let count = 0;
    let buff = "";

    for (let i = number1; i <= 8; i++) {
        if (i % 2 == 0) {
            for (let j = 9; j >= number2; j--) {
                if (j % 2 == 1) {
                    for (let k = number3; k <= 8; k++) {
                        if (k % 2 == 0) {
                            for (let l = 9; l >= number4; l--) {
                                if (l % 2 == 1) {
                                    buff = '' + i + j + " - " + k + l;
                                    if (i == k && j == l) {
                                        console.log("Cannot change the same player.");
                                    } else {
                                        console.log(buff);
                                        count++;
                                        if (count == 6) {
                                            return;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
substitute(["7",
    "6",
    "8",
    "5"]);
