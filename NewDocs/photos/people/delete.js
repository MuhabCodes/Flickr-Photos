/**
 * 
 * @api {DELETE} /photo/:photoId/people/ deletePersonFromPhoto
 * @apiGroup photos-people
 * @apiVersion  0.1.1
 * 
 * @apiDescription Removes a person from a photo
 * 
 *  
 * @apiParam  {String} photoId The id of the photo to remove a person from.
 * 
 * @apiParam (Body) {String} userId The id of the person to remove from the photo.
 * 
 * 
 * @apiSuccess (Success 200) {Number} statusCode The status code.
 * 
 * 
 * @apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 * @apiError (Error 400) {Number} statusCode The status code
 *
 * @apiError (Error 403) {String} error The client does not have access rights to the content. (the client's identity is known to the server)
 * @apiError (Error 403) {Number} statusCode The status code
 *
 *
 * @apiError (Error 404) {String} error The server can not find the requested resource. 
 * @apiError (Error 404) {Number} statusCode The status code
 *
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 *
 * @apiErrorExample {json} Error-404
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "userNotFound",
 *        "statusCode":404
 *     }
 *
 * @apiErrorExample {json} Error-401
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized User",
 *        "statusCode":401
 *     }
 */