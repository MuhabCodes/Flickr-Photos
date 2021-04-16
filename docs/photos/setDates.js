/**
 *
 * @api {PUT} /photos/:photoId/setDates SetDates
 * @apiDescription Set one or both of the dates for a photo.
 * @apiGroup Photos
 * @apiVersion  0.0.1
 *
 *
 * @apiParam  {Number} photoId The id of the photo
 * @apiParam  {Date} uploadDate The upload date of the photo
 * @apiParam  {Date} captureDate The capture date of the photo
 *
 * @apiSuccess (Success 200) {Number} statusCode The status code of the request
 * @apiError (Error 404) {String} error The photo isn't found
 * @apiError (Error 404) {Number} statusCode The status code
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     "photoId" : 458,
 *      "uploadDate":"1-2-2020",
 *      "captureDate":"1-2-2019"
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "statusCode" : 200
 * }
 *
 *
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "PhotoNotFound",
 *        "statusCode":404
 *     }
 *
 */
