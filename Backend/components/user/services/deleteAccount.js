const { deleteUserDAL } = require('../userDAL');
const { deletePersonDAL } = require('../../person/personDAL');
const { deleteUserPhotosDAL } = require('../../photo/photoDAL');

exports.deleteAccountServ = async function deleteAcc(userId) {
  // delete the user
  const personId = await deleteUserDAL(userId);
  // delete his person object
  await deletePersonDAL(personId);
  // delete all pictures by user
  await deleteUserPhotosDAL(userId);
};
