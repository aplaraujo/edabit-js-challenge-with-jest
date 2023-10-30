const calculate = require("../src/strings/calculate-using-string-operation")

describe('String operation', () => {
    it('should return -76', () => {
        const num1 = 24
        const num2 = 100
        const stringOp = "-"
        const result = -76
        const op = calculate(num1, num2, stringOp)
        expect(op).toEqual(result)
    })

    it('should return -50', () => {
        const num1 = -20
        const num2 = -30
        const stringOp = "+"
        const result = -50
        const op = calculate(num1, num2, stringOp)
        expect(op).toEqual(result)
    })

    it('should return 300', () => {
        const num1 = 1500
        const num2 = 5
        const stringOp = "/"
        const result = 300
        const op = calculate(num1, num2, stringOp)
        expect(op).toEqual(result)
    })

    it('should return 114', () => {
        const num1 = 38
        const num2 = 3
        const stringOp = "*"
        const result = 114
        const op = calculate(num1, num2, stringOp)
        expect(op).toEqual(result)
    })

    it('should return 4', () => {
        const num1 = 49
        const num2 = 5
        const stringOp = "%"
        const result = 4
        const op = calculate(num1, num2, stringOp)
        expect(op).toEqual(result)
    })
})