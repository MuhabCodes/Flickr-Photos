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
 * //TODO : Those booleans will be set in the body as this is a post request
 * //       There is no need to send them in the url
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
 * @apiError (Error 401) {String} error The user doesn't have permission to do this action
 * @apiError (Error 401) {Number} statusCode The status code
 *
 * @apiError (Error 403) {String} Forbidden The server understood the request but refuses to authorize it.
 * @apiError (Error 403) {Number} statusCode The status code
 *
 *
 * @apiError (Error 404) {String} error Informs the caller of the missing object.
 * @apiError (Error 404) {Number} statusCode The status code
 * 
 * 
 * @apiError (Error 403) {String} Forbidden The server understood the request but refuses to authorize it.
 * @apiError (Error 403) {Number} statusCode The status code
 *
 * 
 * @apiError (Error 408) {String} Request Timeout; the server would like to shut down this unused connection. It is sent on an idle connection by some servers, even without any previous request by the client.
 * @apiError (Error 408) {Number} statusCode The status code
 * 
 * @apiError (Error 417) {String} Expectation Failed ; the expectation given in the request's Expect header could not be met.
 * @apiError (Error 417) {Number} statusCode The status code
 * 
 * @apiError (Error 429) {String} Too Many Requests ; he user has sent too many requests in a given amount of time ("rate limiting").
 * @apiError (Error 429) {Number} statusCode The status code
 * 
 * @apiError (Error 411) {String} Length required ; the server refuses to accept the request without a defined Content-Length header.
 * @apiError (Error 411) {Number} statusCode The status code 
 *
 * @apiError (Error 500) {String} Internal Server Error ;the server encountered an unexpected condition that prevented it from fulfilling the request.
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