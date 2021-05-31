/**
 * 
 * @api {PUT} /photos/:photoId editPhoto
 * @apiDescription Edit a certain photo based on the id
 * @apiGroup photos
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} photoId The id of the photo to get information for.
 * 
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 * @apiError (Error 404) {String} error The server can not find the requested resource. 
 * @apiError (Error 404) {Number} statusCode The status code
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "statusCode" : 200
 * }
 * 
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "PhotoNotFound",
 *        "statusCode":404
 *     }
 * 
 * 
 */