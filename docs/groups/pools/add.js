/**
 * 
 * @api {POST} /groups/:groupId/photos/:photoId addPhoto
 * @apiGroup groups.pools
 * @apiVersion  1.0.0
 * 
 * @apiDescription Add a photo to a group's pool.
 * 
 *  
 * @apiParam  {String} groupId The id of the group to add the photo to.
 * @apiParam  {String} photoId The id of the photo to add. Photo must belong to the calling user.
 * 
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 * 
 * @apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 *@apiError (Error 400) {Number} statusCode The status code
 *
 * @apiError (Error 401) {String} error The user doesn't have permission to do this action
 * @apiError (Error 401) {Number} statusCode The status code
 *
 *
 * @apiError (Error 404) {String} error Informs the caller of the missing object.
 * @apiError (Error 404) {Number} statusCode The status code
 *
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "The photo was not found.",
 *        "status_code":404
 *     }
 *
 * @apiErrorExample {json} Error-401:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized User",
 *        "status_code":401
 *     }
 */