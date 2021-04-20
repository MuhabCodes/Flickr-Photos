/**
 *
 * @api {GET} /galleries/:galleryId/photos getPhotos
 * @apiDescription Return the list of photos for a gallery
 * @apiGroup galleries
 * @apiVersion  0.1.0
 * @apiPermission none
 *
 *
 * @apiParam  {String} galleryId The id of the gallery
 *
 * @apiSuccess (Success 200) {Number} statusCode The statusCode
 * @apiSuccess (Success 200) {Object[]} photos Array of photos within the gallery
 * @apiError (Error 404) {String} error The server can not find the requested resource. 
 * @apiError (Error 404) {Number} statusCode The status code
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     "galleryId" : "dshfnug24"
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *      "statusCode":200,
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
 *       "error": "GalleryNotFound",
 *        "statusCode":404
 *     }
 *  @apiErrorExample {json} Error-500:
 *     HTTP/1.1 500 InternalServerError
 *     {
 *       "error": "InternalServerError",
 *        "statusCode":500
 *     }
 *
 */
