const moodToday = require("../src/strings/default-mood")

describe('Default mood', () => {
    it('should return "Today, I am feeling happy"', () => {
        const str = "happy"
        const result = "Today, I am feeling happy"
        const op = moodToday(str)
        expect(op).toEqual(result)
    })

    it('should return "Today, I am feeling sad"', () => {
        const str = "sad"
        const result = "Today, I am feeling sad"
        const op = moodToday(str)
        expect(op).toEqual(result)
    })

    it('should return "Today, I am feeling very happy"', () => {
        const str = "very happy"
        const result = "Today, I am feeling very happy"
        const op = moodToday(str)
        expect(op).toEqual(result)
    })

    it('should return "Today, I am feeling rather empty inside"', () => {
        const str = "rather empty inside"
        const result = "Today, I am feeling rather empty inside"
        const op = moodToday(str)
        expect(op).toEqual(result)
    })

    it('should return "Today, I am feeling confused"', () => {
        const str = "confused"
        const result = "Today, I am feeling confused"
        const op = moodToday(str)
        expect(op).toEqual(result)
    })

    it('should return "Today, I am feeling neutral"', () => {
        const str = ""
        const result = "Today, I am feeling neutral"
        const op = moodToday(str)
        expect(op).toEqual(result)
    })
})