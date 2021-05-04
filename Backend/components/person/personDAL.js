const User = require('../User/userModel');

require('./personModel');

module.exports.findProfile = async function findProfile(toId) {
  const foundProfile = await User.findById(toId)
    .select('person')
    .populate('person')
    .exec();
  return foundProfile;
};
