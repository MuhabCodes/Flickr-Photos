/**
 * 
 * @api {PUT} /photos/:photoId/comments/:commentId editComment
 *
 * @apiGroup photos-comments
 * @apiVersion  0.1.0
 * @apiDescription Edit the text of a comment as the currently authenticated user.
 *
 * 
*
* @apiParam   {String} commentId The id of the comment to edit.
*
* @apiParam  (Body){String} commentText Update the comment to this text.
*
*@apiSuccess (Success 200) {Number} statusCode The status code
* 

*@apiError (Error 404) {String} error The server can not find the requested resource. 
*@apiError (Error 404) {Number} statusCode The status code




* @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
* @apiError (Error 500) {Number} statusCode The status code

*@apiErrorExample {json} Error-404
*     HTTP/1.1 404 Not Found
*     {
*       "error": "commentNotFound",
*        "statusCode":404
*     }
*


 * 
* @apiSuccessExample {json} Success-Response:
*    "noSpecificResponse"
 * 
 */
// * @apiError (Error 400) {Number} statusCode The status code
// *@apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
// *@apiError (Error 401) {String} error The client must authenticate itself to get the requested response.( client unknown to server)
// *@apiError (Error 401) {Number} statusCode The status code
//  * @apiError (Error 403) {String} error The client does not have access rights to the content. (the client's identity is known to the server)
// * @apiError (Error 403) {Number} statusCode The status code
// *@apiErrorExample {json} Error-401
// *     HTTP/1.1 401 Unauthorized
// *     {
// *       "error": "Unauthorized User",
// *        "statusCode":401
// *     }
// * @apiError (Error 429) {String} error Too Many Requests ; the user has sent too many requests in a given amount of time ("rate limiting").
// * @apiError (Error 429) {Number} statusCode The status code