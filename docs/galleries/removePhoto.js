/**
 *
 * @api {POST} /galleries/:galleryId/removePhoto Remove a photo from a gallery.
 * @apiName RemovePhoto
 * @apiGroup Galleries
 * @apiVersion  0.0.1
 * @apiPermission author
 *
 *
 * @apiParam  {Number} galleryId The ID of the gallery to remove a photo from
 * @apiParam  {Number} photoId The ID of the photo to remove from the gallery
 * @apiParam  {String} token The authorization token of the user
 *
 * @apiSuccess (Success 200) {Number} statusCode The status code of the request
 * @apiError (Error 404) {Number} statusCode The status code of the request
 * @apiError (Error 404) {String} error The photo is not found within the gallery
 * @apiError (Error 404) {String} error The gallery is not found
 * @apiError (Error 401) {String} error The user doesn't have persmission to do this action
 * @apiError (Error 401) {Number} statusCode The status code
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     "photoId" : 123,
 *      "galleryId":43,
 *      "token":"shif0843"
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "statusCode" : 200
 * }
 *
 *  @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "PhotoNotFoundInGallery",
 *        "statusCode":404
 *     }
 *  @apiErrorExample {json} Error-404:
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
