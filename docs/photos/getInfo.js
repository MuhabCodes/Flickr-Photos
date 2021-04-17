/**
 *
 * @api {GET} /photos/:photoId/info getPhotoInfo
 * @apiDescription Get the information of a certain photo
 * @apiGroup photos
 * @apiVersion 1.0.0
 * @apiPermission author
 *
 *
 * @apiParam  {String} photoId The id of the photo to get information for.
 * @apiParam  {String} token User authorization token
 *
 * @apiExample Example usage:
 * curl -i http://localhost/photos/314
 *
 * @apiSuccess (Success 200) {String} authorId The id of the author of this photo
 * @apiSuccess (Success 200) {String} title The title of the image
 * @apiSuccess (Success 200) {String} description The description given to the image
 * @apiSuccess (Success 200) {Date} captureDate The date that the photo was captured on
 * @apiSuccess (Success 200) {Date} uploadDate The date that the photo was uploaded on
 * @apiSuccess (Success 200) {Boolean} isPublic If this photo is public for anyone to see
 * @apiSuccess (Success 200) {String} secret The secret number of this photo
 * @apiSuccess (Success 200) {Number} views The number of views on this photo
 * @apiSuccess (Success 200) {Boolean} favorites If this photo is in the author's favourites
 * @apiSuccess (Success 200) {Object[]} inPhoto Array of user objects in the photo
 * @apiSuccess (Success 200) {Object[]} tags Array of tag objects in the photo
 * @apiSuccess (Success 200) {String} cameraName The name of the camera used
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiError (Error 404) {String} error The photo isn't found
 * @apiError (Error 404) {Number} statusCode The status code
 * @apiError (Error 401) {String} error The user doesn't have persmission to do this action
 * @apiError (Error 401) {Number} statusCode The status code
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     "photoId" : "fh4ub34",
 *      "token":"9rug237g0dh2cn"
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *      "authorId" : "fob43vb21",
 *      "title":"Blue Lake",
 *      "description":"A fantastic view on the lake",
 *      "captureDate":"1-1-2021",
 *      "uploadDate":"3-1-2021",
 *      "isPublic":true,
 *      "secret":"f929gvb4",
 *      "views":150,
 *      "favorites":false,
 *      "inPhoto":[{...},{...},...],
 *      "tags":[{...},{...},...],
 *      "cameraName":"Cannon 201cf",
 *      "statusCode":200
 *
 * }
 *
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "PhotoNotFound",
 *        "statusCode":404
 *     }
 *
 * @apiErrorExample {json} Error-401:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized User",
 *        "statusCode":401
 *     }
 *
 *
 */
