const isBoiling = require("../src/strings/is-the-water-boiling")

describe('Water boiling', () => {
    it('should return true', () => {
        const temp = '212F'
        const result = true
        const op = isBoiling(temp)
        expect(op).toEqual(result)
    })

    it('should return true', () => {
        const temp = '100C'
        const result = true
        const op = isBoiling(temp)
        expect(op).toEqual(result)
    })

    it('should return false', () => {
        const temp = '0F'
        const result = false
        const op = isBoiling(temp)
        expect(op).toEqual(result)
    })

    it('should return false', () => {
        const temp = '-1F'
        const result = false
        const op = isBoiling(temp)
        expect(op).toEqual(result)
    })

    it('should return true', () => {
        const temp = '213F'
        const result = true
        const op = isBoiling(temp)
        expect(op).toEqual(result)
    })

    it('should return true', () => {
        const temp = '104C'
        const result = true
        const op = isBoiling(temp)
        expect(op).toEqual(result)
    })

    it('should return false', () => {
        const temp = '-10C'
        const result = false
        const op = isBoiling(temp)
        expect(op).toEqual(result)
    })

    it('should return false', () => {
        const temp = '120F'
        const result = false
        const op = isBoiling(temp)
        expect(op).toEqual(result)
    })
})