const arrayToString = require('../src/strings/convert-an-array-to-string')

describe('Array to string', () => {
    it('should return "123456"', () => {
        const arr = [1, 2, 3, 4, 5, 6]
        const result = "123456"
        const op = arrayToString(arr)
        expect(op).toEqual(result)
    })

    it('should return "abcdef"', () => {
        const arr = ["a", "b", "c", "d", "e", "f"]
        const result = "abcdef"
        const op = arrayToString(arr)
        expect(op).toEqual(result)
    })

    it('should return "123asdAAAA"', () => {
        const arr = [1, 2, 3, "a", "s", "dAAAA"]
        const result = "123asdAAAA"
        const op = arrayToString(arr)
        expect(op).toEqual(result)
    })

    it('should return "123asd"', () => {
        const arr = [1, 2, 3, 'a', 's', 'd']
        const result = "123asd"
        const op = arrayToString(arr)
        expect(op).toEqual(result)
    })

    it('should return "asdfer123450"', () => {
        const arr = ['a', 's', 'd', 'f', 'e', 'r', 1, 2, 3, 4, 5, 0]
        const result = "asdfer123450"
        const op = arrayToString(arr)
        expect(op).toEqual(result)
    })

    it('should return "ADFGHYTRNNHJK"', () => {
        const arr = ['A', 'D', 'F', 'G', 'H', 'Y', 'TR', 'NNHJK']
        const result = "ADFGHYTRNNHJK"
        const op = arrayToString(arr)
        expect(op).toEqual(result)
    })
})