const isLastCharacterN = require('../src/strings/is-the-last-character-an-n')

describe('Last character', () => {
    it('should return true', () => {
        expect(isLastCharacterN("Aiden")).toEqual(true)
    })

    it('should return false', () => {
        expect(isLastCharacterN("Roxy")).toEqual(false)
    })

    it('should return false', () => {
        expect(isLastCharacterN("Bert")).toEqual(false)
    })

    it('should return true', () => {
        expect(isLastCharacterN("Dean")).toEqual(true)
    })

    it('should return true', () => {
        expect(isLastCharacterN("Ian")).toEqual(true)
    })

    it('should return true', () => {
        expect(isLastCharacterN("Brian")).toEqual(true)
    })

    it('should return false', () => {
        expect(isLastCharacterN("Daniel")).toEqual(false)
    })
})