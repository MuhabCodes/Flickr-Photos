const mongoose = require('mongoose');

const favoriteDAL = require('./favoritesDAL');

const { ObjectId } = require('mongoose').Types;

require('dotenv').config();
const { decryptAuthToken } = require('../auth/Services/decryptToken');

exports.add = async function addFavorite(req, res) {
  const { authorization } = req.headers;

  const { userId } = await decryptAuthToken(authorization);
  try {
    const favorite = await favoriteDAL.createFavorite({
      id: new mongoose.Types.ObjectId(),
      userID: userId,
      favoriteDa: req.body.favoriteDate,
      photoId: req.params.photoId,
    });
    return res.status(201).json({
      message: 'Favorite added succesfully',
      favoriteCreated:

{
  _id: favorite.id,
  user: favorite.user,
  photoId: favorite.photo,
  favoriteDate: favorite.favoriteDate,

},
      request:
{
  type: 'Get',
  url: 'http://localhost:3000/favorites/:photoId',
},
    });
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};
exports.findFavorite = async function findFavorite(req, res) {
  const user = req.params.userId;
  const toId = ObjectId(user);
  try {
    const favoriteOutput = await favoriteDAL.findFavorite(toId);
    return res.status(200).json(
      {
        total: favoriteOutput.length,
        owner: user,
        photos: favoriteOutput.map((doc) => ({
          photo: doc.photo,

        })),
      },
    );
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};

exports.findPublicFavorite = async function findPublicFavorite(req, res) {
  const user = req.params.userId;
  const toId = ObjectId(user);
  try {
    const favoriteOutput = await favoriteDAL.findFavorite(toId);
    return res.status(200).json(
      {
        owner: user,
        photo: favoriteOutput.map((doc) => {
          const pub = doc.photo.isPublic;
          if (pub === true) {
            return {
              photo: doc.photo,

            };
          }
        }),
      },
    );
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};
exports.deleteFavorite = async function deleteFavorite(req, res) {
  const { authorization } = req.headers;
  const { userId } = await decryptAuthToken(authorization);
  const { photoId } = req.params;
  try {
    const favoriteDeleted = await favoriteDAL.deleteFavorite({ userId, photoId });
    return res.status(200).json(favoriteDeleted);
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};
