/**
 *
 * @api {GET} /photos/:photo_id Get the information of a certain photo
 * @apiName GetPhotoInfo
 * @apiGroup Photos
 * @apiVersion 1.0.0
 * @apiPermission author
 *
 *
 * @apiParam  {Number} photo_id The id of the photo to get information for.
 * @apiParam  {String} token User authorization token
 *
 * @apiExample Example usage:
 * curl -i http://localhost/photos/314
 *
 * @apiSuccess (Success 200) {Number} author_id The id of the author of this photo
 * @apiSuccess (Success 200) {Boolean} success The request is handled successfully
 * @apiSuccess (Success 200) {String} title The title of the image
 * @apiSuccess (Success 200) {String} description The description given to the image
 * @apiSuccess (Success 200) {Date} capture_date The date that the photo was captured on
 * @apiSuccess (Success 200) {Date} upload_date The date that the photo was uploaded on
 * @apiSuccess (Success 200) {Boolean} isPublic If this photo is public for anyone to see
 * @apiSuccess (Success 200) {String} secret The secret number of this photo
 * @apiSuccess (Success 200) {Number} views The number of views on this photo
 * @apiSuccess (Success 200) {Boolean} favorites If this photo is in the author's favourites
 * @apiSuccess (Success 200) {Object[]} in_photo Array of user objects in the photo
 * @apiSuccess (Success 200) {Object[]} tags Array of tag objects in the photo
 * @apiSuccess (Success 200) {String} camera_name The name of the camera used
 * @apiSuccess (Success 200) {Number} status_code The status code
 * @apiError (Error 404) {String} error The photo isn't found
 * @apiError (Error 404) {Number} status_code The status code
 * @apiError (Error 401) {String} error The user doesn't have persmission to do this action
 * @apiError (Error 401) {Number} status_code The status code
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     "photo_id" : 314,
 *      "token":"9rug237g0dh2cn"
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *      "success":true,
 *      "author_id" : 12,
 *      "title":"Blue Lake",
 *      "description":"A fantastic view on the lake",
 *      "capture_date":"1-1-2021",
 *      "upload_date":"3-1-2021",
 *      "isPublic":true,
 *      "secret":"f929gvb4",
 *      "views":150,
 *      "favorites":false,
 *      "in_photo":[{...},{...},...],
 *      "tags":[{...},{...},...],
 *      "camera_name":"Cannon 201cf",
 *      "status_code":200
 *
 * }
 *
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "PhotoNotFound",
 *        "status_code":404
 *     }
 *
 * @apiErrorExample {json} Error-401:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized User",
 *        "status_code":401
 *     }
 *
 *
 */
