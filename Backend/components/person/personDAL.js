const User = require('../user/userModel');

const Person = require('./personModel');

module.exports.findProfile = async function findProfile(toId) {
  const foundProfile = await User.findById(toId)
    .select('displayName,personId')
    .populate('personId')
    .exec();
  return foundProfile;
};

module.exports.createPerson = async function createPerson(firstName, lastName, age) {
  // creating person object
  let personObj;
  if (age !== null) {
    personObj = new Person({
      realName: `${firstName} ${lastName}`,
      age,
    });
  } else {
    personObj = new Person({
      realName: `${firstName} ${lastName}`,
    });
  }
  // create user in db
  const person = await personObj.save();
  return person;
};

module.exports.deletePersonDAL = async function deletePerson(personId) {
  await Person.deleteOne({ _id: personId });
};

module.exports.updateInfo = async function updatePerson(personId, newInfo) {
  await Person.updateOne(
    { _id: personId }, {
      $set: {
        homeTown: newInfo.homeTown,
        occupation: newInfo.occupation,
        city: newInfo.city,
        country: newInfo.country,
        description: newInfo.description,
      },
    },
  );
};
