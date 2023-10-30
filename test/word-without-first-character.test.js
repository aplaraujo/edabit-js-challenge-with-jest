const newWord = require("../src/strings/word-without-first-character")

describe('Take first character', () => {
    it('should return "okhara"', () => {
        const str = "pokhara"
        const result = "okhara"
        const op = newWord(str)
        expect(op).toEqual(result)
    })

    it('should return "iratnagar"', () => {
        const str = "biratnagar"
        const result = "iratnagar"
        const op = newWord(str)
        expect(op).toEqual(result)
    })

    it('should return "epal"', () => {
        const str = "nepal"
        const result = "epal"
        const op = newWord(str)
        expect(op).toEqual(result)
    })

    it('should return "amak"', () => {
        const str = "damak"
        const result = "amak"
        const op = newWord(str)
        expect(op).toEqual(result)
    })

    it('should return "tahari"', () => {
        const str = "itahari"
        const result = "tahari"
        const op = newWord(str)
        expect(op).toEqual(result)
    })

    it('should return "asuwa"', () => {
        const str = "rasuwa"
        const result = "asuwa"
        const op = newWord(str)
        expect(op).toEqual(result)
    })
})