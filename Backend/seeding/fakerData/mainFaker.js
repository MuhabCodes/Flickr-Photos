const { generateUserData } = require('./userDataFaker.seed');
const { generatePersonData } = require('./personDataFaker.seed');
const { generatePhotoData } = require('./photoDataFaker.seed');

const numUsers = 5;

const userArray = generateUserData(numUsers);

const personArray = generatePersonData(userArray);

const photoArray = generatePhotoData(userArray);
