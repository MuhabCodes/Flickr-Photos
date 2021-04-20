/**
 *
 * @api {DELETE} /photos/:photoID/tags/:tagId removeTag
 * @apiDescription Remove a tag from a photo.
 * @apiGroup Photos
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} photoId The id of the photo
 * @apiParam  {String} tagId The tag to remove from the photo
 *
 * @apiSuccess (Success 200) {Number} statusCode The status code of the request
 * @apiError (Error 404) {Number} statusCode The status code of the request
 * @apiError (Error 404) {String} error The photo is not found
 * @apiError (Error 404) {String} error The tag is not found within the photo
 * @apiError (Error 401) {String} error The user doesn't have persmission to do this action
 * @apiError (Error 401) {Number} statusCode The status code
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 * @apiError (Error 403) {String} error The server understood the request but refuses to authorize it.
 * @apiError (Error 403) {Number} statusCode The status code
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     "photoId" : "hsdf3422",
 *      "tagId":"hsdf7657"
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
 * @apiErrorExample {json} Error-500:
 *     HTTP/1.1 500 InternalServerError
 *     {
 *       "error": "InternalServerError",
 *        "statusCode":500
 *     }
 * @apiErrorExample {json} Error-403:
 *     HTTP/1.1 403 Forbidden
 *     {
 *       "error": "Forbidden",
 *        "statusCode":403
 *     }
 *
 */
