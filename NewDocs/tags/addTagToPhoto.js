/**
 * 
 * @api {POST} /tags/:photoId addTagToPhoto
 * @apiDescription add Tag to a photo
 * @apiGroup tags
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} photoId photoId where you will add the tag
 * @apiHeader  {String} authorization authorization Value
 * @apiHeaderExample {json} Request-Example:
 *    {
 *        "Authorization": "Bearer   dksjfbdsjkfbusafbjaadsf"
 *     } 
 * @apiParam  {String} tagRaw Raw text as entered by user 
 * @apiParamExample  {string} Request-Example:
 *    {
 *        "tagRaw": "Adding a tag"
 *     }
 * 
 *@apiSuccess (Success 200) {Number} statusCode The status code
 * @apiSuccessExample {json} Success-Response:
 *{
    "message": "Tag created and added Successfully with owner Id = 6092ea68326fa5101115dfae",
    "photo": {
        "views": 0,
        "isPublic": true,
        "tags": [
          "60b4db9cc53d5f5480ff0938",
            "60b5fa9982770145d89ded90",
            "60b5fc46e8d98632bcdafc00"
        ],
        "inPhoto": [],
        "_id": "5d6ede6a0ba62570afcedd3d",
        "title": "hi",
        "uploadDate": "2021-05-01T12:16:11.000Z",
        "secret": "secret key",
        "imageUrl": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        "width": 1920,
        "height": 1195,
        "user": "6092ea68326fa5101115dfae",
        "__v": 15
    }
}
 * @apiSuccessExample {json} Success-Response:
 * {
    "message": "Existing Tag added successfully with owner Id = 6092ea68326fa5101115dfae",
    "photo": {
        "views": 0,
        "isPublic": true,
        "tags": [
            "60b4db9cc53d5f5480ff0938",
            "60b5fa9982770145d89ded90",
            "60b5fc46e8d98632bcdafc00"
        ],
        "inPhoto": [],
        "_id": "5d6ede6a0ba62570afcedd3d",
        "title": "hi",
        "uploadDate": "2021-05-01T12:16:11.000Z",
        "secret": "secret key",
        "imageUrl": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        "width": 1920,
        "height": 1195,
        "user": "6092ea68326fa5101115dfae",
        "__v": 16
    }
}
 * 
  * @apiError (Error 404) {String} error The server can not find the requested resource. 
 * @apiError (Error 404) {Number} statusCode The status code.
 * 
 * 
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "tagOrPhotoNotFound",
 *        "statusCode":404
 *     }
 * * @apiErrorExample {json} Error-403:
 *     HTTP/1.1 403 Not Authorized
 *     {
 *       "message": "you arenot authorized to add tag",
 *        "statusCode":403
 *     }
 * 
 * 
 */
