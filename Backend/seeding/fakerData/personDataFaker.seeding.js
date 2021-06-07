const faker = require('faker');
const Person = require('../../components/person/personModel');

const { userArray } = require('./userDataFaker.seed');

const personArray = [];

userArray.forEach((element) => {
  const age = Math.floor(18 + Math.random() * 40);
  const realName = `${faker.name.firstName()} ${faker.name.lastName()}`;
  const dateCreated = faker.date.between('01-01-2015', '06-07-2021');
  const description = faker.lorem.sentence();
  const homeTown = faker.address.cityName();
  const city = faker.address.cityName();
  const country = faker.address.country();
  const occupation = faker.name.jobTitle();
  const personObj = new Person({
    age,
    realName,
    dateCreated,
    description,
    homeTown,
    city,
    country,
    occupation,
  });
  element.personId = personObj._id;
  personArray.push(personObj);
});

console.log(userArray);
