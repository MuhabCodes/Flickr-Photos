/**
 *
 * @api {POST} /photos/:photoID AddTag
 * @apiDescription Add tags to the photo
 * @apiGroup Photos
 * @apiVersion 1.0.0
 * @apiPermission author
 *
 * @apiParam  {Number} photoId The id of the photo to add tags to
 * @apiParam  {Object[]} tags The tags to add to the photo.
 * @apiParam  {String} token The user authentication token
 *
 * @apiSuccess (Success 200) {Number} statusCode The status code of the request
 * @apiError (Error 404) {Number} statusCode The status code of the request
 * @apiError (Error 404) {String} error The photo is not found
 * @apiError (Error 401) {String} error The user doesn't have persmission to do this action
 * @apiError (Error 401) {Number} statusCode The status code
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     "photoId" : 456,
 *      "tags": [{...},{...},...],
 *      "token":"iudbfgubr2"
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "statusCode" : 200
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
 */
