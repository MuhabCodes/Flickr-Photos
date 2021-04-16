/**
 *
 * @api {GET} /photos/:photoId GetFavorites
 * @apiDescription Returns the list of people who have favorited a given photo
 * @apiGroup photos
 * @apiVersion 1.0.0
 * @apiPermission none
 *
 *
 * @apiParam  {String} photoId The id of the photo to add tags to
 *
 * @apiSuccess (Success 200) {Number} statusCode The status code of the request
 * @apiSuccess (Success 200) {Object[]} users Users that have this photo in their favorites
 * @apiError (Error 404) {Number} statusCode The status code of the request
 * @apiError (Error 404) {String} error The photo is not found
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     "photoId" : "dsofbyi32"
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "statusCode" : 200,
 *      "users":[{...},{...},...]
 * }
 *
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "PhotoNotFound",
 *        "statusCode":404
 *     }
 *
 *
 */
