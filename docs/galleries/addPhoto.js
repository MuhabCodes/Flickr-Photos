/**
 *
 * @api {POST} /galleries/:galleryId/photos addPhoto
 * @apiDescription Add a new photo to a gallery
 * @apiGroup galleries
 * @apiVersion  0.1.0
 * @apiPermission author
 *
 *
 * @apiParam  {String} galleryId The id of the gallery
 * @apiParam  {String} photoId The id of the photo to be added
 * @apiParam  {String} token User authorization token
 *
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiError (Error 404) {String} error The gallery isn't found
 * @apiError (Error 404) {Number} statusCode The status code
 * @apiError (Error 401) {String} error The user doesn't have persmission to do this action
 * @apiError (Error 401) {Number} statusCode The status code
 *
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     "galleryId" : "fsdihanub4",
 *      "photoId":"niavf234",
 *      "token":"987gv324"
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "statusCode":200
 * }
 *
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "GalleryNotFound",
 *        "statusCode":404
 *     }
 *
 * @apiErrorExample {json} Error-401:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized User",
 *        "statusCode":401
 *     }
 *
 */
