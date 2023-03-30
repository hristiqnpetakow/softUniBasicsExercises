function cinemaTickets(input) {
    let index = 0;

    let command = input[index];
    index++;

    let studentTick = 0;
    let standardTick = 0;
    let kidTick = 0;

    while(command !== "Finish") {
        let movieTitle = command;
        let freeSpaces = Number(input[index]);
        index++;

        let command1 = input[index];
        index++;

        let spacesTaken = 0;

        while(command1 !== "End") {
            let typeOfTick = command1;

            if(typeOfTick === "student") {
                studentTick++;
            } else if(typeOfTick === "standard") {
                standardTick++;
            } else {
                kidTick++;
            }
            spacesTaken++;
            if(spacesTaken === freeSpaces) {
                break;
            }
            command1 = input[index];
            index++;
        }
        let fullPerc = (spacesTaken / freeSpaces) * 100;
        console.log(`${movieTitle} - ${fullPerc.toFixed(2)}% full.`);

        command = input[index];
        index++;
    }
    let totalTick = studentTick + standardTick + kidTick;
    let studentTickPercent = (studentTick / totalTick) * 100;
    let standardTickPercent = (standardTick / totalTick) * 100;
    let kidTickPercent = (kidTick / totalTick) * 100;

    console.log(`Total tickets: ${totalTick}`);
    console.log(`${studentTickPercent.toFixed(2)}% student tickets.`);
    console.log(`${standardTickPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidTickPercent.toFixed(2)}% kids tickets.`);
}
cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"]);
