/**
 * 
 * @api {POST} /groups/:groupId/leave leave
 * @apiName groups
 * @apiGroup groups
 * @apiVersion  1.0.0
 * @apiDescription Leave a group.

If the user is the only administrator left, and there are other members, the oldest member will be promoted to administrator.

If the user is the last person in the group, the group will be deleted.

 * 
 * 
 * @apiParam  {String} groupId The NSID of the Group to leave
 * @apiParam  {Boolean} [deletePhotos] Delete all photos by this user from the group
 * 
 * 
 * @apiSuccess (Success 200) {Number} statusCode The status code
 *
 * 
 * @apiError (Error 400) {Number} statusCode The status code
 * @apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
  
 
* @apiError (Error 401) {String} error The user doesn't have permission to do this action
* @apiError (Error 401) {Number} statusCode The status code

 
* @apiError (Error 404) {String} error Informs the caller of the missing object.
* @apiError (Error 404) {Number} statusCode The status code
 
* @apiErrorExample {json} Error-404
*     HTTP/1.1 404 Not Found
*     {
*       "error": "photoNotFound",
*        "statusCode":404
*     }
 
*@apiErrorExample {json} Error-401
*     HTTP/1.1 401 Unauthorized
*     {
*       "error": "Unauthorized User",
*        "statusCode":401
*     }

 *  

 * 
 * 
 */