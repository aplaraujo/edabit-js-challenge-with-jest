const hasSpaces = require('../src/strings/check-string-for-spaces')

describe('Check spaces', () => {
    it('should return false', () => {
        expect(hasSpaces("hello")).toEqual(false)
    })

    it('should return true', () => {
        expect(hasSpaces("hello, world")).toEqual(true)
    })

    it('should return true', () => {
        expect(hasSpaces(" ")).toEqual(true)
    })

    it('should return false', () => {
        expect(hasSpaces("")).toEqual(false)
    })

    it('should return false', () => {
        expect(hasSpaces(",./!@#")).toEqual(false)
    })

    it('should return false', () => {
        expect(hasSpaces("Foo")).toEqual(false)
    })

    it('should return true', () => {
        expect(hasSpaces("Foo bar")).toEqual(true)
    })

    it('should return true', () => {
        expect(hasSpaces("Foo ")).toEqual(true)
    })

    it('should return false', () => {
        expect(hasSpaces(",./;'[]-=")).toEqual(false)
    })
})