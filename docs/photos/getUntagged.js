/**
 *
 * @api {GET} /photos/getUntagged Returns a list of your photos with no tags.
 * @apiName GetUntagged
 * @apiGroup Photos
 * @apiVersion  0.0.1
 * @apiPermisson none
 *
 * @apiSuccess (Success 200) {Number} statusCode The status code of the request
 * @apiSuccess (Success 200) {Object[]} photos Photos that don't have tags
 * @apiError (Error 404) {Number} statusCode The status code of the request
 * @apiError (Error 404) {String} error There are no photos without tags
 *
 *
 *
 * @apiSuccessExample {type} Success-Response:
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
