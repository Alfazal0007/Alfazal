enum typeOfOperation {
    add = "add",
    sub = "sub",
    mul = "mul",
    div = "div"
}

class Calculator {
    private add(a: number, b: number): number {
        return a + b;
    }

    private sub(a: number, b: number): number {
        return a - b;
    }

    private mul(a: number, b: number): number {
        return a * b;
    }

    private div(a: number, b: number): number {
        if (b == 0)
            return NaN
        return a / b;
    }

    compute(a: number, b: number, operation: string) {
        switch (operation) {
            case typeOfOperation.add:
                return this.add(a, b)
            case typeOfOperation.sub:
                return this.sub(a, b)
            case typeOfOperation.mul:
                return this.mul(a, b)
            case typeOfOperation.div:
                return this.div(a, b)
            default:
                return NaN
        }
    }
}

let c = new Calculator()

let addResult = c.compute(50, 25, "add")
console.log({ addResult })

let subResult = c.compute(50, 25, "sub")
console.log({ subResult })

let mulResult = c.compute(50, 25, "mul")
console.log({ mulResult })

let divResult = c.compute(50, 25, "div")
console.log({ divResult })
