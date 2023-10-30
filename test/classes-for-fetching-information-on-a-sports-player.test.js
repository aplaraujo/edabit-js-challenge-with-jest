const Player = require("../src/strings/classes-for-fetching-information-on-a-sports-player")

describe("Sports player", () => {
    it('should return "Patrick Mahomes is age 24"', () => {
        const playerName = 'Patrick Mahomes'
        const playerAge = 24
        const playerHeight = 188
        const playerWeight = 104
        const result = "Patrick Mahomes is age 24"
        const op = new Player(playerName, playerAge, playerHeight, playerWeight).getAge()
        expect(op).toEqual(result)
    })

    it('should return "Patrick Mahomes is 188cm"', () => {
        const playerName = 'Patrick Mahomes'
        const playerAge = 24
        const playerHeight = 188
        const playerWeight = 104
        const result = "Patrick Mahomes is 188cm"
        const op = new Player(playerName, playerAge, playerHeight, playerWeight).getHeight()
        expect(op).toEqual(result)
    })

    it('should return "Patrick Mahomes weighs 104kg"', () => {
        const playerName = 'Patrick Mahomes'
        const playerAge = 24
        const playerHeight = 188
        const playerWeight = 104
        const result = "Patrick Mahomes weighs 104kg"
        const op = new Player(playerName, playerAge, playerHeight, playerWeight).getWeight()
        expect(op).toEqual(result)
    })

    it('should return "Jimmy Garoppolo is age 28"', () => {
        const playerName = 'Jimmy Garoppolo'
        const playerAge = 28
        const playerHeight = 188
        const playerWeight = 102
        const result = "Jimmy Garoppolo is age 28"
        const op = new Player(playerName, playerAge, playerHeight, playerWeight).getAge()
        expect(op).toEqual(result)
    })

    it('should return "Jimmy Garoppolo is 188cm"', () => {
        const playerName = 'Jimmy Garoppolo'
        const playerAge = 28
        const playerHeight = 188
        const playerWeight = 102
        const result = "Jimmy Garoppolo is 188cm"
        const op = new Player(playerName, playerAge, playerHeight, playerWeight).getHeight()
        expect(op).toEqual(result)
    })

    it('should return "Jimmy Garoppolo weighs 102kg"', () => {
        const playerName = 'Jimmy Garoppolo'
        const playerAge = 28
        const playerHeight = 188
        const playerWeight = 102
        const result = "Jimmy Garoppolo weighs 102kg"
        const op = new Player(playerName, playerAge, playerHeight, playerWeight).getWeight()
        expect(op).toEqual(result)
    })

    it('should return "Julio Jones is age 31"', () => {
        const playerName = 'Julio Jones'
        const playerAge = 31
        const playerHeight = 191
        const playerWeight = 100
        const result = "Julio Jones is age 31"
        const op = new Player(playerName, playerAge, playerHeight, playerWeight).getAge()
        expect(op).toEqual(result)
    })

    it('should return "Julio Jones is 191cm"', () => {
        const playerName = 'Julio Jones'
        const playerAge = 31
        const playerHeight = 191
        const playerWeight = 100
        const result = "Julio Jones is 191cm"
        const op = new Player(playerName, playerAge, playerHeight, playerWeight).getHeight()
        expect(op).toEqual(result)
    })

    it('should return "Julio Jones weighs 100kg"', () => {
        const playerName = 'Julio Jones'
        const playerAge = 31
        const playerHeight = 191
        const playerWeight = 100
        const result = "Julio Jones weighs 100kg"
        const op = new Player(playerName, playerAge, playerHeight, playerWeight).getWeight()
        expect(op).toEqual(result)
    })
})