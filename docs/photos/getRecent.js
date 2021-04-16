/**
 *
 * @api {GET} /photos/getRecent GetRecent
 * @apiDescription Returns a list of the latest public photos uploaded to flickr.
 * @apiGroup photos
 * @apiVersion  0.0.1
 *
 *
 *
 * @apiSuccess (Success 200) {Number} statusCode The status code of the request
 * @apiSuccess (Success 200) {Object[]} photos The photos that have been recently uploaded
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "statusCode" : 200,
 *      "photos":[{...},{...},...]
 * }
 *
 *
 */
