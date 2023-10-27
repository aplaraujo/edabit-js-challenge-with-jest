const greeting = require("../src/strings/buggy-code-four")

describe("Hello", () => {
    it('should return "Hello, Matt!"', () => {
        const str = "Matt"
        const result = "Hello, Matt!"
        const op = greeting(str)
        expect(op).toEqual(result)
    })

    it('should return "Hello, Helen!"', () => {
        const str = "Helen"
        const result = "Hello, Helen!"
        const op = greeting(str)
        expect(op).toEqual(result)
    })

    it('should return "Hello, my Love!"', () => {
        const str = "Mubashir"
        const result = "Hello, my Love!"
        const op = greeting(str)
        expect(op).toEqual(result)
    })
})