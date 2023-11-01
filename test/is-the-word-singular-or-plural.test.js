const isPlural = require('../src/strings/is-the-word-singular-or-plural')

describe('Singular or plural', () => {
    it('should return true', () => {
        expect(isPlural('dudes')).toEqual(true)
    })

    it('should return true', () => {
        expect(isPlural('flowers')).toEqual(true)
    })

    it('should return true', () => {
        expect(isPlural('checks')).toEqual(true)
    })

    it('should return true', () => {
        expect(isPlural('varies')).toEqual(true)
    })

    it('should return true', () => {
        expect(isPlural('efforts')).toEqual(true)
    })

    it('should return false', () => {
        expect(isPlural('mood')).toEqual(false)
    })

    it('should return false', () => {
        expect(isPlural('whiteboard')).toEqual(false)
    })

    it('should return false', () => {
        expect(isPlural('cow')).toEqual(false)
    })

    it('should return false', () => {
        expect(isPlural('word')).toEqual(false)
    })

    it('should return false', () => {
        expect(isPlural('love')).toEqual(false)
    })

    it('should return false', () => {
        expect(isPlural('silly')).toEqual(false)
    })
})