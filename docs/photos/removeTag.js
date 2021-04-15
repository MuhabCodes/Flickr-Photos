/**
 *
 * @api {POST} /photos/:photoID/removeTag Remove a tag from a photo.
 * @apiName RemoveTag
 * @apiGroup Photos
 * @apiVersion  0.0.1
 * @apiPermission author
 *
 *
 * @apiParam  {Number} photoId The id of the photo
 * @apiParam  {Number} tagId The tag to remove from the photo
 * @apiParam  {String} token The authorization token of the user
 *
 * @apiSuccess (Success 200) {Number} statusCode The status code of the request
 * @apiError (Error 404) {Number} statusCode The status code of the request
 * @apiError (Error 404) {String} error The photo is not found
 * @apiError (Error 404) {String} error The tag is not found within the photo
 * @apiError (Error 401) {String} error The user doesn't have persmission to do this action
 * @apiError (Error 401) {Number} statusCode The status code
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     "photoId" : 123,
 *      "tagId":43,
 *      "token":"shif0843"
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "statusCode" : 200
 * }
 *
 *  @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "PhotoNotFound",
 *        "statusCode":404
 *     }
 *  @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "TagNotFoundInPhoto",
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
 */
