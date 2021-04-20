/**
 *
 * @api {GET} /galleries/:galleryId/info getInfo
 * @apiDescription Get information about a gallery
 * @apiGroup galleries
 * @apiVersion  0.1.0
 * @apiPermission none
 *
 *
 * @apiParam  {String} galleryId The id of the gallery
 *
 * @apiSuccess (Success 200) {String} authorId The id of the author of this photo
 * @apiSuccess (Success 200) {String} photoId The id of the primary photo
 * @apiSuccess (Success 200) {String} title The title of the gallery
 * @apiSuccess (Success 200) {String} description The description given to the gallery
 * @apiSuccess (Success 200) {Date} updateDate The date that the gallery was updated
 * @apiSuccess (Success 200) {Date} createDate The date that the gallery was created
 * @apiSuccess (Success 200) {Number} countPhotos The Number of photos in the gallery
 * @apiSuccess (Success 200) {String} photoSecret The secret of the primary photo
 * @apiError (Error 404) {String} error The server can not find the requested resource. 
 * @apiError (Error 404) {Number} statusCode The status code
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     "galleryId" : "fdshgy234"
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "authorId" : "asdgfyvwer32",
 *      "photoId":"asdgfyvwer3231234",
 *      "title":"My Gallery",
 *      "description":"The gallery description",
 *      "updateDate":"1-1-2010",
 *      "createDate":"1-1-2009",
 *      "countPhotos":17,
 *      "photoSecret":"fu9g9233"
 * }
 *
 *  @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "GalleryNotFound",
 *        "statusCode":404
 *     }
 *
 * @apiErrorExample {json} Error-500:
 *     HTTP/1.1 500 InternalServerError
 *     {
 *       "error": "InternalServerError",
 *        "statusCode":500
 *     }
 *
 */
