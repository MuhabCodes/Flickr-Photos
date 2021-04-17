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
 * @apiError (Error 404) {String} error The gallery isn't found
 * @apiError (Error 404) {Number} statusCode The status code
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
 *      "photos":[{...},{...},...]
 * }
 *
 *  @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "GalleryNotFound",
 *        "statusCode":404
 *     }
 *
 */
