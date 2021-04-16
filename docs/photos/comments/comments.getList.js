/**
 * 
 * @api {GET} /photos/:photoId/comments getList
 * @apiGroup photos.comments
 * @apiVersion 1.0.0
 * @apiDescription Returns the comments for a photo
 * 
 * 
 *
 * @apiParam  {String} photoId The id of the photo to fetch comments for.
 * @apiParam  {Date} [min_comment_date] Minimum date that a a comment was added. The date should be in the form of a unix timestamp.
 * @apiParam  {Date} [max_comment_date] Maximum date that a comment was added. The date should be in the form of a unix timestamp.
 *
 *@apiSuccess (Success 200) {Object[]} commentsList List of all Comments 
*@apiSuccess (Success 200) {Number} statusCode The status code
*@apiError (Error 400) {Number} statusCode The status code
*@apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
*@apiError (Error 401) {String} error The user doesn't have permission to do this action
*@apiError (Error 401) {Number} statusCode The status code
*@apiError (Error 404) {String} error Informs the caller of the missing object.
*@apiError (Error 404) {Number} statusCode The status code
*@apiErrorExample {json} Error-404
*     HTTP/1.1 404 Not Found
*     {
*       "error": "commentNotFound",
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
*/