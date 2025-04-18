function generateSeries(inputNumber: number) {
    let curNumber = 1
    let arrayToBePrinted: number[] = []
    for (let i = 0; i < inputNumber; i++) {
        arrayToBePrinted.push(curNumber)
        curNumber += 2
    }
    console.log(arrayToBePrinted.join(", "))
}

generateSeries(1)
generateSeries(2)
generateSeries(3)
generateSeries(4)
generateSeries(5)
