const bcrypt = require('bcrypt');
const User = require('./userModel');

exports.getUserByEmail = async function getWithEmail({ email }) {
  const userObj = await User.findOne({ email });
  return userObj;
};

exports.createNewUser = async function createUser({
  email, password, firstName, lastName, age,
}) {
  // password encryption
  const hashedPassword = await bcrypt.hash(password, 10);
  // create user object
  const userObj = new User({
    email,
    password: hashedPassword, // TODO : add Person Id with firstName, lastName and age
  });
  // create user in db
  await userObj.save();
};
