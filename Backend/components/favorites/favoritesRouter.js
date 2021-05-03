const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const { ObjectId } = require('mongoose').Types;
const Favorite = require('./favoritesModel');

require('dotenv').config();
const { decryptAuthToken } = require('../auth/Services/decryptToken');

router.post('/:photoId', async (req, res) => {
  const { authorization } = req.headers;
  const { userId } = await decryptAuthToken(authorization);

  const favorite = new Favorite(
    {
      _id: new mongoose.Types.ObjectId(),
      user: userId,
      favoriteDate: req.body.favoriteDate,
      photo: req.params.photoId,

    },
  );
  favorite.save()
    .then((result) => {
      res.status(201).json(
        {
          message: 'Favorite added succesfully',
          favoriteCreated:

    {
      _id: result.id,
      user: result.user,
      photoId: result.photo,
      favoriteDate: result.favoriteDate,

    },
          request:
    {
      type: 'Get',
      url: 'http://localhost:3000/favorites/:photoId',
    },

        },
      );
    })
    .catch((err) => {
      res.status(500).json({
        error: err,

      });
    });
});

router.delete('/:photoId', async (req, res) => {
  const { authorization } = req.headers;
  const { userId } = await decryptAuthToken(authorization);
  const { photoId } = req.params;
  Favorite.deleteOne({
    photo: photoId,
    user: userId,
  })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

router.get('/:userId', (req, res) => {
  const user = req.params.userId;
  const toId = ObjectId(user);
  Favorite.find({ user: toId })
    .select('photo')
    .populate('photo', 'title isPublic ')
    .exec()
    .then((docs) => {
      res.status(200).json(
        {
          total: docs.length,
          owner: user,
          photos: docs.map((doc) => ({
            photo: doc.photo,

          })),
        },
      );
    })

    .catch((err) => {
      res.status(500).json(

        {
          error: err,

        },
      );
    });
});

router.get('/public/:userId', (req, res) => {
  const { userId } = req.params;
  const toId = ObjectId(userId);
  Favorite.find({ user: toId })
    .select('photo')
    .populate('photo', 'isPublic title')
    .exec()
    .then(
      (docs) => {
        res.status(200).json(
          {
            owner: userId,
            photo: docs.map((doc) => {
              const pub = doc.photo.isPublic;
              if (pub === true) {
                return {
                  photo: doc.photo,

                };
              }
            }),
          },
        );
      },
    )

    .catch((err) => {
      res.status(500).json(

        {
          error: err,

        },
      );
    });
});

module.exports = router;
