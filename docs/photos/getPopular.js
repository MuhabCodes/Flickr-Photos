/**
 *
 * @api {GET} /photos/popular getPopular
 * @apiDescription Returns a list of popular photos
 * @apiGroup photos
 * @apiVersion  0.1.0
 *
 *
 *
 * @apiSuccess (Success 200) {Number} statusCode The status code of the request
 * @apiSuccess (Success 200) {Object[]} photos The photos that are popular
 *
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
