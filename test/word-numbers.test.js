const word = require("../src/strings/word-numbers")

describe('Word numbers', () => {
    it('should return 1', () => {
        const str = "one"
        const result = 1
        const op = word(str)
        expect(op).toEqual(result)
    })

    it('should return 2', () => {
        const str = "two"
        const result = 2
        const op = word(str)
        expect(op).toEqual(result)
    })

    it('should return 3', () => {
        const str = "three"
        const result = 3
        const op = word(str)
        expect(op).toEqual(result)
    })

    it('should return 4', () => {
        const str = "four"
        const result = 4
        const op = word(str)
        expect(op).toEqual(result)
    })

    it('should return 5', () => {
        const str = "five"
        const result = 5
        const op = word(str)
        expect(op).toEqual(result)
    })

    it('should return 6', () => {
        const str = "six"
        const result = 6
        const op = word(str)
        expect(op).toEqual(result)
    })

    it('should return 7', () => {
        const str = "seven"
        const result = 7
        const op = word(str)
        expect(op).toEqual(result)
    })

    it('should return 8', () => {
        const str = "eight"
        const result = 8
        const op = word(str)
        expect(op).toEqual(result)
    })

    it('should return 9', () => {
        const str = "nine"
        const result = 9
        const op = word(str)
        expect(op).toEqual(result)
    })

    it('should return 0', () => {
        const str = "zero"
        const result = 0
        const op = word(str)
        expect(op).toEqual(result)
    })
})