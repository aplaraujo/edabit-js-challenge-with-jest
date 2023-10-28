const cityFacts = require("../src/strings/extract-city-facts")

describe("City facts", () => {
  it('should return "Manila has a population of 1,780,148 and is situated in Asia"', () => {
    const city = { name: "Manila", population: "1,780,148", continent: "Asia" };
    const result =
      "Manila has a population of 1,780,148 and is situated in Asia";
    const op = cityFacts(city);
    expect(op).toEqual(result);
  });

  it('should return "Paris has a population of 2,140,526 and is situated in Europe"', () => {
    const city = {
      name: "Paris",
      population: "2,140,526",
      continent: "Europe",
    };
    const result =
      "Paris has a population of 2,140,526 and is situated in Europe";
    const op = cityFacts(city);
    expect(op).toEqual(result);
  });

  it('should return "Tokyo has a population of 13,929,286 and is situated in Asia"', () => {
    const city = {
      name: "Tokyo",
      population: "13,929,286",
      continent: "Asia",
    };
    const result =
      "Tokyo has a population of 13,929,286 and is situated in Asia";
    const op = cityFacts(city);
    expect(op).toEqual(result);
  });

  it('should return "Melbourne has a population of 4,936,349 and is situated in Australia"', () => {
    const city = {name: 'Melbourne', population: '4,936,349', continent: 'Australia'};
    const result =
      "Melbourne has a population of 4,936,349 and is situated in Australia";
    const op = cityFacts(city);
    expect(op).toEqual(result);
  });

  it('should return "Kampala has a population of 1,507,080 and is situated in Africa"', () => {
    const city = {name: 'Kampala', population: '1,507,080', continent: 'Africa'};
    const result =
      "Kampala has a population of 1,507,080 and is situated in Africa";
    const op = cityFacts(city);
    expect(op).toEqual(result);
  });

  it('should return "Buenos Aires has a population of 2,891,082 and is situated in South America"', () => {
    const city = {name: 'Buenos Aires', population: '2,891,082', continent: 'South America'};
    const result =
      "Buenos Aires has a population of 2,891,082 and is situated in South America";
    const op = cityFacts(city);
    expect(op).toEqual(result);
  });

  it('should return "Vancouver has a population of 631,486 and is situated in North America"', () => {
    const city = {name: 'Vancouver', population: '631,486', continent: 'North America'};
    const result =
      "Vancouver has a population of 631,486 and is situated in North America";
    const op = cityFacts(city);
    expect(op).toEqual(result);
  });

  it('should return "Berlin has a population of 3,748,148 and is situated in Europe"', () => {
    const city = {name: 'Berlin', population: '3,748,148', continent: 'Europe'};
    const result =
      "Berlin has a population of 3,748,148 and is situated in Europe";
    const op = cityFacts(city);
    expect(op).toEqual(result);
  });
});
