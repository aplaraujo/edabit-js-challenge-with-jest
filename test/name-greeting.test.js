const helloName = require("../src/strings/name-greeting")

describe("Greetings", () => {
    it('should return "Hello Gerald!"', () => {
        const str = "Gerald"
        const result = "Hello Gerald!"
        const op = helloName(str)
        expect(op).toEqual(result)
    })

    it('should return "Hello Fatima!"', () => {
        const str = "Fatima"
        const result = "Hello Fatima!"
        const op = helloName(str)
        expect(op).toEqual(result)
    })

    it('should return "Hello Ed!"', () => {
        const str = "Ed"
        const result = "Hello Ed!"
        const op = helloName(str)
        expect(op).toEqual(result)
    })

    it('should return "Hello Tiffany!"', () => {
        const str = "Tiffany"
        const result = "Hello Tiffany!"
        const op = helloName(str)
        expect(op).toEqual(result)
    })
})