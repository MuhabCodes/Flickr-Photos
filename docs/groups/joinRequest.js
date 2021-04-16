/**
 * 
 * @api {POST} /groups/:groupId/joinRequest joinRequest
 * @apiName groups
 * @apiGroup groups
 * @apiVersion  1.0.0
 * @apiDescription Request to join a group that is invitation-only.
 * 
 * 
 * 
 * @apiParam  {String} groupId The NSID of the group to request joining.
 * @apiParam  {String} message Message to the administrators.
 * @apiParam  {String} acceptRules If the group has rules, they must be displayed to the user prior to joining. Passing a true value for this argument specifies that the application has displayed the group rules to the user, and that the user has agreed to them. (See flickr.groups.getInfo).
 * 
 * 
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 * 
 * @apiError (Error 400) {Number} statusCode The status code
 * @apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 *
 * @apiError (Error 401) {String} error The user doesn't have permission to do this action
 * @apiError (Error 401) {Number} statusCode The status code

 
* @apiError (Error 404) {String} error Informs the caller of the missing object.
* @apiError (Error 404) {Number} statusCode The status code
 
* @apiErrorExample {json} Error-404:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "groupNotFound",
*        "statusCode":404
*     }
 
* @apiErrorExample {json} Error-401:
*     HTTP/1.1 401 Unauthorized
*     {
*       "error": "Unauthorized User",
*        "statusCode":401
*     }

 * 

 * 
 * 
 */