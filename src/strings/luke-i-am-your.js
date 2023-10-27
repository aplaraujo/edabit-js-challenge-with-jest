const relationToLuke = (person) => {
  const family = {
    "Darth Vader": "Luke, I am your father.",
    "Leia": "Luke, I am your sister.",
    "Han": "Luke, I am your brother in law.",
    "R2D2": "Luke, I am your droid.",
  };
  return family[person]
};
module.exports = relationToLuke