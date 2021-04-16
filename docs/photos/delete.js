/**
 *
 * @api {DELETE} /photos/:photoId DeletePhoto
 * @apiDescription Delete a photo from flickr.
 * @apiGroup Photos
 * @apiVersion 1.0.0
 * @apiPermission author
 *
 *
 * @apiParam  {String} photoId The id of the photo to be deleted
 * @apiParam  {String} token User authorization token
 *
 * @apiExample Example usage:
 * curl -i http://localhost/photos/314
 *
 * @apiSuccess (Success 410) {Number} statusCode The status code
 * @apiError (Error 404) {String} error The photo isn't found
 * @apiError (Error 404) {Number} statusCode The status code
 * @apiError (Error 401) {String} error The user doesn't have persmission to do this action
 * @apiError (Error 401) {Number} statusCode The status code
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     "photoId" : "dfhioart23",
 *      "token":"9rug237g0dh2cn"
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *      HTTP/1.1 410 Gone
 * {
 *      "statusCode":410
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
