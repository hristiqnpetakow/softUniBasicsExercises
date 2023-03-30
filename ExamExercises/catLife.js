function catLife(input) {
    let species = input[0];
    let gender = input[1];
    let age = 0;

    if (species === "British Shorthair") {
        if (gender === "m") {
            age += 13;
            let ageInHumanYear = age * 12;
            let ageInCatYears = ageInHumanYear / 6;
            console.log(`${ageInCatYears} cat months`);
        } else {
            age += 14;
            ageInHumanYear = age * 12;
            ageInCatYears = ageInHumanYear / 6;
            console.log(`${ageInCatYears} cat months`);
        }
    } else if (species === "Siamese") {
        if (gender === "m") {
            age += 15;
            ageInHumanYear = age * 12;
            ageInCatYears = ageInHumanYear / 6;
            console.log(`${ageInCatYears} cat months`);
        } else {
            age += 16;
            ageInHumanYear = age * 12;
            ageInCatYears = ageInHumanYear / 6;
            console.log(`${ageInCatYears} cat months`);
        }
    } else if (species === "Persian") {
        if (gender === "m") {
            age += 14;
            ageInHumanYear = age * 12;
            ageInCatYears = ageInHumanYear / 6;
            console.log(`${ageInCatYears} cat months`);
        } else {
            age += 15;
            ageInHumanYear = age * 12;
            ageInCatYears = ageInHumanYear / 6;
            console.log(`${ageInCatYears} cat months`);
        }
    } else if (species === "Ragdoll") {
        if (gender === "m") {
            age += 16;
            ageInHumanYear = age * 12;
            ageInCatYears = ageInHumanYear / 6;
            console.log(`${ageInCatYears} cat months`);
        } else {
            age += 17;
            ageInHumanYear = age * 12;
            ageInCatYears = ageInHumanYear / 6;
            console.log(`${ageInCatYears} cat months`);
        }
    } else if (species === "American Shorthair") {
        if (gender === "m") {
            age += 12;
            ageInHumanYear = age * 12;
            ageInCatYears = ageInHumanYear / 6;
            console.log(`${ageInCatYears} cat months`);
        } else {
            age += 13;
            ageInHumanYear = age * 12;
            ageInCatYears = ageInHumanYear / 6;
            console.log(`${ageInCatYears} cat months`);
        }
    } else if (species === "Siberian") {
        if (gender === "m") {
            age += 11;
            ageInHumanYear = age * 12;
            ageInCatYears = ageInHumanYear / 6;
            console.log(`${ageInCatYears} cat months`);
        } else {
            age += 12;
            ageInHumanYear = age * 12;
            ageInCatYears = ageInHumanYear / 6;
            console.log(`${ageInCatYears} cat months`);
        }
    } else {
        console.log(`${species} is invalid cat!`);
    }
   

}
catLife(["Persian",
    "m"]);
