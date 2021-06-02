/**
 * 
 * @api {GET} /photos/:photoId/comments getList
 * @apiGroup photos-comments
 * @apiVersion  0.1.0
 * @apiDescription Returns the comments for a photo
 * 
 * 
 *
 * @apiParam  (Body){String} photoId The id of the photo to fetch comments for.
 * @apiParam  (Body){Date} [minCommentDate] Minimum date that a a comment was added. The date should be in the form of a unix timestamp.
 * @apiParam  (Body){Date} [maxCommentDate] Maximum date that a comment was added. The date should be in the form of a unix timestamp.
 *
 *@apiSuccess (Success 200) {Object[]} commentsList List of all Comments 
*@apiSuccess (Success 200) {Number} statusCode The status code

// *@apiError (Error 404) {String} error The server can not find the requested resource. 
// *@apiError (Error 404) {Number} statusCode The status code
* @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
* @apiError (Error 500) {Number} statusCode The status code
*@apiErrorExample {json} Error-404
*     HTTP/1.1 404 Not Found
*     {
*       "error": "commentNotFound",
*        "statusCode":404
*     }

* @apiSuccessExample {json} Success-Response:
*    {
   "photo_Id": "109722179",
   "comment": {
      "_id": "6065-109722179-72057594077818641",
      "authorId": "35468159852@N01",
      "authorName": "Rev Dan Catt",
      "dateCreate": "1141841470",
      "text": "Umm, I'm not sure, can I get back to you on that one?"
   }
}
* 
*/
// *@apiError (Error 400) {Number} statusCode The status code
// *@apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
// *@apiError (Error 401) {String} error The client must authenticate itself to get the requested response.( client unknown to server)
// *@apiError (Error 401) {Number} statusCode The status code

//  * @apiError (Error 403) {String} error The client does not have access rights to the content. (the client's identity is known to the server)
// * @apiError (Error 403) {Number} statusCode The status code





// * @apiError (Error 429) {String} error Too Many Requests ; the user has sent too many requests in a given amount of time ("rate limiting").
// * @apiError (Error 429) {Number} statusCode The status code
// *@apiErrorExample {json} Error-401
// *     HTTP/1.1 401 Unauthorized
// *     {
// *       "error": "Unauthorized User",
// *        "statusCode":401
// *     }