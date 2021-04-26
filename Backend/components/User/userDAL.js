const { join } = require('path');
require('dotenv').config({ path: join(__dirname, '/../../secret/', '.env') });
const bcrypt = require('bcrypt');
const User = require('./userModel');



exports.createNewUser = async function createUser({
  email, password, userName, firstName, lastName, age,
}) {
  // password encryption
  const hashedPassword = await bcrypt.hash(password, 10);
  // create user object
  const userObj = new User({
    email,
    password: hashedPassword, 
    userName,
    // TODO : add Person Id with firstName, lastName and age
  });
  // create user in db
  await userObj.save();
};
