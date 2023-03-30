function grandpa(input) {
    let index = 0
    let daysCount = Number(input[index])
    index++

    let totalLiters = 0
    let totalDegrees = 0

    for (i = 1; i <= daysCount; i++) {
        let liters = Number(input[index])
        index++

        totalLiters += liters

        let degrees = Number(input[index])
        index++
        let currDegrees = liters * degrees

        totalDegrees += currDegrees

    }

    let finalDegrees = totalDegrees / totalLiters

    console.log(`Liter: ${totalLiters.toFixed(2)}`)
    console.log(`Degrees: ${finalDegrees.toFixed(2)}`)

    if (finalDegrees < 38) {
        console.log("Not good, you should baking!")
    } else if (finalDegrees <= 42) {
        console.log("Super!")
    } else {
        console.log("Dilution with distilled water!")
    }
}