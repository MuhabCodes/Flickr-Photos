/**
 *
 * @api {GET} /photos/:photoId/context getContext
 * @apiDescription Returns next and previous photos for a photo in a photostream.
 * @apiGroup photos
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} photoId The id of the photo to fetch the context for.
 *
 * @apiSuccess (Success 200) {Number} statusCode The status code of the request
 * @apiSuccess (Success 200) {Object} prevPhoto The previous photo in the photostream
 * @apiSuccess (Success 200) {Object} nextPhoto The next photo in the photostream
 * @apiError (Error 404) {String} error The server can not find the requested resource. 
 * @apiError (Error 404) {Number} statusCode The status code
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 *
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "statusCode" : 200,
 *     "prevPhoto":{
 *              "title":"Waterfall",
 *              "uploadDate":"2020-05-01T01:50:08",
 *              "imagePath":"www.example.com/doasf",
 *              "isPublic":true,
 *              "description" :"This is the description",
 *              "views":123,
 *              "captureDate":"2021-12-01T19:11:08",
 *              "secret":"dfjio324",
 *              "photoId":"dsphnfio2"
 *              },
 *      "nextPhoto":{
 *              "title":"NYC Silcion valley",
 *              "uploadDate":"1-2-2020",
 *              "imagePath":"www.example.com/htfgrwe",
 *              "isPublic":true,
 *              "description" :"This is the description",
 *              "views":1255,
 *              "captureDate":"1-1-2020",
 *              "secret":"b349ub5",
 *              "photoId":"tini34nt"
 *              }
 * }
 *
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "PhotoNotFound",
 *        "statusCode":404
 *     }
 *
 *  *  @apiErrorExample {json} Error-500:
 *     HTTP/1.1 500 InternalServerError
 *     {
 *       "error": "InternalServerError",
 *        "statusCode":500
 *     }
 *
 *
 */
