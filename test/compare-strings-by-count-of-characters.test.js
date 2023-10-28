const comp = require("../src/strings/compare-strings-by-count-of-characters")

describe('Compare string length', () => {
    it('shoud return true', () => {
        const str1 = "AB"
        const str2 = "CD"
        const result = true
        const op = comp(str1, str2)
        expect(op).toEqual(result)
    })

    it('shoud return false', () => {
        const str1 = "ABC"
        const str2 = "DE"
        const result = false
        const op = comp(str1, str2)
        expect(op).toEqual(result)
    })

    it('shoud return false', () => {
        const str1 = "hello"
        const str2 = "edabit"
        const result = false
        const op = comp(str1, str2)
        expect(op).toEqual(result)
    })

    it('shoud return true', () => {
        const str1 = "meow"
        const str2 = "woof"
        const result = true
        const op = comp(str1, str2)
        expect(op).toEqual(result)
    })

    it('shoud return false', () => {
        const str1 = "jrnvjrnnt"
        const str2 = "cvjknfjvmfvnfjn"
        const result = false
        const op = comp(str1, str2)
        expect(op).toEqual(result)
    })

    it('shoud return false', () => {
        const str1 = "jkvnjrt"
        const str2 = "krnf"
        const result = false
        const op = comp(str1, str2)
        expect(op).toEqual(result)
    })

    it('shoud return true', () => {
        const str1 = "Facebook"
        const str2 = "Snapchat"
        const result = true
        const op = comp(str1, str2)
        expect(op).toEqual(result)
    })
})