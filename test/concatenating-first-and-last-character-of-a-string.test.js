const firstLast = require("../src/strings/concatenating-first-and-last-character-of-a-string")

describe('First and last', () => {
    it('should return "gh" ', () => {
        expect(firstLast("ganesh")).toEqual("gh")
    })

    it('should return "ki" ', () => {
        expect(firstLast("kali")).toEqual("ki")
    })

    it('should return "sa"" ', () => {
        expect(firstLast("shiva")).toEqual("sa")
    })

    it('should return "vu" ', () => {
        expect(firstLast("vishnu")).toEqual("vu")
    })

    it('should return "da" ', () => {
        expect(firstLast("durga")).toEqual("da")
    })

    it('should return "ba" ', () => {
        expect(firstLast("brahma")).toEqual("ba")
    })
})