/**
 * 
 * @api {POST} photos/:photoId/geo/perms/isPublic/:isPublic/isContact/:isContact/isFriend/:isFriend/isFamily/:isFamily setPerms
 * 
 * @apiGroup photos-geo
 * @apiVersion  0.1.0
 * @apiDescription Set the permission for who may view the geo data associated with a photo.
 * 
 * 
 * 
 * @apiParam  {Boolean} isPublic 1 to set viewing permissions for the photo's location data to public, 0 to set it to private.
 * @apiParam  {Boolean} isContact 1 to set viewing permissions for the photo's location data to contacts, 0 to set it to private.
 * @apiParam  {Boolean} isFriend 1 to set viewing permissions for the photo's location data to friends, 0 to set it to private.
 * @apiParam  {Boolean} isFamily 1 to set viewing permissions for the photo's location data to family, 0 to set it to private.
 * @apiParam  {String} photoId The id of the photo to get permissions for.
 * 
     * @apiSuccess (Success 200) {Number} statusCode The status code 
 * 
 * 
 * 
 * 
  * @apiError (Error 400) {Number} statusCode The status code
 * @apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 *
 *
 * @apiError (Error 401) {String} error The client must authenticate itself to get the requested response.( client unknown to server)
 * @apiError (Error 401) {Number} statusCode The status code
 *
 * @apiError (Error 403) {String} error The client does not have access rights to the content. (the client's identity is known to the server)
 * @apiError (Error 403) {Number} statusCode The status code
 *
 *
 * @apiError (Error 404) {String} error The server can not find the requested resource. 
 * @apiError (Error 404) {Number} statusCode The status code
 * 
 * 
 * @apiError (Error 408) {String} error RequestTimeout the server would like to shut down this unused connection. It is sent on an idle connection by some servers, even without any previous request by the client.
 * @apiError (Error 408) {Number} statusCode The status code
 * 
 * @apiError (Error 411) {String} error Length required the server refuses to accept the request without a defined Content-Length header.
 * @apiError (Error 411) {Number} statusCode The status code 
 * 
 * @apiError (Error 417) {String} error Expectation Failed the expectation given in the request's Expect header could not be met.
 * @apiError (Error 417) {Number} statusCode The status code
 * 
 * @apiError (Error 429) {String} error Too Many Requests he user has sent too many requests in a given amount of time ("rate limiting").
 * @apiError (Error 429) {Number} statusCode The status code
 * 
 *
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
@apiErrorExample {json} Error-404
*     HTTP/1.1 404 Not Found
*     {
*       "error": "photoNotFound",
*        "statusCode":404
*     }
 
@apiErrorExample {json} Error-401
*     HTTP/1.1 401 Unauthorized
*     {
*       "error": "Unauthorized User",
*        "statusCode":401
*     }


*@apiSuccessExample {json} Success-Response:
*This method has no specific response - It returns an empty success response if it completes without error.
 * 
 * 
 */