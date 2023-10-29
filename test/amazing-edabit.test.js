const amazingEdabit = require("../src/strings/amazing-edabit")

describe('Amazing edabit', () => {
    it('should return "edabit is amazing."', () => {
        const str = "edabit is amazing."
        const result = "edabit is amazing."
        const op = amazingEdabit(str)
        expect(op).toEqual(result)
    })

    it('should return "Mubashir is not amazing."', () => {
        const str = "Mubashir is amazing."
        const result = "Mubashir is not amazing."
        const op = amazingEdabit(str)
        expect(op).toEqual(result)
    })

    it('should return "Trump is not amazing."', () => {
        const str = "Trump is amazing."
        const result = "Trump is not amazing."
        const op = amazingEdabit(str)
        expect(op).toEqual(result)
    })

    it('should return "Infinity is not amazing."', () => {
        const str = "Infinity is amazing."
        const result = "Infinity is not amazing."
        const op = amazingEdabit(str)
        expect(op).toEqual(result)
    })

    it('should return "Mubashir and edabit are amazing."', () => {
        const str = "Mubashir and edabit are amazing."
        const result = "Mubashir and edabit are amazing."
        const op = amazingEdabit(str)
        expect(op).toEqual(result)
    })

    it('should return "Matt is not amazing."', () => {
        const str = "Matt is amazing."
        const result = "Matt is not amazing."
        const op = amazingEdabit(str)
        expect(op).toEqual(result)
    })

    it('should return "Helen is not amazing."', () => {
        const str = "Helen is amazing."
        const result =  "Helen is not amazing."
        const op = amazingEdabit(str)
        expect(op).toEqual(result)
    })

    it('should return "Python and edabit are amazing."', () => {
        const str = "Python and edabit are amazing."
        const result = "Python and edabit are amazing."
        const op = amazingEdabit(str)
        expect(op).toEqual(result)
    })

    it('should return "C++ is not amazing."', () => {
        const str = "C++ is amazing."
        const result = "C++ is not amazing."
        const op = amazingEdabit(str)
        expect(op).toEqual(result)
    })

    it('should return "javascript is not amazing."', () => {
        const str = "javascript is amazing."
        const result = "javascript is not amazing."
        const op = amazingEdabit(str)
        expect(op).toEqual(result)
    })

    it('should return "java is not amazing."', () => {
        const str = "java is amazing."
        const result = "java is not amazing."
        const op = amazingEdabit(str)
        expect(op).toEqual(result)
    })

    it('should return "ruby is not amazing."', () => {
        const str = "ruby is amazing."
        const result = "ruby is not amazing."
        const op = amazingEdabit(str)
        expect(op).toEqual(result)
    })

    it('should return "SQL is not amazing."', () => {
        const str = "SQL is amazing."
        const result = "SQL is not amazing."
        const op = amazingEdabit(str)
        expect(op).toEqual(result)
    })

    it('should return "CSS is not amazing."', () => {
        const str = "CSS is amazing."
        const result = "CSS is not amazing."
        const op = amazingEdabit(str)
        expect(op).toEqual(result)
    })

    it('should return "Pakistan is amazing. edabit"', () => {
        const str = "Pakistan is amazing. edabit"
        const result = "Pakistan is amazing. edabit"
        const op = amazingEdabit(str)
        expect(op).toEqual(result)
    })

    it('should return "You and edabit are amazing."', () => {
        const str = "You and edabit are amazing."
        const result = "You and edabit are amazing."
        const op = amazingEdabit(str)
        expect(op).toEqual(result)
    })

    it('should return "Matt and edabit are amazing."', () => {
        const str = "Matt and edabit are amazing."
        const result = "Matt and edabit are amazing."
        const op = amazingEdabit(str)
        expect(op).toEqual(result)
    })

    it('should return "Helen and edabit are amazing."', () => {
        const str = "Helen and edabit are amazing."
        const result = "Helen and edabit are amazing."
        const op = amazingEdabit(str)
        expect(op).toEqual(result)
    })

    it('should return "Everyone is not amazing."', () => {
        const str = "Everyone is amazing."
        const result = "Everyone is not amazing."
        const op = amazingEdabit(str)
        expect(op).toEqual(result)
    })

    it('should return "Swift and edabit are amazing."', () => {
        const str = "Swift and edabit are amazing."
        const result = "Swift and edabit are amazing."
        const op = amazingEdabit(str)
        expect(op).toEqual(result)
    })
})