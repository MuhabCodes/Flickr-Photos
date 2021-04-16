/**
 *
 * @api {GET} /photos/recentlyUpdated RecentlyUpdated
 * @apiDescription Return a list of your photos that have been recently created or which have been recently modified.
 * @apiGroup Photos
 * @apiVersion  0.0.1
 *
 *
 * @apiParam  {Date} minDate The date after which the modification occurred
 *
 * @apiSuccess (Success 200) {Number} statusCode The status code of the request
 * @apiSuccess (Success 200) {Object[]} photos The photos that have been recently modified
 * @apiError (Error 404) {String} error There are no photos found
 * @apiError (Error 404) {Number} statusCode The status code
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     "minDate" : "1-1-2020"
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "statusCode" : 200,
 *      "photos":[{...},{...},...]
 * }
 *
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "PhotosNotFound",
 *        "statusCode":404
 *     }
 *
 */
