const oddOrEven = require("../src/strings/is-the-string-odd-or-even")

describe('String length', () => {
    it('should return true', () => {
        const str = "apples"
        const result = true
        const op = oddOrEven(str)
        expect(op).toEqual(result)
    })

    it('should return true', () => {
        const str = "banana"
        const result = true
        const op = oddOrEven(str)
        expect(op).toEqual(result)
    })

    it('should return true', () => {
        const str = "cherry"
        const result = true
        const op = oddOrEven(str)
        expect(op).toEqual(result)
    })

    it('should return false', () => {
        const str = "mango"
        const result = false
        const op = oddOrEven(str)
        expect(op).toEqual(result)
    })

    it('should return false', () => {
        const str = "peach"
        const result = false
        const op = oddOrEven(str)
        expect(op).toEqual(result)
    })

    it('should return false', () => {
        const str = "pears"
        const result = false
        const op = oddOrEven(str)
        expect(op).toEqual(result)
    })
})