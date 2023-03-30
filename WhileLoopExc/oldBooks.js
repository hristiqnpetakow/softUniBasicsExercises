function oldBooks(input) {
    let index = 0;

    let bookSearched = input[index];
    index++;

    let command = input[index];
    index++;

    let checkedBooks = 0;
    
    while(command !== "No More Books") {
        if(command === bookSearched) {
            console.log(`You checked ${checkedBooks} books and found it.`);
            break;
        }
        checkedBooks++;
        command = input[index];
        index++;
    }
    if (command === "No More Books") {
        console.log("The book you search is not here!");
        console.log(`You checked ${checkedBooks} books.`);
    }
}
oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])

