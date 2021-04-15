/**
 *
 * @api {DELETE} /photos/:photo_id Delete a photo from flickr.
 * @apiName DeletePhoto
 * @apiGroup Photos
 * @apiVersion 1.0.0
 * @apiPermission author
 *
 *
 * @apiParam  {Number} photo_id The id of the photo to be deleted
 * @apiParam  {String} token User authorization token
 *
 * @apiExample Example usage:
 * curl -i http://localhost/photos/314
 *
 * @apiSuccess (Success 410) {Boolean} success The photo is deleted successfully
 * @apiSuccess (Success 410) {Number} status_code The status code
 * @apiError (Error 404) {String} error The photo isn't found
 * @apiError (Error 404) {Number} status_code The status code
 * @apiError (Error 401) {String} error The user doesn't have persmission to do this action
 * @apiError (Error 401) {Number} status_code The status code
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     "photo_id" : 314,
 *      "token":"9rug237g0dh2cn"
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *      HTTP/1.1 410 Gone
 * {
 *     "success" : true,
 *      "status_code":410
 * }
 *
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "PhotoNotFound",
 *        "status_code":404
 *     }
 *
 * @apiErrorExample {json} Error-401:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized User",
 *        "status_code":401
 *     }
 *
 *
 */
