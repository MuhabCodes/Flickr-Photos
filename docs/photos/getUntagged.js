/**
 *
 * @api {GET} /photos/getUntagged GetUntagged
 * @apiDescription Returns a list of your photos with no tags.
 * @apiGroup photos
 * @apiVersion 1.0.0
 * @apiPermission none
 *
 * @apiSuccess (Success 200) {Number} statusCode The status code of the request
 * @apiSuccess (Success 200) {Object[]} photos photos that don't have tags
 * @apiError (Error 404) {Number} statusCode The status code of the request
 * @apiError (Error 404) {String} error There are no photos without tags
 *
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
 *       "error": "NoPhotosFound",
 *        "statusCode":404
 *     }
 *
 */
