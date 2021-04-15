/**
 *
 * @api {GET} /galleries/:galleryId Get information about a gallery
 * @apiName GetInfo
 * @apiGroup Galleries
 * @apiVersion 1.0.0
 * @apiPermission none
 *
 *
 * @apiParam  {Number} galleryId The id of the gallery
 *
 * @apiSuccess (Success 200) {Number} authorId The id of the author of this photo
 * @apiSuccess (Success 200) {Number} photoId The id of the primary photo
 * @apiSuccess (Success 200) {String} title The title of the gallery
 * @apiSuccess (Success 200) {String} description The description given to the gallery
 * @apiSuccess (Success 200) {Date} updateDate The date that the gallery was updated
 * @apiSuccess (Success 200) {Date} createDate The date that the gallery was created
 * @apiSuccess (Success 200) {Number} countPhotos The Number of photos in the gallery
 * @apiSuccess (Success 200) {String} photoSecret The secret of the primary photo
 * @apiError (Error 404) {String} error The gallery isn't found
 * @apiError (Error 404) {Number} statusCode The status code
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     "galleryId" : 12
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "authorId" : 13,
 *      "photoId":15,
 *      "title":"My Gallery",
 *      "description":"The gallery description",
 *      "updateDate":"1-1-2010",
 *      "createDate":"1-1-2009",
 *      "countPhotos":17,
 *      "photoSecret":"fu9g9233"
 * }
 *
 * * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "GalleryNotFound",
 *        "statusCode":404
 *     }
 *
 */
