const bcrypt = require('bcrypt');
const User = require('./userModel');

exports.getUserByEmail = async function getWithEmail({ email }) {
  const userObj = await User.findOne({ email });
  return userObj;
};

exports.createNewUser = async function createUser({
  email, password, firstName, lastName, age,
}, next) {
  try {
    // password encryption
    const hashedPassword = await bcrypt.hash(password, 10);
    const userObj = new User({
      email,
      password: hashedPassword, // TODO : add Person Id with firstName, lastName and age
    });
    // Adding user to db
    await userObj.save();
  } catch (err) {
    next(err);
  }
};
