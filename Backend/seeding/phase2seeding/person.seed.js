const Person = require('../../components/person/personModel');
const { personArray } = require('./fakerData/mainFaker');

async function personSeed() {
  if (await Person.findOne()) await Person.collection.drop();
  await Person.insertMany(personArray);
}
async function seedPerson() {
  await personSeed();
}

module.exports = { seedPerson };
