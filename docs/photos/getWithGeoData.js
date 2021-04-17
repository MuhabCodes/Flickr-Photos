/**
 *
 * @api {GET} /photos/getWithGeoData getWithGeoData
 * @apiDescription Returns a list of your geo-tagged photos
 * @apiGroup photos
 * @apiVersion  0.1.0
 * @apiPermission author
 *
 *
 * @apiParam  {String} token The authorization token of the user
 *
 * @apiSuccess (Success 200) {Number} statusCode The status code of the request
 * @apiSuccess (Success 200) {Object[]} photos photos that have geo tags
 * @apiError (Error 404) {Number} statusCode The status code of the request
 * @apiError (Error 404) {String} error There are no photos with geo tags
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     "token" : "bfui8343"
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "statusCode" : 200,
 *      "photos":[{...},{...},...]
 * }
 *
 *  @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "NoPhotosFound",
 *        "statusCode":404
 *     }
 *
 *
 */
