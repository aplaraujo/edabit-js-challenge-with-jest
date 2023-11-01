const findIndex = require('../src/strings/find-the-index')

describe('Find the index', () => {
    it('should return 2', () => {
        const arr = ["hi", "edabit", "fgh", "abc"]
        const str = "fgh"
        const result = 2
        const op = findIndex(arr, str)
        expect(op).toEqual(result)
    })

    it('should return 1', () => {
        const arr = ["Red", "blue", "Blue", "Green"]
        const str = "blue"
        const result = 1
        const op = findIndex(arr, str)
        expect(op).toEqual(result)
    })

    it('should return 3', () => {
        const arr = ["a", "g", "y", "d"]
        const str = "d"
        const result = 3
        const op = findIndex(arr, str)
        expect(op).toEqual(result)
    })

    it('should return 0', () => {
        const arr = ["Pineapple", "Orange", "Grape", "Apple"]
        const str = "Pineapple"
        const result = 0
        const op = findIndex(arr, str)
        expect(op).toEqual(result)
    })

    it('should return 3', () => {
        const arr = ['abc', 'ghj', 'banana', 'grape']
        const str = "grape"
        const result = 3
        const op = findIndex(arr, str)
        expect(op).toEqual(result)
    })

    it('should return 5', () => {
        const arr = ['a', 'b', 'c', 'd', 'e', 'f']
        const str = "f"
        const result = 5
        const op = findIndex(arr, str)
        expect(op).toEqual(result)
    })

    it('should return 1', () => {
        const arr = ['hi', 'edabit.com', 'testcase', 'validstring']
        const str = "edabit.com"
        const result = 1
        const op = findIndex(arr, str)
        expect(op).toEqual(result)
    })
})