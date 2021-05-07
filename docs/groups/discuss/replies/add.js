/**
 * 
 * @api {POST} /groups/:groupId/discuss/:topicId/replies add
 *
 * @apiGroup groups-discuss-replies
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} groupId Pass in the group id to where the topic belongs. Can be NSID or group alias. Making this parameter optional for legacy reasons, but it is highly recommended to pass this in to get faster performance.
 * @apiParam  {String} topicId The ID of the topic to post a comment to.
 * @apiParam  {String} reply The message to post to the topic.
 *
 *@apiSuccess (Success 200) {Number} statusCode The status code
*
*@apiError (Error 400) {Number} statusCode The status code
*@apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.

*@apiError (Error 401) {String} error The client must authenticate itself to get the requested response.( client unknown to server)
*@apiError (Error 401) {Number} statusCode The status code
* @apiError (Error 403) {String} error The client does not have access rights to the content. (the client's identity is known to the server)
* @apiError (Error 403) {Number} statusCode The status code
*@apiError (Error 404) {String} error The server can not find the requested resource. 
*@apiError (Error 404) {Number} statusCode The status code

 



* @apiError (Error 429) {String} error  Too Many Requests ; the user has sent too many requests in a given amount of time ("rate limiting").
* @apiError (Error 429) {Number} statusCode The status code
* @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
* @apiError (Error 500) {Number} statusCode The status code



*@apiDescription Post a new reply to a group discussion topic.

*@apiErrorExample {json} Error-404
*     HTTP/1.1 404 Not Found
*     {
*       "error": "discussionNotFound",
*        "statusCode":404
*     }
*@apiErrorExample {json} Error-401
*     {
*       "error": "Unauthorized User",
*        "statusCode":401
*     }
 * 
 * @apiSuccessExample {json} Success-Response:
*    "noSpecificResponse"
 * 
 *
 * 
 * 
 */