const faker = require('faker');
const User = require('../../components/user/userModel');

function generateUserData(numUsers) {
  const userArray = [];
  for (let i = 0; i < numUsers; i++) {
    const isPro = (Math.random() > 0.8);
    const userAvatar = faker.image.avatar();
    const isActivated = true;
    const displayName = faker.internet.userName();
    const description = faker.lorem.sentence();
    const email = faker.internet.email();
    const password = '$2a$10$kc74MLeEk4o0qDnGojh0rOQypmiTFCcTJv3/iMNB2GmINIiE8VRdG';
    const userObj = new User({
      isActivated,
      isPro,
      userAvatar,
      displayName,
      description,
      email,
      password,
    });

    if (i >= 5) {
      for (let j = 0; j < 3; j++) {
        userObj.following.push(userArray[Math.floor(Math.random() * userArray.length)]._id);
      }
      for (let j = 0; j < 3; j++) {
        userObj.followers.push(userArray[Math.floor(Math.random() * userArray.length)]._id);
      }
    }
    if (i >= 10) {
      for (let j = 0; j < 10; j++) {
        userObj.following.push(userArray[Math.floor(Math.random() * userArray.length)]._id);
      }
      for (let j = 0; j < 10; j++) {
        userObj.followers.push(userArray[Math.floor(Math.random() * userArray.length)]._id);
      }
    }
    userArray.push(userObj);
  }
  userArray.forEach((element) => {
    element.followers = [...new Set(element.followers)];
    element.following = [...new Set(element.following)];
  });

  return userArray;
}

module.exports.generateUserData = generateUserData;
