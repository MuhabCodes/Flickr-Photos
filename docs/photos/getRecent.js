/**
 *
 * @api {GET} /photos/recent getRecent
 * @apiDescription Returns a list of the latest public photos uploaded to flickr.
 * @apiGroup photos
 * @apiVersion  0.1.0
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
 *      "photos":[{
 *              "title":"Waterfall",
 *              "uploadDate":"1-2-2020",
 *              "imagePath":"www.example.com/doasf",
 *              "isPublic":true,
 *              "description" :"This is the description",
 *              "views":123,
 *              "captureDate":"1-1-2020",
 *              "secret":"dfjio324",
 *              "photoId":"dsphnfio2"
 *              },{...},...]
 * }
 *
 *
 */
