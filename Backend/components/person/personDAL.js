const User = require('../user/userModel');
const userDAL = require('../user/userDAL');

const Person = require('./personModel');

module.exports.findProfile = async function findProfile(toId) {
  const foundProfile = await User.findById(toId)
    .select('personId')
    .populate('personId')
    .exec();
  return foundProfile;
};

module.exports.createPerson = async function createPerson(firstName, lastName, age) {
  // creating person object

  const personObj = new Person({
    realName: `${firstName} ${lastName}`,
    age,
  });
  // create user in db
  const person = await personObj.save();
  return person;
};
