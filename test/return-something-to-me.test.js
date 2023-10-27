const giveMeSomething = require('../src/strings/return-something-to-me')

describe("Return something", () => {
  it("Should return 'something is better than nothing'", () => {
    const str = "is better than nothing";
    const result = "something is better than nothing";
    const op = giveMeSomething(str);
    expect(op).toEqual(result);
  });

  it("Should return 'something Bob Jane'", () => {
    const str = "Bob Jane";
    const result = "something Bob Jane";
    const op = giveMeSomething(str);
    expect(op).toEqual(result);
  });

  it("Should return 'something something'", () => {
    const str = "something";
    const result = "something something";
    const op = giveMeSomething(str);
    expect(op).toEqual(result);
  });
});
