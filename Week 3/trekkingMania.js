function trekkingMania(input) {
    let groups = Number(input[0]);

    let groupMusala = 0;
    let groupMonblan = 0;
    let groupKilimandjaro = 0;
    let groupK2 = 0;
    let groupEverest = 0;
    let sum = 0;

    for (let i = 1; i <= groups; i++) {
        let numberOfGroups = Number(input[i]);
        sum += numberOfGroups;
        if (numberOfGroups <= 5 ){
            groupMusala += numberOfGroups;
        } else if(numberOfGroups <= 12) {
            groupMonblan += numberOfGroups;
        } else if(numberOfGroups <= 25) {
            groupKilimandjaro += numberOfGroups;
        } else if(numberOfGroups <= 40) {
            groupK2 += numberOfGroups;
        } else {
            groupEverest += numberOfGroups;
        }
    }
    groupMusala = (groupMusala / sum) * 100;
    groupMonblan = (groupMonblan / sum) * 100;
    groupKilimandjaro = (groupKilimandjaro / sum) * 100;
    groupK2 = (groupK2 / sum) * 100;
    groupEverest = (groupEverest / sum) * 100;

    console.log(`${groupMusala.toFixed(2)}%`);
    console.log(`${groupMonblan.toFixed(2)}%`);
    console.log(`${groupKilimandjaro.toFixed(2)}%`);
    console.log(`${groupK2.toFixed(2)}%`);
    console.log(`${groupEverest.toFixed(2)}%`);

}
trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])

