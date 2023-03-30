function tennisRanklist(input) {
    let numberOfTournaments = Number(input[0]);
    let startingPoints = Number(input[1]);

    let pointsWon = 0;
    let tournamentWon = 0;

    for (let i = 2; i <= numberOfTournaments + 1; i++) {
        let curResult = input[i];

        if (curResult === "W") {
            pointsWon += 2000;
            tournamentWon++;
        } else if (curResult === "F") {
            pointsWon += 1200;
        } else {
            pointsWon += 720;
        }
    }

    let totalPoints = startingPoints + pointsWon;
    console.log(`Final points: ${totalPoints}`);

    let avrgPoints = Math.floor(pointsWon / numberOfTournaments);
    console.log(`Average points: ${avrgPoints}`);

    let tournamentWonPercent = (tournamentWon / numberOfTournaments) * 100;
    console.log(`${tournamentWonPercent.toFixed(2)}%`);

}
tennisRanklist(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"]);
