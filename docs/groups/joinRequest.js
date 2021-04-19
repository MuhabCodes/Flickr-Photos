/**
 * 
 * @api {POST} /groups/:groupId/joinRequest joinRequest
 * 
 * @apiGroup groups
 * @apiVersion  0.1.0
 * @apiDescription Request to join a group that is invitation-only.
 * 
 * 
 * 
 * @apiParam  {String} groupId The Id of the group to request joining.
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
 * 
 * 
 * 
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
 * 
 * 
 * 
 * 
 *@apiSuccessExample {json} Success-Response:
 * This method has no specific response - It returns an empty success response if it completes without error.
 */
