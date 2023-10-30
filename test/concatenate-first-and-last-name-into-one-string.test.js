const concatName = require("../src/strings/concatenate-first-and-last-name-into-one-string")

describe('Concatenate first and last', () => {
    it('should return "Doe, John"', () => {
        const first = "John"
        const last = "Doe"
        const result = "Doe, John"
        const op = concatName(first, last)
        expect(op).toEqual(result)
    })

    it('should return "Last, First"', () => {
        const first = "First"
        const last = "Last"
        const result = "Last, First"
        const op = concatName(first, last)
        expect(op).toEqual(result)
    })

    it('should return "B, A"', () => {
        const first = "A"
        const last = "B"
        const result = "B, A"
        const op = concatName(first, last)
        expect(op).toEqual(result)
    })
})