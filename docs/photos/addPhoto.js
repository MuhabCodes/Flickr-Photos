/**
 *
 * @api {POST} /photos Add a new photo
 * @apiName addPhoto
 * @apiGroup Photos
 * @apiVersion 1.0.0
 * @apiPermission none
 *
 *
 * @apiParam {Number} author_id The id of the author of this photo
 * @apiParam {String} title The title of the image
 * @apiParam {String} description The description given to the image
 * @apiParam {Date} capture_date The date that the photo was captured on
 * @apiParam {Date} upload_date The date that the photo was uploaded on
 * @apiParam {Boolean} isPublic If this photo is public for anyone to see
 * @apiParam {Number} secret The secret number of this photo
 * @apiParam {Boolean} favorites If this photo is in the author's favourites
 * @apiParam {Object[]} in_photo Array of user objects in the photo
 * @apiParam {Object[]} tags Array of tag objects in the photo
 * @apiParam {String} camera_name The name of the camera used
 *
 * @apiSuccess (Success 201) {Boolean} success The request is handled successfully
 * @apiSuccess (Success 201) {Number} status_code The status code
 *
 *
 * @apiParamExample  {type} Request-Example:
 * {
 *      "author_id" : 12,
 *      "title":"Blue Lake",
 *      "description":"A fantastic view on the lake",
 *      "capture_date":"1-1-2021",
 *      "upload_date":"3-1-2021",
 *      "isPublic":true,
 *      "secret":12345,
 *      "favorites":false,
 *      "in_photo":[{...},{...},...],
 *      "tags":[{...},{...},...],
 *      "camera_name":"Cannon 201cf"
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 201 Created
 * {
 *     "success" : true,
 *      "status_code":201
 * }
 *
 *
 */
