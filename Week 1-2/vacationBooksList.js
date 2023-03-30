function vacationBooksList(input) {
    let numberOfPages = Number(input[0]);
    let pages = Number(input[1]);
    let numberOfDays = Number(input[2]);

    let theWholeTime = numberOfPages / pages;
    let neededHours = theWholeTime / numberOfDays;

    console.log(neededHours);

}
vacationBooksList(["212","20","2"]
)