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

*@apiError (Error 401) {String} error The user doesn't have permission to do this action
*@apiError (Error 401) {Number} statusCode The status code

*@apiError (Error 404) {String} error Informs the caller of the missing object.
*@apiError (Error 404) {Number} statusCode The status code
*@apiDescription Post a new reply to a group discussion topic.

*@apiErrorExample {json} Error-404
*     HTTP/1.1 404 Not Found
*     {
*       "error": "discussionNotFound",
*        "statusCode":404
*     }
*@apiErrorExample {json} Error-401
*     HTTP/1.1 401 Unauthorized
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