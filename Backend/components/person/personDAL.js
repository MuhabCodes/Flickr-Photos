const User = require('../user/userModel');

require('./personModel');

module.exports.findProfile = async function findProfile(toId) {
  const foundProfile = await User.findById(toId)
    .select('personId')
    .populate('personId')
    .exec();
  return foundProfile;
};
