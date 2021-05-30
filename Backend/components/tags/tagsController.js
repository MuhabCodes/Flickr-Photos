const tagsDAL = require('./tagsDAL');
const { getPhotoById } = require('../photo/photoDAL');
const { getUserById } = require('../User/userDAL');

module.exports.getPhotoTags = async function getPhotoTags(req, res) {
  const { params } = req;
  try {
    // get the photoId from the request to get tag list for
    const photoObj = await getPhotoById(body.photoId);
    // return list if tags in the photo
    if (photoObj) {
      return res.status(200).json({ // form as in API doc
        tags: {
          photoId: body.photoId,
          tagsList: [
            photoObj.tags,
          ],
        },
      });
    }
    return res.status(404).json({
      message: 'Photo not found',
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports.getListUserRaw = async function getListUserRaw(req, res) {
  const { params } = req;
  try {
    const userObj = await getUserById(params.userId);
    if(userId) //checks if i got a user not an empty one
    {
        const tagsObj = await tagsDAL
    }
  } catch (error) {

  }
};
