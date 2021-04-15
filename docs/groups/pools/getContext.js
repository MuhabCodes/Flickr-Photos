/**
 * 
 * @api {GET} /groups/:group_id/pools/photo/:photo_id/context getContext
 * @apiGroup groups.pools
 * @apiVersion  1.0.0
 * 
 * @apiDescription Get the two photos before and after a given photo.
 * 
 * @apiSuccess (Success 200) {Object[]} photoList A list containing the context pictures.
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 *  
 * @apiParam  {String} photo_id The id of the photo.
 * @apiParam  {String} group_id The id of the group where the photo exists.
 * 
 * @apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 * @apiError (Error 400) {Number} statusCode The status code
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
 *       "error": "Group Not Found",
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
 */