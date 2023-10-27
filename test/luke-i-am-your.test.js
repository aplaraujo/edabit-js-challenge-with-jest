const relationToLuke = require('../src/strings/luke-i-am-your')

describe("Luke's family", () => {
    it('should return "Luke, I am your father."', () => {
        const str = "Darth Vader"
        const result = "Luke, I am your father."
        const op = relationToLuke(str)
        expect(op).toEqual(result)
    })

    it('should return "Luke, I am your sister."', () => {
        const str = "Leia"
        const result = "Luke, I am your sister."
        const op = relationToLuke(str)
        expect(op).toEqual(result)
    })

    it('should return "Luke, I am your brother in law."', () => {
        const str = "Han"
        const result = "Luke, I am your brother in law."
        const op = relationToLuke(str)
        expect(op).toEqual(result)
    })

    it('should return "Luke, I am your droid."', () => {
        const str = "R2D2"
        const result = "Luke, I am your droid."
        const op = relationToLuke(str)
        expect(op).toEqual(result)
    })
})