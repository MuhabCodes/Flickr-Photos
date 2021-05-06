/**
 *
 * @api {POST} /photos addPhoto
 * @apiDescription Add a new photo
 * @apiGroup photos
 * @apiVersion  0.1.0
 * @apiPermission none
 *
 *
 * @apiParam {String} authorId The id of the author of this photo
 * @apiParam {String} title The title of the image
 * @apiParam {String} description The description given to the image
 * @apiParam {Date} [captureDate="Now"] The date that the photo was captured on
 * @apiParam {Date} [uploadDate="Now"] The date that the photo was uploaded on
 * @apiParam {Boolean} [isPublic=true] If this photo is public for anyone to see
 * @apiParam {String} secret The secret of this photo
 * @apiParam {Boolean} [favorites=false] If this photo is in the author's favourites
 * @apiParam {Object[]} [inPhoto] Array of user objects in the photo
 * @apiParam {Object[]} [tags] Array of tag objects in the photo
 * @apiParam {String} [cameraName] The name of the camera used
 *
 *
 *
 * @apiSuccess (Success 201) {Number} statusCode The status code
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 *
 *
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 201 Created
 * {
 *      "statusCode":201
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
