const mongoose = require('mongoose');

const favoriteDAL = require('./favoritesDAL');
const photoDAL = require('../photo/photoDAL');

const { decryptAuthToken } = require('../auth/Services/decryptToken');

exports.add = async function addFavorite(req, res, next) {
  const { authorization } = req.headers;

  const { userId } = await decryptAuthToken(authorization);
  try {
    const favoriteIfFound = await
    favoriteDAL.findFavoriteByUserAndPhoto({ userId, photoId: req.params.photoId });
    if (favoriteIfFound.length !== 0) {
      return res.status(409).json({ message: 'You already liked this photo' });
    }
    const favorite = await favoriteDAL.createFavorite({
      id: new mongoose.Types.ObjectId(),
      userID: userId,
      favoriteDa: Date.now(),
      photoId: req.params.photoId,
    });
    // req.userId=userId; // just passing to next middleware
    req.favoriteCreated = {
      _id: favorite.id,
      user: favorite.user,
      photoId: favorite.photo,
      favoriteDate: favorite.favoriteDate,
    };
    req.userId = userId;
    photoDAL.addFav(req.params.photoId);
    next();
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};
// error here makes non sense
exports.findFavorite = async function findFavorite(req, res) {
  const user = req.params.userId;
  try {
    if (!mongoose.isValidObjectId(user)) {
      return res.status(404).json({
        error: 'Invalid userId',
      });
    }
    const favoriteOutput = await favoriteDAL.findFavorite(user);
    return res.status(200).json(
      {
        total: favoriteOutput.length,
        owner: user,
        photo: favoriteOutput.map((doc) => (
          doc.photo

        )),
      },
    );
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};
// error here makes non sense
exports.findPublicFavorite = async function findPublicFavorite(req, res) {
  const user = req.params.userId;

  try {
    if (!mongoose.isValidObjectId(user)) {
      return res.status(404).json({
        error: 'Invalid userId',
      });
    }
    const favoriteOutput = await favoriteDAL.findFavorite(user);
    let count = 0;
    for (let i = 0; i < favoriteOutput.length; i += 1) {
      if (favoriteOutput[i].photo.isPublic === true) count += 1;
    }
    return res.status(200).json(
      {
        total: count,
        owner: user,
        photo: favoriteOutput
          .filter((favorite) => favorite.photo.isPublic)
          .map((favorite) => favorite.photo),
      },
    );
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};
// error here makes non sense
exports.deleteFavorite = async function deleteFavorite(req, res) {
  const { authorization } = req.headers;
  const { userId } = await decryptAuthToken(authorization);
  const { photoId } = req.params;
  try {
    const favoriteDeleted = await favoriteDAL.deleteFavorite({ userId, photoId });
    photoDAL.removeFav(photoId);
    return res.status(200).json(favoriteDeleted);
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};
exports.findPhotoLikers = async function findPhotoLikers(req, res) {
  console.log('here')
  const photo = req.params.photoId;
  try {
    if (!mongoose.isValidObjectId(photo)) {
      return res.status(404).json({
        error: 'Invalid photoId',
      });
    }
    const favoriteOutput = await favoriteDAL.findFavoriteLikers(photo);
    return res.status(200).json(
      {
        photoLikers: favoriteOutput.map((doc) => (
          doc.user

        )),
      },
    );
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};
