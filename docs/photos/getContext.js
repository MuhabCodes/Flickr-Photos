/**
 *
 * @api {GET} /photos/:photoId/getContext GetContext
 * @apiDescription Returns next and previous photos for a photo in a photostream.
 * @apiGroup Photos
 * @apiVersion  0.0.1
 *
 *
 * @apiParam  {Number} photoId The id of the photo to fetch the context for.
 *
 * @apiSuccess (Success 200) {Number} statusCode The status code of the request
 * @apiSuccess (Success 200) {Object} prevPhoto The previous photo in the photostream
 * @apiSuccess (Success 200) {Object} nextPhoto The next photo in the photostream
 * @apiError (Error 404) {String} error The photo doesn't exist
 * @apiError (Error 404) {Number} statusCode The status code
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     "photoId" : 854
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "statusCode" : 200,
 *     "prevPhoto":{...},
 *      "nextPhoto":{...}
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
