const { intToString, stringToInt } = require("../src/strings/string-and-number-conversions")

describe('conversion', () => {
    it('should return "4"', () => {
        const num = 4
        const result = "4"
        const op = intToString(num)
        expect(op).toEqual(result)
    })

    it('should return "65"', () => {
        const num = 65
        const result = "65"
        const op = intToString(num)
        expect(op).toEqual(result)
    })

    it('should return "29348"', () => {
        const num = 29348
        const result = "29348"
        const op = intToString(num)
        expect(op).toEqual(result)
    })

    it('should return "49583908545"', () => {
        const num = 49583908545
        const result = "49583908545"
        const op = intToString(num)
        expect(op).toEqual(result)
    })

    it('should return 4', () => {
        const num = '4'
        const result = 4
        const op = stringToInt(num)
        expect(op).toEqual(result)
    })

    it('should return 65', () => {
        const num = '65'
        const result = 65
        const op = stringToInt(num)
        expect(op).toEqual(result)
    })

    it('should return 29348', () => {
        const num = '29348'
        const result = 29348
        const op = stringToInt(num)
        expect(op).toEqual(result)
    })

    it('should return 49583908545', () => {
        const num = '49583908545'
        const result = 49583908545
        const op = stringToInt(num)
        expect(op).toEqual(result)
    })
})