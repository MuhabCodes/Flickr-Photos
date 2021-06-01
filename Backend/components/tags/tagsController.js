const tagsDAL = require('./tagsDAL');
const { getPhotoById } = require('../photo/photoDAL');
const { getUserById } = require('../user/userDAL');
const { decryptAuthToken } = require('../auth/Services/decryptToken');
const { getTagFromPhoto } = require('./services/checkTagInPhoto');

module.exports.getPhotoTags = async function getPhotoTags(req, res) {
  const { params } = req;
  try {
    // get the photoId from the request to get tag list for
    const photoObj = await tagsDAL.findPhotoWithTags(params.photoId);
    // return list if tags in the photo
    if (photoObj) {
      return res.status(200).json({ // form as in API doc
        tags: {
          photoId: params.photoId,
          tagsList: photoObj.tags
          ,
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

module.exports.getUserTags = async function getUserTags(req, res) {
  const { params } = req;
  try {
    const userObj = await getUserById(params.userId);

    if (userObj) { // checks if i got a user not an empty one
      const tagsObj = await tagsDAL.getUserTag(params.userId);
      // if there is a tag it should return it else return not found
      if (tagsObj) {
        return res.status(200).json(tagsObj);
      }
      return res.status(404).json({
        error: '404 Tags not found',
      });
    }
    // return this when there is no user found
    return res.status(404).json({
      error: '404 user not found',
    });
  } catch (error) {
    // returning the error
    return res.status(500).json(error);
  }
};

module.exports.addTagToPhoto = async function addTagToPhoto(req, res) {
  const { body, params } = req;
  const { authorization } = req.headers;
  try {
    // check if the user is authorized to add a tag
    const currentUser = await decryptAuthToken(authorization);
    if (currentUser == null) { // check whether token contains information or not
      return res.status(403).json({
        message: ' You are not logged in ',
      });
    }
    const photoObj = await getPhotoById(params.photoId);
    // checking if the user adding the tag is the owner of the photo

    if (currentUser.userId != photoObj.user) {
      return res.status(403).json({
        error: 'You are not authorized to add a tag',
      });
    }

    if (!body.tagRaw || body.tagRaw === '') { return res.status(404).json(); }
    // create the tag
    const checkTag = await tagsDAL.getTag(body.tagRaw);
    // if there is no Tag with this name it should  create a tag then add it
    if (checkTag == null) {
      // creating the tag

      const tagObj = await tagsDAL.createTag({
        ownerId: currentUser.userId,
        tagRaw: body.tagRaw,
        tagText: ((String)(body.tagRaw)).replace(/\s/g, ''), // removing all white space from tag
      });
      // adding the tag to the photo
      const photoWithTag = await tagsDAL.addTagToPhoto(params.photoId, tagObj);

      return res.status(200).json({
        message: `Tag created and added Successfully with owner Id = ${currentUser.userId}`,
        photo: photoWithTag,
      });
    }
    // Checking whether tag exists in photo or not
    const inPhoto = getTagFromPhoto(checkTag._id, photoObj.tags);

    if (inPhoto === true) {
      return res.status(403).json({
        message: 'Tag already exists',
      });
    }

    // else since there is a tag with this name it should add it automatically
    const photoWithTag = await tagsDAL.addTagToPhoto(params.photoId, checkTag);
    return res.status(200).json({
      message: `Existing Tag added successfully with owner Id = ${checkTag.ownerId}`,
      photo: photoWithTag,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports.removeTagFromPhoto = async function removeTagFromPhoto(req, res) {
  const { body, params } = req;

  const { authorization } = req.headers;
  try {
    const currentUser = await decryptAuthToken(authorization);

    const photoObj = await getPhotoById(params.photoId);
    if (currentUser.userId != photoObj.user) {
      return res.status(403).json({
        message: 'You are not authorized to delete the tag',
      });
    }
    const photoWithoutTag = await tagsDAL.removeTagFromPhoto(params.photoId, body.tagId);
    return res.status(200).json({
      message: 'Tag deleted from photo successfully',

    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports.deleteTag = async function deleteTag(req, res) {
  const { params } = req;
  const { authorization } = req.headers;
  try {
    const currentUser = await decryptAuthToken(authorization);
    const tagObj = await tagsDAL.getTagWithId(params.tagId);

    // check if the owner of tag is the current User
    if (currentUser.userId === tagObj.ownerId) {
      // remove this tag from all the photos
      const photoWithoutTag = await tagsDAL.removeTagFromAllPhotos(params.tagId);
      const removedTag = await tagsDAL.removeTag(params.tagId);
      return res.status(200).json({
        message: 'Tag removed Successfully from tags and photos',
      });
    }
    return res.status(403).json({
      message: "You don't have access to delete the tag",
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports.getAllTags = async function getAllTags(req, res) {
  try {
    const tagObj = await tagsDAL.getAllTags();
    return res.status(200).json(tagObj);
  } catch (error) {
    return res.status(500).json(error);
  }
};
