const { generateUserData } = require('./userDataFaker.seed');
const { generatePersonData } = require('./personDataFaker.seed');
const { generatePhotoData } = require('./photoDataFaker.seed');
const { generateCommentData } = require('./commentDataFaker.seed');
const { generateFavouritesData } = require('./favoriteDataFaker.seed');

const numUsers = 5;

const userArray = generateUserData(numUsers);

const personArray = generatePersonData(userArray);

const photoArray = generatePhotoData(userArray);

const favouriteArray = generateFavouritesData(userArray, photoArray);

const commentArray = generateCommentData(userArray, photoArray);
