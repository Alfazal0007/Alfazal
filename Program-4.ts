function countMultiples(arr: number[]) {
    let map: Map<number, number> = new Map();
    for (let i = 1; i <= 9; i++) {
        map.set(i, 0)
    }

    arr.forEach((num) => {
        for (let i = 1; i <= 9; i++) {
            if (num % i == 0) {
                let curTotal = map.get(i) as number
                map.set(i, curTotal + 1)
            }
        }
    })

    console.log(Object.fromEntries(map));
}

let arr = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30]
countMultiples(arr)
