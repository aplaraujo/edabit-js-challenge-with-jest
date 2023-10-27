const nameString = require('../src/strings/basic-variable-assignment')

describe("Variable assignment", () => {
  it('should return "MubashirEdabit"', () => {
    const name = "Mubashir";
    const result = "MubashirEdabit";
    const op = nameString(name);
    expect(op).toEqual(result);
  });

  it('should return "MattEdabit"', () => {
    const name = "Matt";
    const result = "MattEdabit";
    const op = nameString(name);
    expect(op).toEqual(result);
  });

  it('should return "javaScriptEdabit"', () => {
    const name = "javaScript";
    const result = "javaScriptEdabit";
    const op = nameString(name);
    expect(op).toEqual(result);
  });

  it('should return "AirforceEdabit"', () => {
    const name = "Airforce";
    const result = "AirforceEdabit";
    const op = nameString(name);
    expect(op).toEqual(result);
  });
});
