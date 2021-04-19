/**
 *
 * @api {GET} /photos/getWithoutGeoData getWithoutGeoData
 * @apiDescription Returns a list of your not geo-tagged photos
 * @apiGroup photos
 * @apiVersion  0.1.0
 *
 *
 *
 * @apiSuccess (Success 200) {Number} statusCode The status code of the request
 * @apiSuccess (Success 200) {Object[]} photos photos that don't have geo tags
 * @apiError (Error 404) {Number} statusCode The status code of the request
 * @apiError (Error 404) {String} error There are no photos without geo tags
 *
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
 *  @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "NoPhotosFound",
 *        "statusCode":404
 *     }
 *
 *
 */
