function salary(input) {

    let tabsOpen = Number(input[0]);
    let salary = Number(input[1]);
    
    for(let i = 2; i <= tabsOpen +1; i++) {
        let currentSite = input[i];
        if (currentSite === "Facebook" ) {
            salary -= 150;
        } else if (currentSite === "Instagram") {
            salary -= 100;
        } else if (currentSite === "Reddit") {
            salary -= 50;
        }
    }
        if(salary <= 0) {
            console.log("You have lost your salary.");
        } else {
            console.log(salary);
        }
}
salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])


