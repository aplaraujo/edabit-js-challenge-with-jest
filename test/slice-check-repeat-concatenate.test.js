const frontThree = require('../src/strings/slice-check-repeat-concatenate')

describe('Slice and repeat', () => {
    it('should return "PytPytPyt"', () => {
        expect(frontThree('Python')).toEqual("PytPytPyt")
    })

    it('should return "ChoChoCho"', () => {
        expect(frontThree('Chocolate')).toEqual("ChoChoCho")
    })

    it('should return "duhduhduh"', () => {
        expect(frontThree('duh')).toEqual("duhduhduh")
    })

    it('should return ""', () => {
        expect(frontThree('')).toEqual('')
    })

    it('should return "SpoSpoSpo"', () => {
        expect(frontThree('Sportsmanship')).toEqual("SpoSpoSpo")
    })

    it('should return "ababab"', () => {
        expect(frontThree('ab')).toEqual("ababab")
    })

    it('should return "aaa"', () => {
        expect(frontThree('a')).toEqual('aaa')
    })
})