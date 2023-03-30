function andProcessors(input) {

    let numberOfProcessors = Number(input[0]);
    let numberOfWorkers = Number(input[1]);
    let workDays = Number(input[2]);

    let workHours = numberOfWorkers * workDays * 8;
    let workedTime = Math.floor(workHours / 3);

    if(numberOfProcessors < workedTime) {
        let procLeft = workedTime - numberOfProcessors;
        let sum = procLeft * 110.10;
        console.log(`Profit: -> ${sum.toFixed(2)} BGN`);
    } else {
        let neededProc = numberOfProcessors - workedTime;
        let totSum = neededProc * 110.10;
        console.log(`Losses: -> ${totSum.toFixed(2)} BGN`);
    }

}
andProcessors(["500",
"8",
"20"]);
// •	Първи ред – броят процесори, които трябва да се изработят – цяло число в интервала [1...500 000]
// •	Втори ред – броят служители – цяло число в интервала [1...1000]
// •	Трети ред – работните дни – цяло число в интервала [1...1000]

