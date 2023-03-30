function bestPlayer(input) {
    let index = 0;

    let command = input[index];
    index++;

    let numberOfGoals = 0;
    let nameOfThePlayer = "";

    while(command !== "END") {
        let playerName = command;

        let goals = Number(input[index]);
        index++;
        
        if(goals > numberOfGoals) {
            numberOfGoals = goals;
            playerName = nameOfThePlayer;
        }
        if(numberOfGoals >= 10) {
            break;
        }

        
        command = input[index];
        index++;
    }

}
bestPlayer
(["Neymar",
 "2",
"Ronaldo",
"1",
"Messi",
"3",
"END"]);
