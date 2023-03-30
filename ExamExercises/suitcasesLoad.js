function suitcasesLoad(input) {
    let index = 0;
    let capacity = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let counter = 0;

    while (command !== "End") {

        let count = Number(command);

        if (capacity < count) {
            console.log("No more space!");
            console.log(`Statistic: ${counter} suitcases loaded.`);
            break;

        }

        capacity -= count;
        counter++;


        if (counter === 3) {
            capacity -= count * 0.10;
        }

        
        command = input[index];
        index++;
    }

    if (command === "End") {
        console.log("Congratulations! All suitcases are loaded!");
        console.log(`Statistic: ${counter} suitcases loaded.`);;
    }
}
suitcasesLoad(["550",
    "300",
    "252",
    "72",
    "End"]);
