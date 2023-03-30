function cake(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;

    let length = Number(input[index]);
    index++;

    let totalCake = width * length;

    let command = input[index];
    index++;

    while(command !== "STOP") {
        let cakePieces = Number(command);

        totalCake -= cakePieces;

        if(totalCake <= 0) {
            console.log(`No more cake left! You need ${Math.abs(totalCake)} pieces more.`);
            break;
        }
        command = input[index];
        index++;
    }

    if(command === "STOP") {
        console.log(`${totalCake} pieces are left.`);
    }
}
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"]);
