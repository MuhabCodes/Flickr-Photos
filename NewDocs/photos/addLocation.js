/**
 *
 * @api {POST} /photos/:photoId/location/:photoLocation addLocation
 * @apiDescription Add location to photo
 * @apiGroup photos
 * @apiVersion  0.1.0
 * @apiPermission none
 *
  * @apiParam  {String} photoId The id of the photo 
 * @apiParam  {String} photolocation The location of the photo to be added 
 *
 *
 * @apiSuccess (Success 201) {Number} statusCode The status code
 * @apiSuccess (Success 201) {Object} photo photo to be edited.
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 *
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 201 Created
 * {
 *      "statusCode":201
 * "photo": {
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
        "location": "egypt"
    }
 * }
 *
 *   @apiErrorExample {json} Error-500:
 *     HTTP/1.1 500 InternalServerError
 *     {
 *       "error": "InternalServerError",
 *        "statusCode":500
 *     }
 *
 *
 */
